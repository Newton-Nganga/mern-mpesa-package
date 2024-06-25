import { routes } from "../../routes/route";

/**
 * 
 * @param {TrxCode} 
 * Transaction Type. The supported types are:
   BG: Pay Merchant (Buy Goods).
   WA: Withdraw Cash at Agent Till.
   PB: Paybill or Business number.
   SM: Send Money(Mobile number)
   SB: Sent to Business. Business number CPI in MSISDN format.

   @param {httpService} - A service that provides POST and GET http methods
   
 */

export async function qrcode({
  MerchantName,
  RefNo,
  Amount,
  TrxCode,
  CPI,
  Size,
  httpService,
}) {
  return await httpService.post(routes.qrCode, {
    MerchantName,
    RefNo,
    Amount,
    TrxCode,
    CPI,
    Size
  });
}
