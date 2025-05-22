import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import GameBoard from './components/GameBoard';
import { vocabularyGame, geographyGame, generalKnowledgeGame } from './data/sampleGames';

function App() {
  const [gameType, setGameType] = useState('vocabulary');
  
  // Function to select game data based on game type
  const getGameData = () => {
    switch(gameType) {
      case 'geography':
        return geographyGame;
      case 'general':
        return generalKnowledgeGame;
      case 'vocabulary':
      default:
        return vocabularyGame;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">✓</span> EduMatch Quest
            </div>
            <div className="game-selector">
              <button 
                className={`btn ${gameType === 'vocabulary' ? 'active' : ''}`}
                onClick={() => setGameType('vocabulary')}
              >
                Vocabulary
              </button>
              <button 
                className={`btn ${gameType === 'geography' ? 'active' : ''}`}
                onClick={() => setGameType('geography')}
              >
                Geography
              </button>
              <button 
                className={`btn ${gameType === 'general' ? 'active' : ''}`}
                onClick={() => setGameType('general')}
              >
                General Knowledge
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="game-container">
            <DndProvider backend={HTML5Backend}>
              <GameBoard gameData={getGameData()} />
            </DndProvider>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;