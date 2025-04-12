import React, { useEffect, useState } from 'react';
import './WelcomePopup.css'; // isme ab naya CSS hoga kite wala

const WelcomePopup = ({ user }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (user?.name) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 4500);
      return () => clearTimeout(timer);
    }
  }, [user]);

  if (!visible) return null;

  return (
    <div className="kite-container">
      <div className="kite">
        🪁
        <div className="kite-message">
          Hey <strong>{user.name}</strong>, welcome to <span>ShoppyGlobe</span>!
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
