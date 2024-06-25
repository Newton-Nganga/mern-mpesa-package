

const c2b = {
  registerUrl: async (shortCode, responseType, confirmationUrl, validationUrl) => {
    const data = {
      ShortCode: shortCode,
      ResponseType: responseType,
      ConfirmationURL: confirmationUrl,
      ValidationURL: validationUrl,
    };
    return await httpService.post('/mpesa/c2b/v1/registerurl', data);
  },
  
  simulateTransaction: async (shortCode, commandID, amount, msisdn, billRefNumber) => {
    const data = {
      ShortCode: shortCode,
      CommandID: commandID,
      Amount: amount,
      Msisdn: msisdn,
      BillRefNumber: billRefNumber,
    };
    return await httpService.post('/mpesa/c2b/v1/simulate', data);
  }
};


module.exports = c2b;
