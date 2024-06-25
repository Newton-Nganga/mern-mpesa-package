# HTTP SERVICE

## Overview
HttpService is a  class designed to facilitate making HTTP requests using the axios library. 
It provides methods to perform GET and POST requests, encapsulating the configuration and handling of HTTP responses and errors.

## Methods  
## 1. GET(path, config = {})   
Performs a GET request.

### Parameters:

- `path` (string): The endpoint path for the GET request.  
- `config` (object, optional): Additional configuration for the request.  
  
Returns:An object containing:  

- `protocol`: The protocol used (http: or https:).
- `hostname`: The hostname of the base URL.
- `path`: The request path.
- `method`: HTTP method used (GET).
- `headers`: The request headers.
- `statusCode`: The response status code.
- `statusMessage`: The response status message.
- `data`: The response data.


## 2. POST(path, payload, config = {})  
Performs a POST request.

### Parameters:

- `path (string)`: The endpoint path for the POST request.
- `payload (object)`: The data to be sent in the body of the POST request.
- `config (object, optional)`: Additional configuration for the request.
 
Returns: An object containing:
- `protocol`: The protocol used (http: or https:).
- `hostname`: The hostname of the base URL.
- `path`: The request path.
- `method`: HTTP method used (POST).
- `headers`: The request headers.
- `statusCode`: The response status code.
- `statusMessage`: The response status message.
- `data`: The response data.


## Error Handling
In case of an error, the get and post methods return a rejected promise containing an error object with the following properties:

-` protocol`: The protocol used (http: or https:).
- `hostname`: The hostname of the base URL.
- `path`: The request path.
- `method`: HTTP method used (GET or POST).
- `headers`: The request headers.
- `statusCode`: The response status code.
- `statusMessage`: The response status message.
- `data`: The error response data.