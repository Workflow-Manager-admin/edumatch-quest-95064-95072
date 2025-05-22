import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ITEM_TYPE } from './MatchItem';

/**
 * PUBLIC_INTERFACE
 * DropZone Component - Area where items can be dropped for matching
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the drop zone
 * @param {string} props.content - Text content to display
 * @param {Function} props.onDrop - Function to call when an item is dropped
 * @returns {JSX.Element} - The rendered DropZone component
 */
const DropZone = ({ id, content, onDrop }) => {
  // Track matched item ID
  const [matchedItemId, setMatchedItemId] = useState(null);
  // Track animation state
  const [showAnimation, setShowAnimation] = useState('');

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item) => {
      const isCorrect = onDrop(item.id, id);
      
      if (isCorrect) {
        setMatchedItemId(item.id);
        setShowAnimation('correct');
      } else {
        // Show incorrect animation briefly
        setShowAnimation('incorrect');
        setTimeout(() => setShowAnimation(''), 800);
      }
      
      return { id };
    },
    canDrop: () => !matchedItemId, // Prevent dropping if already matched
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // Calculate classes based on state
  const getClasses = () => {
    let classes = 'drop-zone';
    
    if (matchedItemId) {
      classes += ' matched';
    } else {
      if (isOver) {
        classes += ' over';
      }
      if (canDrop) {
        classes += ' can-drop';
      }
    }
    
    if (showAnimation) {
      classes += ` ${showAnimation}`;
    }
    
    return classes;
  };

  return (
    <div ref={drop} className={getClasses()}>
      {content}
      {matchedItemId && <span className="match-icon">✓</span>}
    </div>
  );
};

export default DropZone;
