import React from "react";

function Partners() {
  return (
    <>
      <h2 className="content-title">Partners</h2>

      <h3>HAYD THE PROGRESSIVE</h3>
      <p>
        <a
          target={"_blank"}
          href="https://haydnkons.at/erasmus/haydn-the-progressive/"
          rel="noreferrer"
        >
          www.haydntheprogressive.at
        </a>
        , &nbsp;
        <a
          target={"_blank"}
          href="https://haydnkons.at/wp-content/uploads/2018/03/liszt_the_progressive_2011_klein.pdf"
          rel="noreferrer"
        >
          www.liszttheprogressive.at
        </a>
      </p>

      <div className="partners-list">
        <a
          className="partners-list-item"
          href="https://haydnkons.at/?id=62&L=1"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src="./images/hayd1.jpg" alt="hayd1" />
        </a>

        <a
          className="partners-list-item"
          href="https://haydnkons.at/?id=37&L=1"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src="./images/haydn2.jpg" alt="hayd1" />
        </a>

        <a
          className="partners-list-item"
          href="https://haydnkons.at/?id=38&L=1"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src="./images/haydn3.jpg" alt="hayd1" />
        </a>
      </div>
    </>
  );
}

export default Partners;
