import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Yo bhai! Dim here 😎 Math er answer janle vul e likhbo, kasam se!"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const botMessage = { role: "bot", content: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        role: "bot",
        content: "Arey bhai, kuch toh gadbad ho gaya! Try again kar na 😅"
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="app">
      <div className="chat-container">
        <div className="chat-header">
          <div className="header-info">
            <div className="avatar">DIM</div>
            <div className="header-text">
              <h2>Dim (Ayash Bera)</h2>
              <p className="status">{isTyping ? "typing..." : "online"}</p>
            </div>
          </div>
          <div className="header-actions">
            <button className="icon-button">📞</button>
            <button className="icon-button">🎥</button>
            <button className="icon-button">⋮</button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${
                msg.role === "user" ? "user-message" : "bot-message"
              }`}
            >
              <div className="message-content">{msg.content}</div>
              <div className="message-time">
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <div className="input-wrapper">
            <button className="emoji-button">😊</button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && handleSend()
              }
              placeholder="Type your message..."
              className="chat-input"
            />
            <button className="attach-button">📎</button>
          </div>
          <button
            onClick={handleSend}
            className="send-button"
            disabled={!input.trim()}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
