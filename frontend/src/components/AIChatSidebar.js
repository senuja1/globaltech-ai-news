import React, { useState } from 'react';
import axios from 'axios';

function AIChatSidebar() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');

  const sendMessage = async () => {
    const res = await axios.post('http://localhost:5000/api/chat', { message });
    setReply(res.data.reply);
  };

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-gray-100 p-4 shadow-lg">
      <h3 className="font-bold mb-2">AI Chat</h3>
      <div className="mb-2">
        <input 
          type="text" 
          value={message} 
          onChange={e => setMessage(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      <div className="mt-4">
        <p>{reply}</p>
      </div>
    </div>
  );
}

export default AIChatSidebar;
