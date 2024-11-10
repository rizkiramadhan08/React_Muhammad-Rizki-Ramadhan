import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const FootballChatBot = () => {
  const [inputUser, setInputUser] = useState("");
  const [messages, setMessages] = useState([
    { 
      role: "model", 
      text: "Halo penggemar sepak bola! Apa pertanyaan Anda tentang dunia sepak bola hari ini?" 
    }
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
      
      const promptDefault = "Jawab pertanyaan seputar sepak bola dengan informatif dan antusias. Gunakan bahasa yang komunikatif.jangan jawab pertanyaan selain bukan tntang sepak bola";
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
        text: "Maaf, terjadi kesalahan dalam memproses pertanyaan Anda tentang sepak bola." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-success">
            <div className="card-header bg-success text-white d-flex align-items-center">
              <i className="fas fa-futbol me-2"></i>
              <h5 className="mb-0">Asisten Sepak Bola</h5>
            </div>
            
            {/* Chat messages area */}
            <div 
              className="card-body" 
              style={{ 
                height: "400px", 
                overflowY: "auto", 
                backgroundColor: "#f0f8ea" 
              }}
            >
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
                        ? "bg-success text-white"
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
                    Sedang menyiapkan jawaban...
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
                  placeholder="Tanya tentang sepak bola..."
                  disabled={isLoading}
                />
                <button 
                  className="btn btn-success" 
                  type="submit"
                  disabled={isLoading}
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>
          
          {/* Contoh pertanyaan */}
          <div className="mt-3 text-center">
            <small className="text-muted">
              Contoh pertanyaan: "Siapa top skor Liga Champions?", 
              "Berita terkini tentang Manchester United", 
              "Prediksi pertandingan hari ini"
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootballChatBot;