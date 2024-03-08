import React, { useState } from "react";
import { Square } from "./componentes/Square";
import { calculateWinner } from "./helpers/calculateWinner";

const TURNS = {
  X: "x",
  O: "o"
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
