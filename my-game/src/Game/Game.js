import React from 'react';
import Board from '../Board/Board';

const Game = ({ updateScores, resetGame }) => { // Добавете resetGame
    return (
        <div className="game">
            <h1>React Game</h1>
            <Board updateScores={updateScores} resetGame={resetGame} /> {/* Предайте resetGame */}
        </div>
    );
};

export default Game;