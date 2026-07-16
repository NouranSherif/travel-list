import { useState } from 'react';
import ListItem from './ListItem';

function PackingList({
  list,
  handleToggleItem,
  handleDelete,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState('input');
  const handleChange = e => {
    setSortBy(e.target.value);
    console.log(e.target.value);
  };
  let sortedItems = list;
  if (sortBy === 'description') {
    sortedItems = list
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === 'packed') {
    sortedItems = list.slice().sort((a, b) => a.packed - b.packed);
  }

  return (
    <div className="list">
      {list.length === 0 ? (
        <p className="emptyList">No items</p>
      ) : (
        <>
          <ul>
            {sortedItems.map(i => (
              <ListItem
                data={i}
                key={i.id}
                handleToggleItem={handleToggleItem}
                handleDelete={handleDelete}
              ></ListItem>
            ))}
          </ul>
          <div className="actions">
            <select name="sort" value={sortBy} onChange={handleChange}>
              <option value="input">Sort by input order</option>
              <option value="description">Sort by description</option>
              <option value="packed">Sort by packed status</option>
            </select>
            <button onClick={handleClearList}>Clear list</button>
          </div>
        </>
      )}
    </div>
  );
}

export default PackingList;
