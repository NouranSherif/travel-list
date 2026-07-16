import React from 'react';

function ListItem({ data, handleToggleItem, handleDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        name="togglePacked"
        onChange={() => {
          handleToggleItem(data.id);
        }}
        checked={data.packed}
      />
      <span style={data.packed ? { textDecoration: 'line-through' } : {}}>
        {data.quantity}
        &nbsp;
        {data.description}
      </span>
      <button onClick={() => handleDelete(data.id)}>❌</button>
    </li>
  );
}

export default ListItem;
