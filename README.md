# Shogi Web App

A full-stack web application for playing Shogi, with real-time piece movement tracking, multiplayer support, and PDF export functionality for game history. This app implements the traditional 9x9 Shogi game, following the official rules, with drag-and-drop functionality, multiplayer interaction, and an option to save the game history at the end.

# Features

9x9 Shogi Board: Interactive UI for playing Shogi with drag-and-drop support.
Real-Time Multiplayer: Play against an opponent with synchronized movements and real-time board updates using WebSockets.
Piece Movement Tracking: Every piece movement (including promotions and captures) is tracked and displayed with the name, start position, and end position.
End Game Summary: When the game ends (checkmate or resignation), all moves are displayed in a summary.
Export to PDF: Save the game history, including all moves and final board state, as a PDF file.
Responsive Design: Play the game on any device, including mobile, with a fully responsive layout.
Tech Stack
Frontend:
React.js (or your chosen frontend framework)
HTML5, CSS3, JavaScript
Backend:
Node.js with Express.js (or Django/Flask as an alternative)
MongoDB (or PostgreSQL/MySQL) for move history and game state storage
Real-Time Sync:
Socket.io for real-time multiplayer interactions
PDF Export:
jsPDF or pdfkit for generating game history PDF
Deployment:
Hosted on platforms like Heroku, Vercel, or AWS
Getting Started
Follow the steps below to get the project up and running locally on your machine.

# Prerequisites

Node.js: Ensure that Node.js is installed on your machine. Download it from here.
MongoDB: Install MongoDB or set up a cloud instance using MongoDB Atlas.
Git: Install Git for version control.
Installation
Clone the repository:


git clone https://github.com/your-username/shogi-web-app.git
cd shogi-web-app
Install dependencies for both frontend and backend:

Backend:

cd backend
npm install

Frontend:

cd frontend
npm install

Set up environment variables: Create a .env file in the backend folder and add the following environment variables:


PORT=5000
MONGO_URI=<your-mongodb-connection-string>

Run the MongoDB server: Ensure your MongoDB server is running:

mongod
Start the backend server: Navigate to the backend folder and run:

npm start
Start the frontend development server: In another terminal window, navigate to the frontend folder and run:

npm start
Running the Application
Once the frontend and backend servers are up and running, you can access the app by navigating to http://localhost:3000 in your browser.

Playing the Game
Drag and drop the pieces to move them around the board.
The app will automatically track all moves made by each player.
When the game ends, you will see a summary of all moves and a button to download the game history as a PDF.
API Endpoints
GET /api/game/history: Retrieve the full game history.
POST /api/game/save: Save the game history at the end of the game.
PDF Export
The game automatically generates a downloadable PDF file summarizing all moves once the game ends. The PDF includes:
Player names (if provided).
Game start and end times.
A list of all moves made during the game.
Final board state.
Development
Backend Structure
/controllers: Contains the logic for handling game state, move tracking, and PDF export.
/models: MongoDB schemas for storing game state and move history.
/routes: API routes for game logic.
Frontend Structure
/components: Contains the main Shogi board UI, drag-and-drop logic, and move tracking.
/services: API calls for fetching and saving game history.
WebSocket Integration
Uses Socket.io for real-time updates between players.
Updates board state and moves in real-time, ensuring synchronization for multiplayer games.
Deployment
To deploy the app, follow the instructions provided by the platform you're using (e.g., Heroku, AWS, Vercel). Make sure to configure the environment variables (MONGO_URI, PORT) on the deployment platform.

Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests to improve the app.

Fork the repository
Create a feature branch (git checkout -b feature-branch)
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature-branch)
Open a Pull Request
