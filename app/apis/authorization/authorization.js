import { routes } from "../../routes/route";



/*
  Authenticates with the OAuth endpoint using the provided consumer key and secret.
  
  @param {string} consumerKey - The consumer key for the application.
  @param {string} consumerSecret - The consumer secret for the application.
  @param {string} baseUrl - The base URL for the API.
  @param {object} httpService - An instance of the HttpService class.
  
   @returns {string} - The access token from the authentication response.
   @throws {Error} - If authentication fails.

 */


export const authenticate = async (consumerKey, consumerSecret, baseUrl, httpService) => {
  try {
    // Create a Base64-encoded string of the consumer key and secret
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');


    // Make a GET request to the OAuth endpoint with the encoded authorization header
    const response = await httpService.client.get(routes.oauth, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });


    console.log("response data", response.data);

    return response.data.access_token;
  } catch (error) {
    // handle errors caught 
    console.error("Authentication Error:", error.message);
    throw new Error("Failed to authenticate with the OAuth endpoint");
  }
};
