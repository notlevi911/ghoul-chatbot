import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { role: 'bot', content: data.reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-box">
        <h2>Chat with Dim 😄</h2>
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <strong>{msg.role === 'user' ? 'You' : 'Dim'}:</strong> {msg.content}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
