<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">

	<html>
	
	<head><title>CD Catalog</title></head>
	
	<body>

    <table border="1">
      <caption>My CD Collection</caption>
      <tr bgcolor="#336699">
        <th>Title</th>
        <th>Artist</th>
        <th>Cover</th>
      </tr>
      <xsl:for-each select="catalog/cd">
        <xsl:sort select="artist"/>
        <tr>
          <td>
            <xsl:value-of select="title" />
          </td>
          <td>
            <xsl:value-of select="artist" />
          </td>
          <td>
            <img>
              <xsl:attribute name="src">
                <xsl:value-of select="image"/>
              </xsl:attribute>
            </img>
          </td>
        </tr>
      </xsl:for-each>
    </table>
	
	</body>
	</html>

</xsl:template>

</xsl:stylesheet>