import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import EditorialStuff from "../pages/EditorialStuff";
import PubEthics from "../pages/PubEthics";
import Requirements from "../pages/Requirements";
import Archieve from "../pages/Archive";
import Subscription from "../pages/Subscription";
import Contacts from "../pages/Contacts";
import EditorsColumn from "../pages/EditorsColumn";
import Partners from "../pages/Partners";
import Announcements from "../pages/Announcements";

function Main() {
  return (
    <main className="main">
      <div className="container main-container">
        <section className="main-section">
          <ul className="menu-panel">
            <Link to="/" className="menu-panel-item">
              Home
            </Link>
            <Link to="/about" className="menu-panel-item">
              About the Journal
            </Link>
            <Link to="/editorial-stuff" className="menu-panel-item">
              Editorial Staff
            </Link>
            <Link to="/pub-ethics" className="menu-panel-item">
              Journal Publication Ethics
            </Link>
            <Link to="/requirements" className="menu-panel-item">
              Requirements
            </Link>
            <Link to="/archieve" className="menu-panel-item">
              Archive
            </Link>
            <Link to="/subscription" className="menu-panel-item">
              Subscription
            </Link>
            <Link to="/contacts" className="menu-panel-item">
              Contacts
            </Link>
            <Link to="/editors-column" className="menu-panel-item">
              Editor's Column
            </Link>
            <Link to="/partners" className="menu-panel-item">
              Partners
            </Link>
            <Link to="/announcements" className="menu-panel-item">
              Announcements
            </Link>
          </ul>
          <aside className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/editorial-stuff"
                element={<EditorialStuff />}
              ></Route>
              <Route path="/pub-ethics" element={<PubEthics />}></Route>
              <Route path="/requirements" element={<Requirements />}></Route>
              <Route path="/archieve" element={<Archieve />}></Route>
              <Route path="/subscription" element={<Subscription />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/editors-column" element={<EditorsColumn />}></Route>
              <Route path="/partners" element={<Partners />}></Route>
              <Route path="/announcements" element={<Announcements />}></Route>
            </Routes>
          </aside>
        </section>
        <p className="main-signature">
          © Luhansk Taras Shevchenko National University, 2012 – 2014
        </p>
      </div>
    </main>
  );
}

export default Main;
