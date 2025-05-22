/**
 * Sample game data for EduMatch Quest
 * Each game has a title, description, and pairs of items to be matched
 */

// Vocabulary matching game
export const vocabularyGame = {
  title: 'Vocabulary Challenge',
  description: 'Match each word with its correct definition',
  instructions: 'Drag each word on the left to its matching definition on the right',
  pairs: [
    {
      id: 'v1',
      term: 'Ephemeral',
      match: 'Lasting for a very short time',
    },
    {
      id: 'v2',
      term: 'Ubiquitous',
      match: 'Present, appearing, or found everywhere',
    },
    {
      id: 'v3',
      term: 'Eloquent',
      match: 'Fluent or persuasive in speaking or writing',
    },
    {
      id: 'v4',
      term: 'Benevolent',
      match: 'Well-meaning and kindly',
    },
    {
      id: 'v5',
      term: 'Pragmatic',
      match: 'Dealing with things sensibly and realistically',
    },
  ],
};

// Geography matching game
export const geographyGame = {
  title: 'World Capitals',
  description: 'Match each country with its capital city',
  instructions: 'Drag each country on the left to its capital city on the right',
  pairs: [
    {
      id: 'g1',
      term: 'France',
      match: 'Paris',
    },
    {
      id: 'g2',
      term: 'Japan',
      match: 'Tokyo',
    },
    {
      id: 'g3',
      term: 'Brazil',
      match: 'Brasília',
    },
    {
      id: 'g4',
      term: 'Australia',
      match: 'Canberra',
    },
    {
      id: 'g5',
      term: 'Egypt',
      match: 'Cairo',
    },
  ],
};

// General knowledge matching game
export const generalKnowledgeGame = {
  title: 'Science Concepts',
  description: 'Match each scientific concept with its explanation',
  instructions: 'Drag each concept on the left to its explanation on the right',
  pairs: [
    {
      id: 'k1',
      term: 'Photosynthesis',
      match: 'Process by which plants convert light energy into chemical energy',
    },
    {
      id: 'k2',
      term: 'Gravity',
      match: 'Force that attracts objects toward one another',
    },
    {
      id: 'k3',
      term: 'Mitosis',
      match: 'Cell division resulting in two identical daughter cells',
    },
    {
      id: 'k4',
      term: 'Atom',
      match: 'Basic unit of a chemical element',
    },
    {
      id: 'k5',
      term: 'DNA',
      match: 'Molecule carrying genetic instructions for development',
    },
  ],
};
