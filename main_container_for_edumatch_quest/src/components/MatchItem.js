import React from 'react';
import { useDrag } from 'react-dnd';

// Define the drag type constant
const ITEM_TYPE = 'match-item';

/**
 * PUBLIC_INTERFACE
 * MatchItem Component - Draggable item in the matching game
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the item
 * @param {string} props.content - Text content to display
 * @param {boolean} props.isMatched - Whether the item has been matched
 * @returns {JSX.Element} - The rendered MatchItem component
 */
const MatchItem = ({ id, content, isMatched }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { id },
    // Prevent dragging if already matched
    canDrag: !isMatched,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`match-item ${isDragging ? 'dragging' : ''} ${isMatched ? 'matched' : ''}`}
      style={{ opacity: isDragging ? 0.4 : 1 }}
    >
      {content}
      {isMatched && <span className="match-icon">✓</span>}
    </div>
  );
};

export default MatchItem;

// Export the item type for use in DropZone
export { ITEM_TYPE };
