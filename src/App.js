import "./App.css";
import { FiMessageCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import Chatbot from "./components/Chatbot";

function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const handleOpenBot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  useEffect(() => {
    setChatbotOpen(true);
    console.log(`render`);
  }, []);

  return (
    <div className="App">
      <h1>Chatbot Frontend</h1>
      <div className="button-container">
        <button className="button-main" onClick={handleOpenBot}>
          <FiMessageCircle size={30} />
        </button>
      </div>
      <Chatbot isOpen={chatbotOpen} handleOpenBot={handleOpenBot} />
    </div>
  );
}

export default App;
