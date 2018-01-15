export const nb = {
  create: (imgSrc, hyperlink, headline, body, ctaText, terms) => {
    return `
    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#FFFFFF;" bgcolor="#FFFFFF" align="center" class="moduleContainer">
      <tr>
        <td style="font-size:1px;line-height:1px;padding: 0px 0px;" align="center">
          <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF" class="container">
            <tr>
              <td style="font-size:15px;line-height:15px;color:#006eb4;" align="center">
                <a href="${hyperlink}" target="_blank">
                  <img src="${imgSrc}" width="600" height="283" alt="NordicBet" title="NordicBet" border="0" style="display: block;" class="fullWidth autoheight" />
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#FFFFFF;" bgcolor="#FFFFFF" align="center" class="moduleContainer">
      <tr>
        <td style="font-size:1px;line-height:1px;padding: 0px 0px;" align="center">
          <table width="600" cellspacing="0" cellpadding="0" border="0" class="container">
            <tr>
              <td height="27" style="mso-line-height-rule:exactly;line-height:27px;font-family: Verdana, Helvetica, Arial, sans-serif;text-decoration:none;color:#006eb4;font-weight: 900;font-size:24px;line-height:27px;padding: 30px 10px 20px 10px;" align="center">
                ${headline}
              </td>
            </tr>
            <tr>
              <td height="17" style="mso-line-height-rule:exactly;font-family: Verdana, Helvetica, Arial, sans-serif;text-decoration:none;color:#666666;font-weight: 300;font-size:14px;line-height:17px; padding: 0px 10px 0px 10px;" align="center">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="font-size:1px;line-height:1px;padding:0px 10px;" align="center">
                <table width="560" border="0" cellspacing="0" cellpadding="0" align="center" class="container">
                  <tr>
                    <td style="font-size:1px;line-height:1px;padding: 20px 0px 40px 0px;" align="center">
                      <table border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#f07d00" style="border-radius:2px; -moz-border-radius:2px; -webkit-border-radius:2px;background-color: #f07d00;" class="container">
                        <tr>
                          <td height="21" style="font-family: Verdana, Helvetica, arial, sans-serif;text-decoration:none;color:#FFFFFF;font-weight: 500;font-size:21px;mso-line-height-rule:exactly;line-height:21px;padding: 10px 10px 10px 10px;" align="center">
                            <a href="${hyperlink}" style="font-family: Verdana, Helvetica, arial, sans-serif;text-decoration:none;color:#FFFFFF;font-weight: 500;font-size:21px;line-height:21px;text-transform:uppercase;padding: 10px 10px 10px 10px;" target="_blank">
                                  ${ctaText}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            ${terms || ''}
          </table>
        </td>
      </tr>
    </table>`
  },
  createSimpleTerms: (text,url) => {
    let link = text.replace(/%%/, `<a href="${url}" target="_blank">`);
    link = link.replace(/%%/, `</a>`);
    return `<tr>
              <td height="17" style="mso-line-height-rule:exactly;font-family: Verdana, Helvetica, Arial, sans-serif;text-decoration:none;color:#666666;font-weight: 300;font-size:12px;line-height:17px; padding: 0px 10px 0px 10px;" align="center">
                <p><em>${link}</em></p>
              </td>
            </tr>`
  }
}

export const be = {
  create: (imgSrc, hyperlink, headline, body, ctaText, terms) => {
    return `
    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#FFFFFF;" bgcolor="#FFFFFF" align="center" class="moduleContainer">
      <tr>
        <td style="font-size:1px;line-height:1px;padding: 0px 0px;" align="center">
          <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff" class="container">
            <tr>
              <td style="font-size:1px;line-height:1px;" align="center">
                <a href="${hyperlink}" target="_blank" style="font-family: Helvetica, Arial, sans-serif;text-decoration:none;color:#ff6600;font-weight: 700;font-size:48px;line-height:48px;font-style:inherit;">
                  <img src="${imgSrc}" width="600" height="300" alt="" title="" border="0" style="display: block;color:#ff6600;" class="fullWidth autoheight" />
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#FFFFFF;" bgcolor="#FFFFFF" align="center" class="moduleContainer">
      <tr>
        <td style="font-size:1px;line-height:1px;padding: 20px 0px 20px 0px;" align="center">
          <table width="600" cellspacing="0" cellpadding="0" border="0" style="background-color:#FFFFFF;" bgcolor="#FFFFFF" class="container">
            <tr>
              <td height="28" style="mso-line-height-rule:exactly;font-family: Helvetica, Arial, sans-serif;text-decoration:none;color:#ff6600;font-weight:700;font-size:25px;line-height:28px;padding:15px 10px 0px 10px;" align="center">
                ${headline}
              </td>
            </tr>
            <tr>
              <td height="18" style="mso-line-height-rule:exactly;font-family: Helvetica, Arial, sans-serif;text-decoration:none;color:#666666;font-weight: 300;font-size:15px;line-height:18px;padding:15px 10px 0px 10px;" align="center">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="font-size:1px;line-height:1px;padding:25px 10px 20px 10px;" align="center">
                <table width="560" border="0" cellspacing="0" cellpadding="0" align="center" class="container">
                  <tr>
                    <td style="font-size:1px;line-height:1px;padding:0px 0px 0px 0px;" align="center">
                      <table border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ff6600" style="border-radius:2px; -moz-border-radius:2px; -webkit-border-radius:2px;background-color: #ff6600;" class="container">
                        <tr>
                          <td height="41" style="border-bottom: 2px solid #ba510b;border-radius:2px; -moz-border-radius:2px; -webkit-border-radius:2px;" align="center">
                            <a href="${hyperlink}" target="_blank" style="display:block;text-decoration:none;border:0;text-align: center;font-family: Helvetica, Arial, sans-serif;color:#FFFFFF;font-weight: 500;font-size:22px;line-height:25px;padding:8px 22px 8px 22px;" class="NoPaddingLeft NoPaddingRight">
                            <!--[if mso]>
                            <table border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td style="line-height:1px;font-size:1px;padding:0px 22px 0px 22px;">
                                <a href="${hyperlink}" target="_blank" style="text-decoration:none;border:0;text-align: center;font-family: Helvetica, Arial, sans-serif;color:#FFFFFF;font-weight: 500;font-size:22px;line-height:25px;"><![endif]-->
                                  ${ctaText}
                                <!--[if mso]>
                                </a>
                                </td>
                              </tr>
                            </table><![endif]-->
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            ${terms || ''}
          </table>
        </td>
      </tr>
    </table>
    `
  },
  createSimpleTerms: (text,url) => {
    let link = text.replace(/%%/, `<a href="${url}" target="_blank">`);
    link = link.replace(/%%/, `</a>`);
    return `<tr>
              <td height="18" style="mso-line-height-rule:exactly;font-family: Helvetica, Arial, sans-serif;text-decoration:none;color:#666666;font-weight: 300;font-size:13px;line-height:18px;padding:15px 10px 0px 10px;" align="center">
                <p><em>${link}</em></p>
              </td>
            </tr>`
  }
}

export const bs = {
  create: (imgSrc, hyperlink, headline, body, ctaText, terms) => {
    return `<table width="540" cellspacing="0" cellpadding="0" border="0" align="center">
  <tbody>
    <tr>
      <td style="text-align: center; margin: 0px auto;" align="center">
        <a href="${hyperlink}">
			<img style="display: block; border: medium none;" src="${imgSrc}" valign="top" width="560" height="auto" border="0" align="middle" />
			</a>
      </td>
    </tr>
  </tbody>
</table>
<table style="width: 540px;" class="moduleContainer" width="540" cellspacing="0" cellpadding="0" border="0" align="center">
  <tbody>
    <tr>
      <td style="padding: 50px 30px;" align="center">
        <table style="width: 480px;" class="container" cellspacing="0" cellpadding="0" border="0">
          <tbody>
            <tr>
              <td style="font-family: Helvetica, Arial, sans-serif; text-decoration: none; color: #f5f5f5; font-weight: bold; font-size: 24px; padding: 0px; letter-spacing: 0.2px; line-height: 33px; height: 27px;" align="center">

                <!--Header-->

                ${headline}

              </td>
            </tr>

            <tr>
              <td style="font-family: Helvetica, Arial, sans-serif; text-decoration: none; color: #999999; font-weight: normal; font-size: 14px; line-height: 22px; padding: 17px 0px 0px; height: 17px;" align="center">

                ${body}

                <!--Body-->

              </td>
            </tr>
            <tr>
              <td style="padding: 40px 0px 0px;" align="center">
                <table class="action-btn-responsiveness" cellspacing="0" cellpadding="0" border="0" align="center">
                  <tbody>
                    <tr>
                      <td align="center">
                        <table style="border-radius: 4px; background-color: #a10000;" class="action-btn-responsiveness" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#a10000" align="center">
                          <tbody>
                            <tr>
                              <td style="font-family: Helvetica, arial, sans-serif; text-decoration: none; color: #f5f5f5; font-size: 18px; line-height: 21px; padding: 18px 20px; min-width: 200px;" height="21" align="center">
                                <a href="${hyperlink}" style="font-family: Helvetica, arial, sans-serif; text-decoration: none; color: #f5f5f5; font-size: 18px; letter-spacing: 0.4px; line-height: 21px; text-transform: uppercase; padding: 17px 20px;" target="_blank">
                                  ${ctaText}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            ${terms || ''}
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`
  },
createSimpleTerms: (text,url) => {
  let link = text.replace(/%%/, `<a href="${url}" target="_blank">`);
  link = link.replace(/%%/, `</a>`);
  return `<tr>
            <td style="font-family: Helvetica, Arial, sans-serif; text-decoration: none; color: #999999; font-weight: normal; font-size: 12px; line-height: 22px; padding: 17px 0px 0px; height: 17px;" align="center">
              <p><em>${link}</em></p>
            </td>
          </tr>`
  }
}
