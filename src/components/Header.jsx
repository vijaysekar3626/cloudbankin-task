import React, { useState } from 'react';

function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Main Header */}
      <header className="header">
        <button className="menu-btn" onClick={toggleDrawer}>
          &#9776; {/* Menu icon */}
        </button>
        <div className="logo">
          <div className="logo-circle">CB</div>
          <span className="logo-text">Cloudbankin</span>
        </div>
        <div className="profile">
          <div className="profile-circle">GC</div>
          <span className="profile-name">Gregory Clark</span>
          <button className="profile-menu-btn">&#9662;</button>
        </div>
      </header>

      {/* Drawer Navigation */}
      <aside className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
      <div className="logo mob">
          <div className="logo-circle">CB</div>
          <span className="logo-text">Cloudbankin</span>
        </div>
        <nav className="drawer-nav">
          <a href="#" className="active" onClick={toggleDrawer}> Borrower Company Info</a>
          <a href="#" onClick={toggleDrawer}> Director Info</a>
          <a href="#" onClick={toggleDrawer}> Financial info</a>
        </nav>
      </aside>

      {/* Overlay */}
      {isDrawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
      
    </>
  );
}

export default Header;
