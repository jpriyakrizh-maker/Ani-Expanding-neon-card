import { useState } from "react";
import "./App.css";

import ProfileCard from "./components/ProfileCard";
import MessageBox from "./components/MessageBox";

function App() {
  const [expanded, setExpanded] = useState(null);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const developers = [
    {
      id: 1,
      name: "Alex Developer",
      username: "@alexdev",
      image: "/Ani-Expanding-neon-card/images/developer.png",
      followers: "12K",
      following: "1.8K",
      projects: "126",
    },
    {
      id: 2,
      name: "Code Master",
      username: "@codemaster",
      image: "/Ani-Expanding-neon-card/images/developer.png",
      followers: "8.4K",
      following: "920",
      projects: "84",
    },
  ];

  const handleMessage = (developer) => {
    setExpanded(developer.id);
    setSelectedDeveloper(developer);
  };

  const handleCloseMessage = () => {
    setSelectedDeveloper(null);
  };

  return (
    <div className="app">
      <div className="cards-container">

        {developers.map((dev) => (
          <div key={dev.id} className="card-wrapper">

            <ProfileCard
              dev={dev}
              expanded={expanded === dev.id}
              onExpand={() => {
                setExpanded(
                  expanded === dev.id ? null : dev.id
                );
                setSelectedDeveloper(null);
              }}
              onMessage={handleMessage}
            />

            {/* MESSAGE BOX - INSIDE CARD */}
            {selectedDeveloper?.id === dev.id && (
              <MessageBox
                developer={selectedDeveloper}
                onClose={handleCloseMessage}
              />
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

export default App;