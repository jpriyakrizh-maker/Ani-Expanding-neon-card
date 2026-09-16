function MessageBox({ developer, onClose }) {
  return (
    <div
      className="card-message-box"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="message-header">
        <span>Message {developer.name}</span>

        <button onClick={onClose}>×</button>
      </div>

      <input
        type="text"
        placeholder="Type your message..."
      />

      <button className="send-btn">
        Send
      </button>
    </div>
  );
}

export default MessageBox;