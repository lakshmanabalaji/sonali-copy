import { useState } from 'react';

export default function Chat({ data }) {
  const [showChat, setShowChat] = useState(!!data.showChat);

  return (
    <div className="whatsapp-container">
      {showChat && (
        <div className="chat-popup">
          <button className="close-btn" onClick={() => setShowChat(false)}>×</button>
          <h4>{data.title}</h4>
          <p>{data.text}</p>
          <a className="chat-btn" href={data.cta?.link} target="_blank" rel="noreferrer">
            {data.cta?.label}
          </a>
        </div>
      )}
      <button className="whatsapp-icon" onClick={() => setShowChat(true)} aria-label="Chat with us on WhatsApp">
        <img src={data.iconUrl} alt="WhatsApp" />
      </button>
    </div>
  );
}
