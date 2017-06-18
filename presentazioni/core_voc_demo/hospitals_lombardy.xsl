
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xs="http://www.w3.org/2001/XMLSchema"
	xmlns:math="http://www.w3.org/2005/xpath-functions/math" exclude-result-prefixes="xs math"

	xmlns:owl="http://www.w3.org/2002/07/owl#"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"

  xmlns:sod17onto="http://www.spaghettiopendata.org/sod2017/ontology#"
  xmlns:dbpo="http://dbpedia.org/ontology/"
  xmlns:org="http://www.w3.org/ns/org#"
  xmlns:sod17="http://www.spaghettiopendata.org/sod2017/resources#"
  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
  xmlns:gr="http://purl.org/goodrelations/v1#"
  xmlns:locn="http://www.w3.org/ns/locn#"
  xmlns:cpsv="http://purl.org/vocab/cpsv#"
  xmlns:schema="http://schema.org/"
  xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"

	version="2.0">

	<xsl:output method="xml" indent="yes" />

  <xsl:template match = "/response/row">
    <rdf:RDF
    	xmlns:sod17onto="http://www.spaghettiopendata.org/sod2017/ontology#"
    	xmlns:dbpo="http://dbpedia.org/ontology/"
    	xmlns:org="http://www.w3.org/ns/org#"
    	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    	xmlns:sod17="http://www.spaghettiopendata.org/sod2017/resources#"
    	xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
    	xmlns:gr="http://purl.org/goodrelations/v1#"
    	xmlns:locn="http://www.w3.org/ns/locn#"
    	xmlns:cpsv="http://purl.org/vocab/cpsv#"
      xmlns:schema="http://schema.org/"
      xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#">

      <xsl:apply-templates select = "row" />

		</rdf:RDF>
	</xsl:template>

  <xsl:template match = "row">
    <!-- Hospital URI-->
    <xsl:variable name = "hosp_uri" select = "concat ( 'http://www.spaghettiopendata.org/sod2017/resources#', cod_struttura )" />

    <!-- Hospital OWL Class -->
    <xsl:variable name = "hosp_class">
      <xsl:choose>
        <xsl:when test = "pubblica_privata = 'PRIVATO'">http://purl.org/goodrelations/v1#BusinessEntity</xsl:when>
        <xsl:when test = "pubblica_privata = 'PUBBLICO'">http://schema.org/GovernmentOrganization</xsl:when>
        <xsl:otherwise>http://www.w3.org/ns/org#FormalOrganization</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>

    <!-- NACE -->
    <xsl:variable name = "nace_uri">
      <xsl:choose>
        <!-- Hospital Activities -->
        <xsl:when test = "matches ( denominazione_strutt_ura, 'OSPEDALE|PRESIDIO OSPEDALIERO', 'i' )"
          >http://stamina-project.org/codes/nacer2/class/86.10</xsl:when>
        <!-- Residential Care Activities -->
        <xsl:when test = "matches ( denominazione_strutt_ura, 'CASA DI CURA|RESID', 'i' )"
          >http://stamina-project.org/codes/nacer2/division/87</xsl:when>
        <!-- Other Human Health Activities -->
        <xsl:otherwise>http://stamina-project.org/codes/nacer2/group/86.9</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>

    <!-- TODO: md5, for the moment, let's just encode it -->
    <xsl:variable name = "addr_str" select = "concat ( indirizzo, ', ', comune, ', ', cap_stru_ttura, ', (', prov_comune_ubicazione, '), Italy' )" />
    <xsl:variable name = "addr_uri" select = "concat ( 'http://www.spaghettiopendata.org/sod2017/resources#', encode-for-uri ( $addr_str ) )" />

    <xsl:variable name = "comune_uri" select = "concat ( 'http://www.spaghettiopendata.org/sod2017/resources#', encode-for-uri ( comune ) )" />
    <xsl:variable name = "prov_uri" select = "concat ( 'http://www.spaghettiopendata.org/sod2017/resources#', encode-for-uri ( prov_sede_legale ) )" />

    <xsl:variable name = "geo_uri" select = "concat ( $addr_uri, '_geo' )" />


    <!-- Output -->

    <!-- The Hospital -->
    <owl:NamedIndividual rdf:about="{$hosp_uri}">
    	<rdf:type rdf:resource="{$hosp_class}" />
      <rdf:type rdf:resource="http://www.w3.org/ns/org#FormalOrganization"/>
      <rdfs:label><xsl:value-of select = "denominazione_strutt_ura" /></rdfs:label>
      <org:identifier><xsl:value-of select = "cod_struttura" /></org:identifier>
      <cpsv:provides rdf:resource="{$nace_uri}" />
      <locn:address rdf:resource="{$addr_uri}" />
      <locn:location rdf:resource="{$comune_uri}" />
      <locn:location rdf:resource="{$prov_uri}" />
      <locn:geometry rdf:resource="{$geo_uri}" />
    </owl:NamedIndividual>


    <!-- The address, split this way as per ISA requirements -->
    <owl:NamedIndividual rdf:about="{$addr_uri}">
      <rdf:type rdf:resource="http://www.w3.org/ns/locn#Address" />
      <locn:fullAddress><xsl:value-of select = "$addr_str" /></locn:fullAddress>
      <locn:postCode><xsl:value-of select = "cap_stru_ttura" /></locn:postCode>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="{$comune_uri}">
      <rdf:type rdf:resource="http://www.w3.org/ns/locn#Location" />
      <rdf:type rdf:resource="http://www.spaghettiopendata.org/sod2017/ontology#Comune" />
      <locn:geographicName><xsl:value-of select = "comune" /></locn:geographicName>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="{$prov_uri}">
      <rdf:type rdf:resource="http://www.w3.org/ns/locn#Location" />
      <rdf:type rdf:resource="http://dbpedia.org/ontology/Province" />
      <locn:geographicName><xsl:value-of select = "prov_sede_legale" /></locn:geographicName>
    </owl:NamedIndividual>

    <owl:NamedIndividual rdf:about="{$geo_uri}">
      <rdf:type rdf:resource="http://www.w3.org/ns/locn#Geometry" />
      <geo:lat rdf:datatype="http://www.w3.org/2001/XMLSchema#double"><xsl:value-of select = "wgs84_y" /></geo:lat>
      <geo:long rdf:datatype="http://www.w3.org/2001/XMLSchema#double"><xsl:value-of select = "wgs84_x" /></geo:long>
    </owl:NamedIndividual>


  </xsl:template>

</xsl:stylesheet>
