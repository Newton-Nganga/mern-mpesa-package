export const routes = {
  production: "https://api.safaricom.co.ke",
  sandbox: "https://sandbox.safaricom.co.ke",
  /*
    mpesa authorization api
  */
  oauth: "/oauth/v1/generate?grant_type=client_credentials",
  /*
    mpesa b2c api
    */
  b2c: "/mpesa/b2c/v3/paymentrequest",

  /* 
   B2c account top up
   - This API enables you to load funds to a B2C shortcode directly for disbursement.
   */
  b2caccountTopUp: "/mpesa/b2b/v1/paymentrequest",

  c2bregister: "/mpesa/c2b/v1/registerurl",
  c2bsimulate: "/mpesa/c2b/v1/simulate",

  /* mpesa Till account balance */
  accountbalance: "/mpesa/accountbalance/v1/query",

  /* mpesa transaction status */
  transactionstatus: "/mpesa/transactionstatus/v1/query",

  /* mpesa transaction reversal */
  reversal: "/mpesa/reversal/v1/request",

  /*
    mpesa express api
    - simulate
    - query
    */

  stkpush: "mpesa/stkpush/v1/processrequest",
  stkquery: "/mpesa/stkpushquery/v1/query",
  /*
    Qr code api
    */
  qrCode: "/mpesa/qrcode/v1/generate",

  /*
    b2b Express Checkout
    - enables merchants to initiate USSD push to Till numbers
    enabling Till -> PayBill Payments

    */
  b2bstkPush: "/v1/ussdpush/get-msisdn",
};
