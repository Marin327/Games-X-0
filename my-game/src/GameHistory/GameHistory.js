import React from 'react';
import '../App.css';

const GameHistory = ({ history }) => (
    <div className="game-history">
        <h3>Mmove History</h3>
        <ul>
            {history.map((move, index) => (
                <li key={index}>Move {index + 1}: {move}</li>
            ))}
        </ul>
    </div>
);

export default GameHistory;