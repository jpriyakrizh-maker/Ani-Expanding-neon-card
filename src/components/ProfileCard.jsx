function ProfileCard({ dev, expanded, onExpand, onMessage }) {
  return (
    <div
      className={`profile-card ${expanded ? "expanded" : ""}`}
      onClick={onExpand}
    >
      <div className="profile-image">
        <img src={dev.image} alt={dev.name} />
      </div>

      <div className="profile-content">
        <h2>{dev.name}</h2>
        <p>{dev.username}</p>

        {expanded && (
          <>
            <div className="stats">
              <div>
                <strong>{dev.followers}</strong>
                <span>Followers</span>
              </div>

              <div>
                <strong>{dev.following}</strong>
                <span>Following</span>
              </div>

              <div>
                <strong>{dev.projects}</strong>
                <span>Projects</span>
              </div>
            </div>

            <div className="buttons">
              <button
                className="follow-btn"
                onClick={(e) => e.stopPropagation()}
              >
                Follow
              </button>

              <button
                className="message-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onMessage(dev);
                }}
              >
                Message
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;