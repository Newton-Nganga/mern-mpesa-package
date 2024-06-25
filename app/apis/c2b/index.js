// endpoint  method  = post

import { routes } from "../../routes/route";

// headers({
//     "Content-Type": "application/json",
//     Authorization: "Bearer DWofgpBREzvGM6T2v0nhdhlqmWd4",
//   }

// defining the function with path, payload method = POST

export async function c2b({
  shortCode,
  responseType,
  confirmationType,
  validationUrl,
  httpService
}
  
) {
  // authenticate

  const response = await httpService.post(
    routes.c2bregister, // path
    {
      shortCode,
      responseType,
      confirmationType,
      validationUrl,
    }
  );
  
  return response.data;
}
