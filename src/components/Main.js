import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

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

// Archieve pages
import Journal2014one from "../pages/archieve-pages/Journal2014one";
import Journal2014two from "../pages/archieve-pages/Journal2014two";
import Journal2013one from "../pages/archieve-pages/Journal2013one";
import Journal2013two from "../pages/archieve-pages/Journal2013two";
import Journal2013three from "../pages/archieve-pages/Journal2013three";
import Journal2013four from "../pages/archieve-pages/Journal2013four";
import Journal2013five from "../pages/archieve-pages/Journal2013five";

function Main() {
  return (
    <main className="main">
      <div className="container main-container">
        <section className="main-section">
          <ul className="menu-panel">
            <NavLink to="/" className="menu-panel-item">
              Home
            </NavLink>

            <NavLink to="/aboutwasd" className="menu-panel-item">
              About the Journal
            </NavLink>
            <NavLink to="editorial-stuff" className="menu-panel-item">
              Editorial Staff
            </NavLink>
            <NavLink to="pub-ethics" className="menu-panel-item">
              Journal Publication Ethics
            </NavLink>
            <NavLink to="requirements" className="menu-panel-item">
              Requirements
            </NavLink>
            <NavLink to="/archieve" className="menu-panel-item">
              Archive
            </NavLink>
            <NavLink to="/subscription" className="menu-panel-item">
              Subscription
            </NavLink>
            <NavLink to="/contacts" className="menu-panel-item">
              Contacts
            </NavLink>
            <NavLink to="/editors-column" className="menu-panel-item">
              Editor's Column
            </NavLink>
            <NavLink to="/partners" className="menu-panel-item">
              Partners
            </NavLink>
            <NavLink to="/announcements" className="menu-panel-item">
              Announcements
            </NavLink>
          </ul>
          <aside className="content">
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/editorial-stuff"
                element={<EditorialStuff />}
              ></Route>
              <Route path="/pub-ethics" element={<PubEthics />}></Route>
              <Route path="/requirements" element={<Requirements />}></Route>
              <Route path="/archieve" element={<Archieve />}></Route>
              <Route
                path="/archieve/2014/1"
                element={<Journal2014one />}
              ></Route>
              <Route
                path="/archieve/2014/2"
                element={<Journal2014two />}
              ></Route>
              <Route
                path="/archieve/2013/1"
                element={<Journal2013one />}
              ></Route>
              <Route
                path="/archieve/2013/2"
                element={<Journal2013two />}
              ></Route>
              <Route
                path="/archieve/2013/3"
                element={<Journal2013three />}
              ></Route>
              <Route
                path="/archieve/2013/4"
                element={<Journal2013four />}
              ></Route>
              <Route
                path="/archieve/2013/5"
                element={<Journal2013five />}
              ></Route>
              <Route path="/subscription" element={<Subscription />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/editors-column" element={<EditorsColumn />}></Route>
              <Route path="/partners" element={<Partners />}></Route>
              <Route path="/announcements" element={<Announcements />}></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </aside>
        </section>
        <p className="main-signature">
          © Luhansk Taras Shevchenko National University, 2012 – 2022
        </p>
      </div>
    </main>
  );
}

export default Main;
