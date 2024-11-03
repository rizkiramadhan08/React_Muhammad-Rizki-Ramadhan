import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatBot = () => {
  const [inputUser, setInputUser] = useState("");
  const [messages, setMessages] = useState([
    { role: "model", text: "Hello! How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "AIzaSyA9vQnPpO_IV4vtVboh0IcAN67NvjCkbBU";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
  
  const generationConfig = {
    maxOutputTokens: 1000,
    temperature: 1,
  };

  const handleChange = (e) => {
    setInputUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputUser.trim()) return;

    try {
      setIsLoading(true);
      // Add user message immediately
      setMessages(prev => [...prev, { role: "user", text: inputUser }]);
      
      const promptDefault = "jawab dengan sopan.";
      const combinedPrompt = `${promptDefault}\n${inputUser}`;
      
      const chatSession = model.startChat({ generationConfig });
      const result = await chatSession.sendMessage(combinedPrompt);
      const responseText = await result.response.text();
      
      // Add bot response
      setMessages(prev => [...prev, { role: "model", text: responseText }]);
      setInputUser("");
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, { 
        role: "model", 
        text: "An error occurred while processing your request." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Chat Assistant</h5>
            </div>
            
            {/* Chat messages area */}
            <div className="card-body" style={{ height: "400px", overflowY: "auto" }}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`d-flex ${
                    message.role === "user" ? "justify-content-end" : "justify-content-start"
                  } mb-3`}
                >
                  <div
                    className={`${
                      message.role === "user"
                        ? "bg-primary text-white"
                        : "bg-light"
                    } rounded p-3`}
                    style={{ maxWidth: "75%" }}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="d-flex justify-content-start mb-3">
                  <div className="bg-light rounded p-3">
                    Typing...
                  </div>
                </div>
              )}
            </div>
            
            {/* Input area */}
            <div className="card-footer bg-white">
              <form onSubmit={handleSubmit} className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={inputUser}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  disabled={isLoading}
                />
                <button 
                  className="btn btn-primary" 
                  type="submit"
                  disabled={isLoading}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;