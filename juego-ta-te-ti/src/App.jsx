import React, { useState } from "react";
import { Square } from "./componentes/Square";

const TURNS = {
  X: "x",
  O: "o"
};

const calculateWinner = (board) => {
  const lines = [
    // Combinaciones de líneas horizontales
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Combinaciones de líneas verticales
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Combinaciones de líneas diagonales
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Retorna el símbolo del ganador (X o O)
    }
  }

  return null; // Si no hay un ganador
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X); // Empieza con X
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    // Verificar si la casilla está vacía y el juego no ha terminado
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      // Cambiar el turno al siguiente jugador
      setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
      // Verificar si hay un ganador después de cada movimiento
      const winner = calculateWinner(newBoard);
      if (winner) {
        setWinner(winner);
      }
    }
  };

  const handleRestart = () => {
    // Reiniciar el estado del juego
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1>TA TE TI</h1>
      <section className="game">
        {board.map((value, index) => (
          <Square key={index} onClick={() => handleClick(index)}>
            {value}
          </Square>
        ))}
      </section>
      {winner && <p>{`El ganador es ${winner}`}</p>}
      {!winner && !board.includes(null) && <p>¡Empate!</p>}
      {(winner || !board.includes(null)) && (
        <button onClick={handleRestart}>Nuevo Juego</button>
      )}
    </main>
  );
}

export default App;
