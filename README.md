# Shogi Live Game Play Tracking

## Project Description

**Shogi Live Game Play Tracking** is an innovative project designed to provide real-time tracking of Shogi (Japanese chess) game plays using sensors and web technologies. The project integrates hardware and software to automate the detection of Shogi piece movements on a physical board and display the live game state on a web application.

The core features of this project include:
- **Live Tracking**: Real-time tracking of Shogi piece movements using Hall effect sensors connected to an Arduino Mega.
- **Web Interface**: A React-based web application that displays the Shogi board and updates the positions of pieces in real-time based on the sensor data.
- **WebSocket Communication**: Real-time data transmission from the Arduino to the web application via a Node.js WebSocket server.

## Getting Started

### Prerequisites

- **Arduino Mega** with Hall effect sensors
- **Arduino IDE** for uploading the firmware
- **Node.js** and **npm** for the backend server
- **React** for the frontend application
