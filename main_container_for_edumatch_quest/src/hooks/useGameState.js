import { useState, useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * Custom hook to manage game state
 * @param {Object} gameData - The data for the current game
 * @returns {Object} - Game state and functions to update it
 */
const useGameState = (gameData) => {
  // Track the matched pairs
  const [matches, setMatches] = useState([]);
  
  // Track the score
  const [score, setScore] = useState(0);
  
  // Track if game is complete
  const [isComplete, setIsComplete] = useState(false);
  
  // Track the timer (in seconds)
  const [timer, setTimer] = useState(0);
  
  // Track timer interval ID for cleanup
  const [timerInterval, setTimerInterval] = useState(null);

  // Track incorrect attempts
  const [attempts, setAttempts] = useState(0);
  
  // Reset game state when game data changes
  useEffect(() => {
    setMatches([]);
    setScore(0);
    setIsComplete(false);
    setTimer(0);
    setAttempts(0);
    
    // Clear existing timer if any
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    
    // Start new timer
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    
    setTimerInterval(interval);
    
    // Cleanup timer on unmount or game data change
    return () => {
      clearInterval(interval);
    };
  }, [gameData]);

  // Check if the game is complete when matches change
  useEffect(() => {
    if (matches.length === gameData.pairs.length) {
      setIsComplete(true);
      // Stop the timer when game is complete
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    }
  }, [matches, gameData.pairs.length, timerInterval]);

  /**
   * Check if a match is correct and update state accordingly
   * @param {string} termId - The ID of the term being matched
   * @param {string} matchId - The ID of the definition/match being matched to
   * @returns {boolean} - Whether the match was successful
   */
  const checkMatch = (termId, matchId) => {
    // Find the pair in the game data
    const correctPair = gameData.pairs.find(pair => pair.id === termId);
    
    // Find the match item in the list of pairs
    const matchItem = gameData.pairs.find(pair => pair.id === matchId);

    if (!correctPair || !matchItem) {
      console.error('Invalid match attempt');
      return false;
    }
    
    // If this is a successful match
    if (correctPair.match === matchItem.match) {
      // Add to matches
      setMatches(prevMatches => [...prevMatches, termId]);
      
      // Update score (10 points for a correct match)
      setScore(prevScore => prevScore + 10);
      
      return true;
    } else {
      // Track incorrect attempt
      setAttempts(prevAttempts => prevAttempts + 1);
      
      // Reduce score for incorrect match (but not below 0)
      setScore(prevScore => Math.max(0, prevScore - 2));
      
      return false;
    }
  };

  /**
   * Format time in MM:SS format
   * @param {number} seconds - Time in seconds
   * @returns {string} - Formatted time
   */
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    matches,
    score,
    isComplete,
    timer,
    formatTime,
    attempts,
    checkMatch,
  };
};

export default useGameState;
