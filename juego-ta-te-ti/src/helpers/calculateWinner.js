export const calculateWinner = (board) => {
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
  
    // Verificar si hay empate si todas las fichas han sido colocadas
    if (board.every(square => square !== null)) {
      return "empate"; // Si todas las fichas han sido colocadas y no hay ganador, es un empate
    }
  
    return null; // Si no hay un ganador ni un empate
  };
  