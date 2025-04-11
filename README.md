# VideoGameLibraryCRUD
Video Game Library CRUD Application
A simple and functional CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, and MongoDB that allows users to manage a collection of video games. This project demonstrates how to build a RESTful API and interact with a MongoDB database using Mongoose.

Project Structure
VideoGameLibraryCRUDApp/
├── Models/
│   └── game.js
├── Routes/
│   ├── createGame.js
│   ├── readGame.js
│   ├── updateGame.js
│   └── deleteGame.js
├── .env
├── app.js
└── package.json



Features
Add new video games to the library
View all existing games
Update game detaile
Delete games from the collection
Connected to MongoDB Atlas with secure .env configuration

 
 
Technologies Used
Node.js – JavaScript runtime
Express.js – Web framework for Node.js
MongoDB Atlas – Cloud-hosted database
Mongoose – ODM for MongoDB
Dotenv – Environment variable management
Nodemon – Auto-restarts the server during development



API Endpoints
Method	Endpoint	Description
GET	/api/games	Fetch all games
POST	/api/games	Create a new game
PUT	/api/games/:id	Update an existing game
DELETE	/api/games/:id	Delete a game
