# LOD GTFS Hackathon, LOD Demo

The files in this folder contain what we have drafted to show the usefulness of LOD
approaches in dealing with public transport and related data.

We have taken some GTFS data about public buses in Lecce (`gtfs_lecce.zip`) and we have
converted them into `RDF`, using the script in `gtfs2rdf/`.

Then we have integrated such data with some RDF about events (fairs, exhibitions, concerts, etc) in
the same town (`events.ttl`, we crafted them manually from real data, but there are many ways to convert such data to RDF automatically). These events refer to places, so we have imported the [DBPedia](https://en.wikipedia.org/wiki/DBpedia) Linked Open Data about one of such places, to give the idea that rich place descriptions can simply be imported by existing (linked) open data.

Finally, we have put everything together by loading all the produced RDF files (`*.ttl`) into a Jena TDB triple store, and then we started playing with [Fuseki](https://jena.apache.org/documentation/serving_data/). This allowed us to craft a [SPAQRL](https://en.wikipedia.org/wiki/SPARQL) query to search events, match them with their location, match the locations with their descriptions, match the events with the bus stops that are located near the event locations (see `ex_query.sparql`).

For instance, the query is able to show that a concert is happening at the Lecce's Castle, details about the castle and its location could be presented on a web page about the concert, together with nearby bus stops.

This should give the idea of querying integrated data with a common querying language.

We have also tried the richer SPARQL browser [LODEStar](https://github.com/EBISPOT/lodestar).  
