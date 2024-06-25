import HttpService from "./services/http";
import { authenticate } from " ./apis/authorization";
import { routes } from "./routes/route";
import { c2b } from "./apis/c2b";

/*
 * Mpesa class for interacting with Mpesa API.
 */
export default class Mpesa {
  /**
   * Constructor to initialize the Mpesa class with consumer key, secret, and environment.
   *
   * @param {object} config - Configuration object containing consumerKey, consumerSecret, and environment.
   */

  constructor({ consumerKey, consumerSecret, environment }) {
    this.consumerKey = consumerKey;
    this.consumerSecret = consumerSecret;
    this.environment = environment;
    this.baseUrl =
      environment === "production" ? routes.production : routes.sandbox;

    this.httpService = new HttpService({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Initialize the Mpesa class by authenticating and setting the authorization token.
   *
   * @throws {Error} - If authentication fails.
   */

  async init() {
    try {
      this.token = await authenticate(
        this.consumerKey,
        this.consumerSecret,
        this.baseUrl,
        this.httpService
      );
      this.httpService.client.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${this.token}`;
    } catch (error) {
      console.error("Error during authentication:", error.message);
      throw new Error("Failed to authenticate with Mpesa API");
    }
  }

  /**
   * Perform a C2B transaction.
   *
   * @param {object} options - Options for the C2B transaction.
   *
   * @returns {object} - The response from the C2B transaction.
   * @throws {Error} - If the C2B transaction fails.
   *
   */

  async c2b(options) {
    try {
      return await c2b(this.httpService, ...options);
    } catch (error) {
      console.error("Error during C2B transaction:", error.message);
      throw new Error("C2B transaction failed");
    }
  }


  qrcode(options) {
    return qrcode(this.httpService, ...options);
  }

  // Add other API methods similarly
}
