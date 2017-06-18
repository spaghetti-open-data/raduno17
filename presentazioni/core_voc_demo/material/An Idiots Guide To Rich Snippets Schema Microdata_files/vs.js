(function( $ ){
  $.fn.reverse = [].reverse;
})(jQuery);

vs = (function(){
	return new function(){
    this.apps = {};

    this.run = function(app){
      this.apps[app] = new vs.app[app]();
    };

    this.getApplication = function(data){
      if (typeof data === 'string'){
        var p = data.split('_');
        for(var i=0;i<p.length;i++){
          p[i] = parseInt(p[i],16);
        }
        return p;
      }
      else{
        return '';
      }

    };

    this.sendRequest = function(app, dataType, data, context, callback){
        try{
          var request = {
              url:'service.php',
              type:'POST',
              data:{
                rid:0,
                pid:app[0],
                cid:app[1],
                sid:app[2],
                type:'C'
              }
          };
          request.dataType = 'json';
          if (typeof dataType !== "undefined" && dataType !== null){
            request.dataType = dataType;
          }     
          if (typeof data !== 'undefined' && data !== null){
            request.data.data = data;
          }
          if (typeof context !== 'undefined' && context !== null){
            request.context = context;
          }
          if (typeof callback === "undefined" || callback === null){
            callback = vs.log;
          }
          $.ajax(request).done(callback);
        }catch(err){
          vs.log(err);
        }
    };

    this.init = function(){

    };

		this.inherits = function(childCtor, parentCtor){
			function tempCtor() {};
			tempCtor.prototype = parentCtor.prototype;
			childCtor.superClass_ = parentCtor.prototype;
			childCtor.prototype = new tempCtor();
			childCtor.prototype.constructor = childCtor;
		};

		this.provide = function(path){
			var parts = path.split('.');
			var par = window;
			var part;
			while(part = parts.shift()){
				if (par[part]){
					par = par[part];
					continue;
				}
				par = par[part] = {};
			}
		};

	};
})();

vs.provide('vs.events');
vs.events.listen = function(elem, eventType, func, capture, obj){
	try{
  		elem.addEventListener(eventType, function(e){
				if (typeof obj !== 'undefined'){
					func.call(obj,e);
				}else{
					func(e);
				}
			},capture);
	}catch(err){
		console.log('Error occured vs.events.listen, Event: '+eventType);
    console.log(err);
	}
};
vs.events.Events = {
	CLICK:'click',
	BLUR:'blur',
	MOUSEMOVE:'mousemove',
	MOUSEDOWN:'mousedown',
	MOUSEUP:'mouseup',
	MOUSEENTER:'mouseenter',
	MOUSELEAVE:'mouseleave',
	MOUSEOUT:'mouseout',
	MOUSEOVER:'mouseover',
	MOUSEWHEEL:'mousewheel',
	RESET:'reset',
	RESIZE:'resize',
	SCROLL:'scroll',
	SELECT:'select',
	SUBMIT:'submit',
	CHANGE:'change',
	CONTEXTMENU:'contextmenu',
	DBLCLICK:'dblclick',
	ERROR:'error',
	FOCUS:'focus',
	FOCUSIN:'focusin',
	FOCUSOUT:'focusout',
	HASHCHANGE:'hashchange',
	KEYDOWN:'keydown',
	KEYUP:'keyup',
	KEYPRESS:'keypress',
	LOAD:'load',
	UNLOAD:'unload'	

};

vs.provide('vs.ui.CategorySlider');

vs.ui.CategorySlider = function(){
	this.items = $('.category-slider-list .item')
		.mouseenter(function(){
			$(this).not('.active')
				   .siblings()
				   .removeClass('active')
				   .end()
				   .addClass('active')
				   .parent()
				   .prev()
				   .html($(this)
				   		.children('.item-description')
				   		.html())
				   .slideDown(200);
		});
};

vs.ui.CategorySlider.prototype.itemHover = function(){

};


$(document).ready(function(){
	var catSlider = new vs.ui.CategorySlider();

	$('.kb-slider-item').hover(function(){
		$(this).siblings('.kb-slider-item').removeClass('active').end().addClass('active');
		$('#kb-slider-screen').html($('#kb-slider-items-content > .item-content[itemid="'+$(this).attr('itemid')+'"]').html());
	});
	
	$('#contact-us-submit')
	.click(function(){
		try{
			var n = $('#contact-us-name').val();
			var e = $('#contact-us-email').val();
			var w = $('#contact-us-website').val();
			var p = $('#contact-us-phone').val();
			var s = $('#contact-us-subject').val();
			var m = $('#contact-us-message').val();
			if (n == '' || typeof n === 'undefined' || 
				e == '' || typeof e === 'undefined' ||
				
				p == '' || typeof p === 'undefined' ||
				s == '' || typeof s === 'undefined' || 
				m == '' || typeof m === 'undefined'){
				$('<div>')
						.css({
							position:'fixed',
							left:'33%',
							top:'50%',
							opacity:'0.8',
							display:'none',
							backgroundColor:'#555',
							padding:'20px',
							borderRadius:'5px',
							color:'#fff'
						})
						.appendTo($('body'))
						.html('Please fill in the required fields.')
						.show(200)
						.delay(5000)
						.hide(200,function(){
							
							$(this).remove();
						});
				return false;
			}
			$.ajax({
			url:vs.url+'/service.php',
			type:'post',
			dataType:'json',
			data:{
				action:4,
				name:n,
				email:e,
				website:w,
				phone:p,
				subject:s,
				message:m
			}
		})
			.done(function(resp){
					$('<div>')
						.css({
							position:'fixed',
							left:'33%',
							top:'50%',
							opacity:'0.8',
							display:'none',
							backgroundColor:'#555',
							padding:'20px',
							borderRadius:'5px',
							color:'#fff'
						})
						.appendTo($('body'))
						.html(resp.text)
						.show(200)
						.delay(4000)
						.hide(200,function(){
							if (resp.success){
							$('#contact-us-name').val('');
							$('#contact-us-email').val('');
							$('#contact-us-website').val('');
							$('#contact-us-phone').val('');
							$('#contact-us-subject').val('');
							$('#contact-us-message').val('');
						}
							$(this).remove();
						});

			});
		}catch(err){
			console.log(err);
		}
	});

});

function createBrowsePosts(posts){
    var p = $('#browse-blog-posts').empty();
    for(var i=0;i<posts.length; i++){
        p.append($('<div>')
            .addClass('browse-blog-item')
            .append($('<a></a>')
                .addClass('browse-blog-item-link')
                .attr('href',posts[i].post_link)
                .html(posts[i].post_title))
            .append($('<div></div>')
                .addClass('browse-blog-item-extra')
                .append($('<span></span>')
                    .html('By '))
                .append($('<a></a>')
                    .addClass('vs-link-tag')
                    .attr('href', posts[i].author_link)
                    .html(posts[i].first_name+' '+posts[i].last_name))
                .append($('<span></span>')
                    .html(' on '+posts[i].post_date))));
    }
}

$(document).ready(function(){
	var paths = $('path.path')
	.on("mouseover", function(){d3.select(this).style("fill", "#7ec247");})
	.on("mouseout",function(){d3.select(this).style("fill","#b4dbf4")});
	var step = 25;
	var scrolling = false;
	// Wire up events for the 'scrollUp' link:
	$(".button-scroll-up").on("click", function (event) {
	    $($(this).attr('content')).animate({
	        scrollTop: "-=" + step + "px"
	    });
	     event.preventDefault();
	})

	$(".button-scroll-down").on("click", function (event) {
	    $($(this).attr('content')).animate({
	        scrollTop: "-=" + step + "px"
	    });
	    
	     event.preventDefault();
	});

	$('#kb-footer-submit-question').click(function(){
		var q = $('#kb-footer-question').val();
		var e = $('#kb-footer-email').val();
		$.ajax({
			url:vs.url+'/service.php',
			type:'post',
			dataType:'json',
			data:{
				action:2,
				question:q,
				email:e
			}
		}).done(function(resp){
			try{
				$('<div>')
					.css({
						position:'fixed',
						left:'33%',
						top:'50%',
						opacity:'0.8',
						display:'none',
						backgroundColor:'#555',
						padding:'20px',
						borderRadius:'5px',
						color:'#fff'
					})
					.appendTo($('body'))
					.html(resp.text)
					.show(200)
					.delay(4000)
					.hide(200,function(){
						$('#kb-footer-question').val('');
						$('#kb-footer-email').val('');
						$(this).remove();
					});
			}catch(err){
				console.log(err);
			}
		});
	});

	$('#browse-button-recent')
		.click(function(){
			if ($(this).hasClass('active')){
				return false;
			}
            $(this).siblings().removeClass('active').end().addClass('active');
			$.ajax({
				url:vs.url+'/service.php',
				type:'post',
				dataType:'json',
				data:{
					action:6
				}
			})
			.done(function(resp){
				if (resp.success){
                    createBrowsePosts(resp.posts);
				}
			});
		});
    $('#browse-button-comments')
        .click(function(){
            if ($(this).hasClass('active')){
                return false;
            }
            $(this).siblings().removeClass('active').end().addClass('active');
            $.ajax({
                url:vs.url+'/service.php',
                type:'post',
                dataType:'json',
                data:{
                    action:7
                }
            })
                .done(function(resp){
                    if (resp.success){
                        createBrowsePosts(resp.posts);
                    }
                });
        });

    $('#sweeten-button')
        .click(function(){
            if ($(this).hasClass('active')){
                return false;
            }
            var link = $(this).attr('link');
            var postId = $(this).attr('postid');
            var number = parseInt($('#sweeten-button-number').html());
            $.ajax({
                url:vs.url+'/service.php',
                type:'post',
                dataType:'json',
                data:{
                    action:1,
                    url:link,
                    post_id:postId
                }
            })
                .done(function(resp){
                    if (resp.success){
                        $('#sweeten-button').addClass('active');
                        number++;
                        $('#sweeten-button-number').html(number);
                    }
                });
        });

	/*$('.q-a-item-anchor').click(function(){
		$(this).siblings('.q-a-item-answer').toggle(200);
		$(this).toggleClass('active');
		return false;
	});*/

	$('.glossary-link')
		.click(function(){
			try{
				$.ajax({
					url:vs.url+'/service.php',
					type:'post',
					datatType:'json',
					data:{
						action:3,
						letter:$(this).attr('letter')
					},
					context:this
				})
				.done(function(resp){
					$('#glossary-content-box').empty();
					$(this).siblings().removeClass('active').end().addClass('active');
					if (resp.success){
						for(var i=0;i<resp.items.length; i++){
							$('#glossary-content-box')
								.append($('<div>')
										.addClass('glossary-item')
										.append($('<div>')
												.addClass('glossary-item-title')
												.html(resp.items[i].term_title))
										.append($('<div>')
												.addClass('glossary-item-description')
												.html(resp.items[i].term_description)));
						}
					}else{

					}
				});
			}catch(err){
				console.log(err);
			}
		});

	$('#q-a-submit-question').click(function(){
		try{
			var n = $('#q-a-name').val();
			var e = $('#q-a-email').val();
			var c = $('#q-a-company').val();
			var q = $('#q-a-question').val();
			$.ajax({
				url:vs.url+'/service.php',
				type:'post',
				dataType:'json',
				data:{
					action:2,
					question:q,
					email:e,
					name:n
				}
			}).done(function(resp){

			});
		}catch(err){

		}
	});
	$('#knowledge-email-submit').click(function(){
		try{
		$.ajax({
			url:vs.url+'/service.php',
			type:'post',
			datatType:'json',
			data:{
				action:0,
				email:$('#knowledge-email-input').val()
			}
		}).done(function(resp){
			try{
				$('<div>')
					.css({
						position:'fixed',
						left:'33%',
						top:'50%',
						opacity:'0.8',
						display:'none',
						backgroundColor:'#555',
						padding:'20px',
						borderRadius:'5px',
						color:'#fff'
					})
					.appendTo($('body'))
					.html(resp.text)
					.show(200)
					.delay(4000)
					.hide(200,function(){
						$('#knowledge-email-input').val('');
						$(this).remove();
					});
			}catch(err){
				console.log(err);
			}
		});
		}catch(err){
			console.log(err);
		}
	});
});
