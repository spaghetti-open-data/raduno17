cp=/Applications/local/dev/jlib/SaxonHE9-7-0-6J/saxon9he.jar
cp=$cp:/tmp/commons-codec-1.10/commons-codec-1.10.jar

java -cp $cp net.sf.saxon.Transform -ext:on -s:$1 -xsl:$2
