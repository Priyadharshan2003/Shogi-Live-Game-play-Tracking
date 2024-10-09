# Shogi Web App

A full-stack web application for playing Shogi, with real-time piece movement tracking, multiplayer support, and PDF export functionality for game history. This app implements the traditional 9x9 Shogi game, following the official rules, with drag-and-drop functionality, multiplayer interaction, and an option to save the game history at the end.

## Features

- **9x9 Shogi Board:** Interactive UI for playing Shogi with drag-and-drop support.
- **Real-Time Multiplayer:** Play against an opponent with synchronized movements and real-time board updates using WebSockets.
- **Piece Movement Tracking:** Every piece movement (including promotions and captures) is tracked and displayed with the name, start position, and end position.
- **End Game Summary:** When the game ends (checkmate or resignation), all moves are displayed in a summary.
- **Export to PDF:** Save the game history, including all moves and final board state, as a PDF file.
- **Responsive Design:** Play the game on any device, including mobile, with a fully responsive layout.

## Tech Stack

- **Frontend:**
  - React.js (or your chosen frontend framework)
  - HTML5, CSS3, JavaScript
- **Backend:**
  - Node.js with Express.js (or Django/Flask as an alternative)
  - MongoDB (or PostgreSQL/MySQL) for move history and game state storage
- **Real-Time Sync:**
  - Socket.io for real-time multiplayer interactions
- **PDF Export:**
  - jsPDF or pdfkit for generating game history PDF
- **Deployment:**
  - Hosted on platforms like Heroku, Vercel, or AWS

## Getting Started

Follow the steps below to get the project up and running locally on your machine.

### Prerequisites

- **Node.js**: Ensure that Node.js is installed on your machine. Download it from [here](https://nodejs.org/en/).
- **MongoDB**: Install MongoDB or set up a cloud instance using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **Git**: Install Git for version control.


 
