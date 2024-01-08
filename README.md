<h1 align="center"> 
YOUTUBE SUBSCRIBERS
</h1>


## Introduction
YouTube Subscribers is an Application that serves as a RESTful API created by using Mongodb in Node.js. It is designed to fetch all subscribers information related to YouTube channel subscribers.

## Features

- Fetch subscribers data from YouTube channels using API endpoints
- Provide users with multiple API endpoints
- Present retrieved data in well-organized JSON format


## Technology used

- **Node.js:** A runtime environment that execute javaScript code on the server-side.
- **Express.js:** A node.js framework for building web application and RESTful API.
- **MongoDB:** Is NoSQL Database system that stores and manage data in JSON-like format.

## Installation and Run
1. Clone the repository from GitHub:
    ```
     git clone https://github.com/Oshankhan/Backend-Project-YouTube-Subs
    ```
2. Redirect to the project folder:
    ```
     cd BACKEND-PROJECT-YOUTUBE-SUBS
    ```
3. Install the required dependencies:
    ```
     npm install
    ```
4. Configure the application:
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:
      ```
       PORT=3001                             # The port on which the application will run
       DATABASE_URI= <your_uri_here>         # The MongoDB connection string
      ```
5. Create Database:
    - Inserting subscribers data into MongoDB.
        ```
         npm run createDB
        ```
6. Start server:
    ```
     npm start
    ```
    > [!NOTE]
    > Access the  application in your web browser at `http://localhost:3001` (base URL)

## API Reference

- `/subscribers`: Retrieve a list of all subscribers with their ID, name, subscribed channel and date.
- `/subscribers/names`: Obtain subscribers name along with the channel they are subscribed to.
- `/subscribers/id`: Access subscriber information based on their ID.    

## Authors

- [@Oshan khan](https://github.com/Oshankhan)
- [@Adarsh Jaiswal](https://github.com/adarsh6800)

## ThankYou

Thank you for visiting our project. Hope U like it. If any suggestion please commit [here](https://github.com/Oshankhan/Backend-Project-YouTube-Subs).