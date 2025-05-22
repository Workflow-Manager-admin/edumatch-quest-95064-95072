import React from 'react';
import MatchItem from './MatchItem';
import DropZone from './DropZone';
import ScoreBoard from './ScoreBoard';
import useGameState from '../hooks/useGameState';

/**
 * PUBLIC_INTERFACE
 * GameBoard Component - Main container for the EduMatch Quest game
 * @param {Object} props - Component props
 * @param {Object} props.gameData - The game data containing title, description, and pairs
 * @returns {JSX.Element} - The rendered GameBoard component
 */
const GameBoard = ({ gameData }) => {
  const {
    matches,
    score,
    isComplete,
    timer,
    formatTime,
    attempts,
    checkMatch
  } = useGameState(gameData);

  // Shuffle the game data pairs for the right side (matches)
  // This creates a random order for the matches
  const shuffledMatches = React.useMemo(() => {
    return [...gameData.pairs]
      .sort(() => Math.random() - 0.5)
      .map(pair => ({
        id: pair.id,
        content: pair.match
      }));
  }, [gameData]);

  // Create an array of terms (left side)
  const terms = gameData.pairs.map(pair => ({
    id: pair.id,
    content: pair.term
  }));

  return (
    <div className="game-board">
      <header className="game-header">
        <h1 className="game-title">{gameData.title}</h1>
        <p className="game-description">{gameData.description}</p>
        <p className="game-instructions">{gameData.instructions}</p>
      </header>

      <ScoreBoard 
        score={score}
        matches={matches.length}
        total={gameData.pairs.length}
        timer={formatTime(timer)}
        attempts={attempts}
        isComplete={isComplete}
      />

      <div className="game-content">
        {isComplete ? (
          <div className="game-complete">
            <h2>Game Complete!</h2>
            <p>
              You completed the game with a score of {score} in {formatTime(timer)}.
            </p>
            <p>
              Correct matches: {matches.length}/{gameData.pairs.length}
            </p>
            <p>
              Incorrect attempts: {attempts}
            </p>
          </div>
        ) : (
          <div className="match-container">
            <div className="terms-column">
              {terms.map(term => (
                <MatchItem
                  key={term.id}
                  id={term.id}
                  content={term.content}
                  isMatched={matches.includes(term.id)}
                />
              ))}
            </div>
            
            <div className="matches-column">
              {shuffledMatches.map(match => (
                <DropZone
                  key={match.id}
                  id={match.id}
                  content={match.content}
                  onDrop={checkMatch}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameBoard;
