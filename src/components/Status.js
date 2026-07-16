import React from 'react';

function Status({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        {' '}
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numberOfItems = items.length;
  const numOfPackedItems = items.filter(item => item.packed).length;
  const percentage = Math.round((numOfPackedItems / numberOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : ` 💼 You have ${numberOfItems} items on your list, and you already packed ${numOfPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Status;
