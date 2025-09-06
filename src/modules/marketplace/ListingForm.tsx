import React, { useState } from 'react';

const ListingForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('Productivity');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">List Your Agent</h3>
      <input className="input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="input" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" className="input" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Productivity">Productivity</option>
        <option value="Business">Business</option>
        <option value="Support">Support</option>
        <option value="Personal">Personal</option>
      </select>
      <button className="btn-primary mt-4" onClick={() => onSubmit({ title, description, price, category })}>Submit</button>
    </div>
  );
};

export default ListingForm;
