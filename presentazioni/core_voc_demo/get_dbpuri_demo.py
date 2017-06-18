from urllib import request
import json, sys

"""
  Gets the value in the given language from a list of JSON-LD values in multiple languages
"""
def js_get_lang ( js, lang = 'en'):
  js = list ( filter ( lambda v: v [ 'lang' ] == lang, js ) )
  return js [ 0 ] [ 'value' ] if js else ''


dbpo_ns = "http://dbpedia.org/ontology/"
dbp_ns = "http://dbpedia.org/resource/"
rdfs_ns = "http://www.w3.org/2000/01/rdf-schema#"

# turn the URI into JSON version, ie, turns "http://dbpedia.org/resource/Trentino"
# into "http://dbpedia.org/data/Trentino.json", which is what DBPedia requires to return JSON
#
uri = sys.argv [ 1 ].replace ( '/resource/', '/data/' ).replace ( '/page/', '/data/' ) + '.json'

# Get the json and process it
with request.urlopen ( uri ) as url:
    js = json.loads ( url.read().decode() )
    js = js [ dbp_ns + 'Trentino' ]
    label = js_get_lang ( js [ rdfs_ns + 'label' ], 'it' )
    abstr = js_get_lang ( js [ rdfs_ns + 'comment' ], 'it' )

    print ( "\n\n\n%s\n\n%s\n\n" % ( label, abstr ) )
