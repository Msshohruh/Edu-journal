import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

function Rootlayout() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container main-container">
          <section className="main-section">
            <Menu />
            <aside className="content">
              <Outlet />
            </aside>
          </section>
          <p className="main-signature">
            © Luhansk Taras Shevchenko National University, 2012 – 2022
          </p>
        </div>
      </main>
    </>
  );
}

export default Rootlayout;
