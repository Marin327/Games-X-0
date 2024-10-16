import React from 'react';

const Statistics = ({ playerXScore, playerOScore }) => {
    return (
        <div className="statistics">
            <h2>Game Statistics</h2>
            <p>Player X Score: {playerXScore}</p>
            <p>Player O Score: {playerOScore}</p>
            {/* Можете да добавите повече статистика, ако желаете */}
        </div>
    );
};

export default Statistics;