# YouTube_Subscribers API Documentation

## Introduction

The API documentation for Get YouTube Subscribers provides details on how to interact with the API endpoints to retrieve subscribers information.

## Base URL
The base URL for all endpoints is:
 ```
  http://localhost:3001
 ```

## Endpoints
- [Get Subscribers](#get-subscribers) (` /subscribers `) 
- [Get Subscribers by Names](#get-subscribers-by-names)   (` /subscribers/names `)
- [Get Subscriber by ID](#get-subscriber-by-id)  (` /subscribers/:id `) 

  ### Createing Subscribers 
  ---
  **Description:** Creating a New subscriber for Youtube channel.
  - **Endpoint:** `/createSubs `
  - **Method:** `POST`
  - **Response:**
    - Status Code: `200 OK`
    - Content-Type: `application/json`


  ### Get Subscribers 
  ---
  **Description:** Retrieve a list of all subscribers.

  - **Endpoint:** `/subscribers`
  - **Method:** `GET`
  - **Response:**
    - Status Code: `200 OK`
    - Content-Type: `application/json`


  ### Get Subscribers by Names
  ---
  **Description:** Retrieve subscribers based on their name.
  - **Endpoint:** `/subscribers/names `
  - **Method:** `GET`
  - **Query Parameters:**
    - `names` (required): The name of the subscribers to search for.
  - **Response:**
    - Status Code: `200 OK`
    - Content-Type: `application/json`


  ### Get Subscriber by ID
  ---
  **Description:** Retrieve a specific subscriber based on their ID.
  - **Endpoint:** `/subscribers/:id`
  - **Method:** `GET`
  - **Query Parameters:**
    - `id` (required): The ID of the subscriber to retrieve data.
  - **Response:**
    - Status Code: `200 OK`
    - Content-Type: `application/json`

  - **Endpoint-Specific Error**:
    - Status Code: `400 (Bad Request)`
    - Message: `No subscriber found related to this ID.`

###

## Conclusion

This API documentation provides a comprehensive guide on how to interact with the API endpoints to retrieve subscribers information.
