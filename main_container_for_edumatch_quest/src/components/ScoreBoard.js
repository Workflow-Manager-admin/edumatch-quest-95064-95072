import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ScoreBoard Component - Displays game score, progress, and time
 * @param {Object} props - Component props
 * @param {number} props.score - Current score
 * @param {number} props.matches - Number of successful matches
 * @param {number} props.total - Total number of matches required
 * @param {string} props.timer - Formatted time string
 * @param {number} props.attempts - Number of incorrect attempts
 * @param {boolean} props.isComplete - Whether the game is complete
 * @returns {JSX.Element} - The rendered ScoreBoard component
 */
const ScoreBoard = ({ score, matches, total, timer, attempts, isComplete }) => {
  // Calculate progress percentage
  const progressPercent = (matches / total) * 100;
  
  return (
    <div className="score-board">
      <div className="score-item">
        <span className="score-label">Score</span>
        <span className="score-value">{score}</span>
      </div>
      
      <div className="score-item">
        <span className="score-label">Progress</span>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="progress-text">{matches}/{total}</span>
      </div>
      
      <div className="score-item">
        <span className="score-label">Time</span>
        <span className="score-value">{timer}</span>
      </div>
      
      <div className="score-item">
        <span className="score-label">Attempts</span>
        <span className="score-value">{attempts}</span>
      </div>
      
      {isComplete && (
        <div className="score-complete">
          🎉 Complete!
        </div>
      )}
    </div>
  );
};

export default ScoreBoard;
