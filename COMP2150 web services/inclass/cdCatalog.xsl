<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    
    <html>
      <body>
        <h2>CD Collection</h2>
        <table border="1">
          <tr bgcolor="#dddddd">
            <th style="text-align:center">Title</th>
            <th style="text-align:center">Artist</th>
          </tr>
          
          <xsl:for-each select="catalog/cd">
            
            <tr>
              <td><xsl:value-of select="title"/></td>
              <td><xsl:value-of select="artist"/></td>
            </tr>
            
          </xsl:for-each>
          
        </table>
      </body>
    </html>
    
  </xsl:template>
</xsl:stylesheet>
