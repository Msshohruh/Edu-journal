import React from "react";

function Home() {
  return (
    <>
      <h2 className="content-title">Home</h2>
      <ul className="home-book-list">
        <li className="home-book-list-item">
          <img className="item-img" src="./images/img1.jpg" alt="" />
          <div className="item-text-wrapper">
            Journal Education and Pedagogical Sciences № 1 (168) 2018 was put
            into print by the decision of Academic Council of State Institution
            Luhansk Taras Shevchenko National University (record of proceedings
            № 11, 25.05.2018)
            <a
              className="item-link"
              href="http://pedagogicaljournal.luguniv.edu.ua/archive/2018/2018_No1(168).pdf"
              target={"_blank"}
              rel="noreferrer"
            >
              View...{">>"}
            </a>
          </div>
        </li>
        <li className="home-book-list-item">
          <img className="item-img" src="./images/img1.jpg" alt="" />
          <div className="item-text-wrapper">
            Journal Education and Pedagogical Sciences № 1 (168) 2018 was put
            into print by the decision of Academic Council of State Institution
            Luhansk Taras Shevchenko National University (record of proceedings
            № 11, 25.05.2018)
            <a
              className="item-link"
              href="http://pedagogicaljournal.luguniv.edu.ua/archive/2018/2018_No1(168).pdf"
              target={"_blank"}
              rel="noreferrer"
            >
              View...{">>"}
            </a>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Home;
