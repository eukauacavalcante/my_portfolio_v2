import type { ContactPayload } from "./validation";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function buildContactEmailHtml(data: ContactPayload): string {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="pt-BR">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Novo contato — Portfólio</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#e8e8d8;font-family:ui-monospace,'Cascadia Code','Courier New',monospace,-apple-system,BlinkMacSystemFont,sans-serif;-webkit-font-smoothing:antialiased;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e8e8d8;padding:32px 16px;">
    <tr>
      <td align="center">

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;background-color:#FFFFF0;border:1px solid #deded0;border-radius:12px;">

          <tr>
            <td style="padding:24px 32px;border-bottom:1px solid #e8e8d8;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:middle;padding-right:12px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="36" height="36" style="width:36px;height:36px;background-color:#1447e6;border-radius:9px;text-align:center;vertical-align:middle;">
                          <div style="width:10px;height:10px;background:#ffffff;border-radius:50%;margin:13px auto 0;"></div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="vertical-align:middle;">
                    <div style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#888888;line-height:1;margin-bottom:4px;">Portfólio</div>
                    <div style="font-size:15px;font-weight:600;color:#171717;line-height:1;">Novo contato recebido</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px;">

              <div style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#999999;margin-bottom:12px;">Informações</div>

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e8e8d8;border-radius:8px;border-collapse:separate;border-spacing:0;">
                <tr>
                  <td style="padding:11px 16px;font-size:12px;font-weight:500;color:#777777;width:110px;border-bottom:1px solid #f0f0e0;white-space:nowrap;border-radius:8px 0 0 0;">Nome</td>
                  <td style="padding:11px 16px;font-size:13px;color:#1a1a1a;border-bottom:1px solid #f0f0e0;border-radius:0 8px 0 0;">${escapeHtml(data.name)} ${escapeHtml(data.lastName)}</td>
                </tr>
                <tr>
                  <td style="padding:11px 16px;font-size:12px;font-weight:500;color:#777777;width:110px;border-bottom:1px solid #f0f0e0;white-space:nowrap;background-color:#fafaf0;">Email</td>
                  <td style="padding:11px 16px;font-size:13px;color:#1a1a1a;border-bottom:1px solid #f0f0e0;background-color:#fafaf0;"><a href="mailto:${escapeHtml(data.email)}" style="color:#1447e6;text-decoration:none;">${escapeHtml(data.email)}</a></td>
                </tr>
                <tr>
                  <td style="padding:11px 16px;font-size:12px;font-weight:500;color:#777777;width:110px;white-space:nowrap;border-radius:0 0 0 8px;">Motivo</td>
                  <td style="padding:11px 16px;font-size:13px;color:#1a1a1a;border-radius:0 0 8px 0;">
                    <span style="display:inline-block;padding:3px 10px;border-radius:999px;background-color:#e8eeff;color:#1447e6;font-size:12px;font-weight:500;">${escapeHtml(data.reason[0])}</span>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;">
                <tr>
                  <td height="1" style="height:1px;background-color:#e8e8d8;font-size:1px;line-height:1px;">&nbsp;</td>
                </tr>
              </table>

              <div style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#999999;margin-bottom:12px;">Mensagem</div>

              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="3" style="width:3px;background-color:#1447e6;border-radius:3px 0 0 3px;">&nbsp;</td>
                  <td style="padding:16px 20px;background-color:#f7f7ec;font-size:14px;line-height:1.75;color:#333333;border-radius:0 8px 8px 0;word-break:break-word;">// ${escapeHtml(data.message) ?? "-"}</td>
                </tr>
              </table>

            </td>
          </tr>

          <tr>
            <td style="padding:14px 32px;border-top:1px solid #e8e8d8;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:11px;color:#aaaaaa;letter-spacing:0.01em;">Enviado via formulário de contato</td>
                  <td align="right" style="font-size:11px;font-weight:500;color:#bbbbbb;letter-spacing:0.05em;">kauacavalcante.dev</td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
}
