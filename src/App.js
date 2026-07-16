import './App.css';
import './index.css';
import { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Status from './components/Status';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('itemsList')) || [],
  );

  const handleAddItem = item => {
    setItems([...items, item]);
  };

  const handleToggleItem = id => {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  };
  const handleDelete = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?',
    );

    confirmed && setItems([]);
  };

  useEffect(() => {
    localStorage.setItem('itemsList', JSON.stringify(items));
  }, [items]);

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        list={items}
        handleToggleItem={handleToggleItem}
        handleDelete={handleDelete}
        handleClearList={handleClearList}
      />
      <Status items={items} />
    </div>
  );
}

export default App;
