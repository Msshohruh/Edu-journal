import React from "react";
import { Link } from "react-router-dom";

function Archive() {
  return (
    <>
      <h2 className="content-title">Archive</h2>

      <div className="archieve-content">
        <div className="archieve-content">
          <fieldset>
            <legend>
              <b>2022</b>
            </legend>
            <p>
              <a href="./files/EAPS9.pdf" target={"_blank"} rel="noreferrer">
                №1 (169)
              </a>
            </p>
          </fieldset>
          <fieldset>
            <legend>
              <b>2018</b>
            </legend>
            <p>
              <a href="./files/168.pdf" target={"_blank"} rel="noreferrer">
                №1 (168)
              </a>
            </p>
          </fieldset>

          <fieldset>
            <legend>
              <b>2017</b>
            </legend>
            <p>
              <a href="./files/166.pdf" target={"_blank"} rel="noreferrer">
                №1 (166)
              </a>
            </p>

            <p>
              <a href="./files/167.pdf" target={"_blank"} rel="noreferrer">
                №2 (167)
              </a>
            </p>
          </fieldset>

          <fieldset>
            <legend>
              <b>2016</b>
            </legend>
            <p>
              <a href="./files/164.pdf" target={"_blank"} rel="noreferrer">
                №1 (164)
              </a>
            </p>

            <p>
              <a href="./files/165.pdf" target={"_blank"} rel="noreferrer">
                №2 (165)
              </a>
            </p>
          </fieldset>

          <fieldset>
            <legend>
              <b>2014</b>
            </legend>
            <p>
              <Link to="/archieve/2014/1">№1 (162)</Link>
            </p>

            <p>
              <Link to="/archieve/2014/2">№2 (163)</Link>
            </p>
          </fieldset>

          <fieldset>
            <legend>
              <b>2013</b>
            </legend>
            <p>
              <Link to="/archieve/2013/1">№1 (156)</Link>
            </p>

            <p>
              <Link to="/archieve/2013/2">№2 (157)</Link>
            </p>

            <p>
              <Link to="/archieve/2013/3">№3 (158)</Link>
            </p>

            <p>
              <Link to="/archieve/2013/4">№4 (159)</Link>
            </p>

            <p>
              <Link to="/archieve/2013/5">№5 - 6 (160 - 161)</Link>
            </p>
          </fieldset>

          {/* <fieldset>
            <legend>
              <b>2012</b>
            </legend>
            <p>
              <a href="#">№1 (150)</a>
            </p>

            <p>
              <a href="#">№2 (151)</a>
            </p>

            <p>
              <a href="#">№3 (152)</a>
            </p>

            <p>
              <a href="#">№4 (153)</a>
            </p>

            <p>
              <a href="#">№5 (154)</a>
            </p>

            <p>
              <a href="#">№6 (155)</a>
            </p>
          </fieldset> */}
        </div>
      </div>
    </>
  );
}

export default Archive;
