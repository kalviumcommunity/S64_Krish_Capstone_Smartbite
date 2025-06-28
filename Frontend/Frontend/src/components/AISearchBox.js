import React, { useState } from 'react';
import axios from 'axios';

const AISearchBox = () => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleChange = async (e) => {
    const val = e.target.value;
    setInput(val);

    if (val.length > 2) {
      try {
        const res = await axios.post('http://localhost:4000/api/ai/autocomplete', { prompt: val });
        setSuggestion(res.data.suggestion);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="What are you craving?"
        value={input}
        onChange={handleChange}
        style={{ padding: '10px', width: '300px', marginBottom: '10px' }}
      />
      <div><strong>Suggestion:</strong> {suggestion}</div>
    </div>
  );
};

export default AISearchBox;
