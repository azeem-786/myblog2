import React, { useState } from 'react';

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessage = { sender: 'user', text: input };
      setMessages([...messages, newMessage]);
      setInput('');

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Thanks for your message. We\'re here to help!' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 shadow-lg rounded-lg overflow-hidden bg-white">
      {/* Chat Header */}
      <div className="bg-green-500 text-white py-3 px-4 flex justify-between items-center">
        <span className="font-bold text-lg">Live Chat</span>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          {isMinimized ? '▲' : '▼'}
        </button>
      </div>

      {/* Chat Content */}
      {!isMinimized && (
        <>
          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  message.sender === 'bot'
                    ? 'bg-gray-200 text-left'
                    : 'bg-green-100 text-right'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-300">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-lg p-2"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Send
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LiveChat;
