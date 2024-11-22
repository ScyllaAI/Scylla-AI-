import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const result = await axios.post('http://localhost:5000/api/ai', { message });
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error sending message to AI:', error);
      setResponse("Sorry, I couldn't process your request.");
    }
  };

  return (
    <div>
      <h2>Chat with Scylla AI</h2>
      <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Ask me anything..." 
      />
      <button onClick={sendMessage}>Send</button>
      <div>{response}</div>
    </div>
  );
};

export default ChatBot;