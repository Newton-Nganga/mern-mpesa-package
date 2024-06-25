//endpoint https://sandbox.safaricom.co.ke/mpesa/b2c/v3/paymentrequest

import { routes } from "../../routes/route";
import HttpService from "../../services/http";


// headers({
//     "Content-Type": "application/json",
//     Authorization: "Bearer xfV2As0EjaEyLMTWG1ED0WJbWWhD",
//   })


export default async function b2c() {
    const response  = HttpService.post(
        //path
        routes.b2c
    );

    return response.data
}

// let unirest = require("unirest");
// let req = unirest(
//   "POST",
//   "https://sandbox.safaricom.co.ke/mpesa/b2c/v3/paymentrequest"
// )
//   .headers({
//     "Content-Type": "application/json",
//     Authorization: "Bearer xfV2As0EjaEyLMTWG1ED0WJbWWhD",
//   })
//   .send(
//     JSON.stringify({
//       OriginatorConversationID: "99ba7636-2a9d-4631-967b-44fa75240012",
//       InitiatorName: "testapi",
//       SecurityCredential:
//         "NlwywVD0hYRqAyLYgur2na+iZtsOzHdVd+f8pJmKAIU6FLUR7LLXwOJomxVzkOCYbzexWRCdlOkqtfzz8+4ICPidzYbKjdL49MxOz6OSAIurILgJheYz9Qp1uX/Xp/MlhC2TIoYocXJs4F4OF+F+b9k8lCJM27mZu8m+BV+CZ27eMCxeB5yPgFiC5l2+YgJn1vDLjodMoPeSNKbUmCKMWJYw8Z+WHd3s4Tc3gII17XHPsUl41i9cVUJTaPtm9aPhxl8OEP5M8HgTDTNmRxEmul8jwrqH3GrbSMb3F0+HV9MnDwR/41KgbeoMQTYO3bRBAMZ/Slg8xnwf3JqYMpzKfQ==",
//       CommandID: "SalaryPayment",
//       Amount: 10,
//       PartyA: 600978,
//       PartyB: 254708374149,
//       Remarks: "Test remarks",
//       QueueTimeOutURL: "https://mydomain.com/b2c/queue",
//       ResultURL: "https://mydomain.com/b2c/result",
//       Occasion: "",
//     })
//   )
//   .end((res) => {
//     if (res.error) throw new Error(res.error);
//     console.log(res.raw_body);
//   });