import axios from "axios"; // Import axios for HTTP requests

/**
 * HttpService class for making HTTP requests using axios.
 */


export default class HttpService {

  /**
   * Constructor to initialize the HttpService with baseURL and headers.
   * 
   * @param {object} config - Configuration object containing baseURL and headers.
   */
  
  constructor(config) {
    const { baseURL, headers } = config;
    this.client = axios.create({
      baseURL,
      headers,
    });
  }

  /**
   * Method to make a GET request.
   * 
   * @param {string} path - The endpoint path for the GET request.
   * @param {object} config - Optional configuration for the GET request.
   * 
   * @returns {object} - The response object containing various details of the GET request.
   * @throws {Error} - If the GET request fails.
   */
  async get(path, config = {}) {
    try {
      const response = await this.client.get(path, config);
      return {
        protocol: this.client.defaults.baseURL.startsWith("https") ? "https:" : "http:",
        hostname: new URL(this.client.defaults.baseURL).hostname,
        path: path,
        method: "GET",
        headers: response.config.headers,
        statusCode: response.status,
        statusMessage: response.statusText,
        data: response.data,
      };
    } catch (error) {
      if (error.response) {
        console.error("HTTP GET Error:", error.message);
        return Promise.reject({
          protocol: this.client.defaults.baseURL.startsWith("https") ? "https:" : "http:",
          hostname: new URL(this.client.defaults.baseURL).hostname,
          path: path,
          method: "GET",
          headers: error.response.config.headers,
          statusCode: error.response.status,
          statusMessage: error.response.statusText,
          data: error.response.data,
        });
      }
      console.error("HTTP GET Error (no response):", error.message);
      return Promise.reject(error);
    }
  }

  /**
   * Method to make a POST request.
   * 
   * @param {string} path - The endpoint path for the POST request.
   * @param {object} payload - The data to be sent in the POST request.
   * @param {object} config - Optional configuration for the POST request.
   * 
   * @returns {object} - The response object containing various details of the POST request.
   * @throws {Error} - If the POST request fails.
   */
  async post(path, payload, config = {}) {
    try {
      const response = await this.client.post(path, payload, config);
      return {
        protocol: this.client.defaults.baseURL.startsWith("https") ? "https:" : "http:",
        hostname: new URL(this.client.defaults.baseURL).hostname,
        path: path,
        method: "POST",
        headers: response.config.headers,
        statusCode: response.status,
        statusMessage: response.statusText,
        data: response.data,
      };
    } catch (error) {
      if (error.response) {
        console.error("HTTP POST Error:", error.message);
        return Promise.reject({
          protocol: this.client.defaults.baseURL.startsWith("https") ? "https:" : "http:",
          hostname: new URL(this.client.defaults.baseURL).hostname,
          path: path,
          method: "POST",
          headers: error.response.config.headers,
          statusCode: error.response.status,
          statusMessage: error.response.statusText,
          data: error.response.data,
        });
      }
      console.error("HTTP POST Error (no response):", error.message);
      return Promise.reject(error);
    }
  }
}


