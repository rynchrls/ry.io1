import React, { useEffect } from "react";
import "../App.css";
import { useState } from "react";
import darkMode from '../../public/img/darkmode.png'
import lightMode from '../../public/img/lightmode.png'

function Header({ changeSkin, setChangeSkin }) {
  const [openWindow, setOpenWindow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [dropDown, setDropDown] = useState(true);

  const toAbout = () => {
    const about = document.querySelector(".about-me");
    window.scrollTo({
      top: about?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };



  const topProject = () => {
    const project = document.querySelector(".project");
    window.scrollTo({
      top: project?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };



  useEffect(() => {
    var oldScrollY = window.scrollY;
    window.onscroll = (e) => {
      if (oldScrollY < window.scrollY) {
        setDropDown(false);
      } else {
        setDropDown(true);
      }
      oldScrollY = window.scrollY;
    };
  }, []);

  return (
    <header
      className={`${dropDown ? "header-active" : ""} ${
        changeSkin.isLight ? "header-light" : ""
      }`}
    >
      <a href=""><div className="nav">
        <div>{"<"}</div>
        <h2>Ry.io1</h2>
        <div>{"/>"}</div>
      </div>
      </a>
      {window.innerWidth <= "800" ? (
        <div
          className={`show-down-menu ${showMenu ? "show-menu" : ""} ${
            changeSkin.isLight ? "show-down-menu-light" : ""
          }`}
        >
          <h5
            className={`${changeSkin.isLight ? "h5-active" : ""} h`} id="h"
          >
            <div>{"<"}</div>
            Home
            <div>{"/>"}</div>
          </h5>
          <h5 className={`${changeSkin.isLight ? "h5-active" : ""} p`} id="p" > 
            <div>{"<"}</div>
            Project
            <div>{"/>"}</div>
          </h5>
          <h5
            className={`${changeSkin.isLight ? "h5-active" : ""} a`} id="a"
            onClick={toAbout}
          >
            <div>{"<"}</div>
            About
            <div>{"/>"}</div>
          </h5>
          <h5 className={`${changeSkin.isLight ? "h5-active" : ""} c`} id="c" >
            <div>{"<"}</div>
            Contact
            <div>{"/>"}</div>
          </h5>
        </div>
      ) : (
        ""
      )}
      <div className="nav-left">
        {window.innerWidth <= "800" ? (
          <div
            className={`bar-menu ${changeSkin.isLight ? "bar-menu-light" : ""}`}
          >
            <svg
              onClick={() => setShowMenu(!showMenu)}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
            </svg>
          </div>
        ) : (
          ""
        )}
        {window.innerWidth >= "800" ? (
          <div className="nav-left-wrapper">
            <h5
              className={`${changeSkin.isLight ? "h5-active" : ""}`}
              style={{ color: changeSkin.isDark ? "white" : "#3F2305" }}
            >
              <div>{"<"}</div>
              Home
              <div>{"/>"}</div>
            </h5>
            {/* <h5
              className={`${changeSkin.isLight ? "h5-active" : ""}`}
              onClick={topProject}
            >
              <div>{"<"}</div>
              Project
              <div>{"/>"}</div>
            </h5>
            <h5
              className={`${changeSkin.isLight ? "h5-active" : ""}`}
              onClick={toAbout}
            >
              <div>{"<"}</div>
              About
              <div>{"/>"}</div>
            </h5>
            <h5 className={`${changeSkin.isLight ? "h5-active" : ""}`}>
              <div>{"<"}</div>
              Contact
              <div>{"/>"}</div>
            </h5> */}
          </div>
        ) : (
          ""
        )}
                <div className="open-window">
          {openWindow === false ? (
            <div className="change-skin" onClick={() => setOpenWindow(true)}>
              Customize
            </div>
          ) : (
            <div className="window window-open">
              <div className="close" onClick={() => setOpenWindow(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                </svg>
              </div>
              <div className={`dark ${changeSkin.isDark ? "dark-border" : ""}`}>
                <img
                  onClick={() =>
                    setChangeSkin((prev) => ({
                      isDark: true,
                      isLight: false,
                    }))
                  }
                  src={darkMode}
                />
              </div>
              <div
                className={`light ${changeSkin.isLight ? "light-border" : ""}`}
              >
                <img
                  onClick={() =>
                    setChangeSkin((prev) => ({
                      isDark: false,
                      isLight: true,
                    }))
                  }
                  src={lightMode}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
