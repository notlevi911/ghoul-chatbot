# Ghoul Chatbot (Dim) 🤖

A fun Bengali-style chatbot that responds like a humorous Bengali friend named "Dim" (Ayash Bera). The bot is designed to give funny or intentionally incorrect answers to math questions and responds in Bengali/Binglish style.

![Chat Interface Preview](https://img.shields.io/badge/Status-Active-success)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![React](https://img.shields.io/badge/React-18.0+-61DAFB)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Bengali/Binglish Responses**: Chat in Bengali or Binglish and get responses in the same style
- **Humorous Math Answers**: Get intentionally funny or incorrect answers to math questions
- **Modern UI**: Beautiful chat interface with gradient design and animations
- **Real-time Chat**: Instant responses with typing indicators
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Backend
- Flask (Python web framework)
- Google Generative AI (Gemini API)
- Flask-CORS for cross-origin requests

### Frontend
- React.js
- Modern CSS with animations
- Responsive design

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8+
- Node.js 14+
- npm or yarn
- Git

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/ghoul-chatbot.git
cd ghoul-chatbot
```

### 2. Backend Setup

Navigate to the backend directory:
```bash
cd Backend
```

Create a virtual environment:
```bash
python -m venv venv
```

Activate the virtual environment:
- Windows:
  ```bash
  .\venv\Scripts\activate
  ```
- macOS/Linux:
  ```bash
  source venv/bin/activate
  ```

Install dependencies:
```bash
pip install -r requirements.txt
```

Create a `.env` file in the Backend directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Frontend Setup

Navigate to the frontend directory:
```bash
cd ../Frontend
```

Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running the Application

### Start the Backend Server
From the Backend directory:
```bash
python app.py
```
The server will start on `http://localhost:5000`

### Start the Frontend Development Server
From the Frontend directory:
```bash
npm start
```
The application will open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
ghoul-chatbot/
├── Backend/
│   ├── app.py              # Flask application
│   ├── .env                # Environment variables
│   ├── requirements.txt    # Python dependencies
│   └── venv/              # Virtual environment
├── Frontend/
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Styles
│   │   └── index.js       # Entry point
│   ├── public/
│   └── package.json       # Node dependencies
└── README.md
```

## 🔧 Configuration

### Backend Configuration
The backend can be configured through environment variables in the `.env` file:
- `GEMINI_API_KEY`: Your Google Generative AI API key
- `PORT`: Server port (default: 5000)

### Frontend Configuration
Update the API endpoint in `App.jsx` if your backend runs on a different port:
```javascript
const res = await fetch('http://localhost:5000/chat', {
  // ... request configuration
});
```

## 🎮 Usage

1. Start both the backend and frontend servers
2. Open the chat interface in your browser
3. Type your message in Bengali, Binglish, or English
4. Press Enter or click the send button
5. Enjoy the humorous responses from Dim!

### Example Conversations
- "2+2 koto?" → "Bhai, 5 hobe, trust me! Calculator ta bhul dekhachhe 😂"
- "What's the capital of India?" → "Delhi na Kolkata, confusion ache bhai!"

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- Large messages may take longer to process
- Some Bengali text might not render properly on certain browsers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Google Generative AI for the Gemini API
- React community for the excellent documentation
- Flask community for the simple yet powerful framework

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/ghoul-chatbot](https://github.com/yourusername/ghoul-chatbot)

---
Made with ❤️ by [Your Name]