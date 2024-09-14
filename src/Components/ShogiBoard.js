// src/components/ShogiBoard.js
import { useEffect, useState } from 'react';

// Initial game board state (assuming a 9x9 grid for Shogi)
const initialBoardState = {
  // Key-value pairs where positions like 'A1' hold piece information
  A1: 'Rook',
  A2: 'Knight',
  // Initialize the entire board with pieces
  // For simplicity, we'll use piece names directly, but these could be objects
};

const ShogiBoard = () => {
  const [boardState, setBoardState] = useState(initialBoardState);

  useEffect(() => {
    // Establish a WebSocket connection to the server
    const ws = new WebSocket('ws://localhost:8080'); // Replace with your server address
    
    ws.onmessage = (event) => {
      const moveData = JSON.parse(event.data);
      console.log('Move received:', moveData);
      // Update the board state when a move is received
      movePieceOnBoard(moveData);
    };

    ws.onclose = () => console.log('WebSocket closed');

    return () => ws.close(); // Clean up the WebSocket connection when component unmounts
  }, []);

  // Function to handle moving pieces on the board
  const movePieceOnBoard = (moveData) => {
    setBoardState((prevBoardState) => {
      const updatedBoard = { ...prevBoardState };

      const { from, to } = moveData;

      // Move the piece to the new position
      updatedBoard[to] = updatedBoard[from];
      delete updatedBoard[from];

      return updatedBoard;
    });
  };

  // Render the board and pieces
  const renderBoard = () => {
    return Object.keys(boardState).map((position) => (
      <div key={position} className="square">
        {boardState[position] ? (
          <span>{boardState[position]}</span>
        ) : (
          <span>Empty</span>
        )}
      </div>
    ));
  };

  return (
    <div className="shogi-board">
      {renderBoard()}
    </div>
  );
};

export default ShogiBoard;
