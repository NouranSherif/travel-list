import { useState } from 'react';

function Form({ onAddItem }) {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    if (item.trim() === '') {
      alert('please enter a valid item');
      return;
    }

    const newItem = {
      id: Date.now(),
      description: item,
      quantity: quantity,
      packed: false,
    };
    onAddItem(newItem);

    setItem('');
    setQuantity(1);
  };
  return (
    <form
      className="add-form"
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <h3>what do you need for your trip?</h3>
      <div className="input-wrapper">
        <select
          value={quantity}
          onChange={e => {
            setQuantity(+e.target.value);
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={item}
          onChange={e => {
            setItem(e.target.value);
          }}
        />
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
