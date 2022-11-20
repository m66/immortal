import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Questions from "../Questions/Questions";
import AboutUs from "../../../pages/AboutUs/AboutUs";
import Contact from "../../../pages/Contact/Contact";
import Services from "../../../pages/Services/Services";
import CarouselWrapper from "../CarouselWrapper/CarouselWrapper";
import ProjectsPage from "../../../pages/ProjectsPage/ProjectsPage";

import styles from "./mainContent.module.scss";

function MainContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [bgColorState, setBgColorState] = useState(true);

  const handleScroll = () => {
    const firstChangeElem = document.getElementsByClassName(
      "carouselWrapper_mainText__NyS-O"
    )[0];

    if (window.scrollY >= 3500) setBgColorState(true);
    else if (window.scrollY >= 1500) setBgColorState(false);
    else if (window.scrollY >= firstChangeElem.scrollTop) setBgColorState(true);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={bgColorState ? styles.bcBlack : ""}>
      {loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.2"
          viewBox="0 0 1768 590"
          width="1768"
          height="590"
          class="svg replaced-svg"
        >
          <title>image</title>
          <defs>
            <image
              width="1312"
              height="240"
              id="img1"
              href="data:image/png;base64,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"
            ></image>
          </defs>
          <style></style>
          <use id="Background" href="#img1" x="228" y="176"></use>
        </svg>
      ) : (
        <>
          <div className={styles.fixedLogoWrapper}>
            <Link to='/' className={styles.fixedLogo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.2"
                viewBox="0 0 657 120"
                width="597"
                height="80"
                className="svg replaced-svg"
              >
                <title>image</title>
                <path
                  id="Layer"
                  className={styles.s0}
                  d="m2.1 35.1l13.9 5.7v79.1l-13.9-5.7z"
                ></path>
                <path
                  id="Layer"
                  className={styles.s0}
                  d="m107.3 35.1h13.9v84.8l-13.9-5.7v-61.5l-33.6 40.3-33.6-40.3v61.5l-13.9 5.7v-84.8h13.9l33.6 40.4z"
                ></path>
                <path
                  id="Layer"
                  className={styles.s0}
                  d="m212.5 35.1h13.9v84.8l-13.9-5.7v-61.5l-33.6 40.3-33.5-40.3v61.5l-13.9 5.7v-84.8h13.9l33.5 40.4z"
                ></path>
                <path
                  id="Layer"
                  fillRule="evenodd"
                  className={styles.s0}
                  d="m292.5 35q29.4 0 29.4 29.7v25.5q0 29.7-29.4 29.7h-27.9q-29.4 0-29.4-29.7v-25.5q0-29.7 29.4-29.7zm15.4 55.2v-25.5q0-18.4-18.2-18.4h-22.4q-18.2 0-18.2 18.4v25.5q0 18.4 18.2 18.4h22.4q18.2 0 18.2-18.4z"
                ></path>
                <path
                  id="Layer"
                  fillRule="evenodd"
                  className={styles.s0}
                  d="m385.5 83.1l30.4 36.8-21-5.7-25.7-31.1h-24.6v31.1l-13.9 5.7v-84.8h57.2q23.8 0 23.8 24.1 0 23.9-23.8 23.9zm-40.6-11h40.2q5.2 0 8.9-3.7 3.7-3.7 3.7-8.8 0-5.3-3.7-9-3.7-3.7-8.9-3.7h-40.2z"
                ></path>
                <path
                  id="Layer"
                  className={styles.s0}
                  d="m411.8 35.1h86.7l-5.5 11.3h-30.8v73.6h-14.1v-73.6h-30.7z"
                ></path>
                <path
                  id="Layer"
                  fillRule="evenodd"
                  className={styles.s0}
                  d="m537.3 35.1l39.2 84.8-16.5-5.7-6.6-14h-46.1l-6.4 14-16.6 5.7 39.1-84.8zm-25 53.7h36l-18-38.7z"
                ></path>
                <path
                  id="Layer"
                  className={styles.s0}
                  d="m650.5 108.6l5.6 11.3h-75.5v-84.8l13.9 5.7v67.8z"
                ></path>
                <path
                  id="Layer"
                  className={styles.s1}
                  d="m19 18c0 5-4.3 9-9.5 9-5.2 0-9.5-4-9.5-9 0-5 9.5-18 9.5-18 0 0 9.5 13 9.5 18z"
                ></path>
              </svg>
            </Link>
          </div>
          <div className={styles.fixedBtns}>
            <Link to="/services">
              <div
                className={[
                  styles.fixedTopLeftBtn,
                  bgColorState ? styles.fixedBtnWhite : styles.fixedBtnBlack,
                ].join(" ")}
              >
                <div>
                  <svg
                    // className={styles.fixedBtnIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="27"
                    fill="currentColor"
                    className="svg replaced-svg"
                  >
                    <path
                      d="M3.067 3.333a8.775 8.775 0 0 1 11.934-.443 8.775 8.775 0 0 1 12.39 12.358L16.91 25.765a2.7 2.7 0 0 1-3.67.137l-.15-.136L2.61 15.248a8.775 8.775 0 0 1 .458-11.915Zm1.91 1.909a6.075 6.075 0 0 0-.198 8.384l.197.207L15 23.857l7.16-7.16-4.773-4.772-1.431 1.43a4.05 4.05 0 1 1-5.73-5.726l2.838-2.84a6.076 6.076 0 0 0-7.88.256l-.208.197ZM16.431 9.06a1.35 1.35 0 0 1 1.91 0l5.726 5.726.956-.953a6.075 6.075 0 0 0-8.385-8.788l-.207.197-4.295 4.296a1.35 1.35 0 0 0-.106 1.791l.106.118a1.35 1.35 0 0 0 1.791.105l.118-.105 2.386-2.387Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span>Services</span>
              </div>
            </Link>

            <Link to="/projects">
              <div
                className={[
                  styles.fixedTopRightBtn,
                  bgColorState ? styles.fixedBtnWhite : styles.fixedBtnBlack,
                ].join(" ")}
              >
                <div className={styles.fixedBtnIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="25"
                    fill="currentColor"
                    className="svg replaced-svg"
                  >
                    <path
                      d="M1.85 9.8H.5V1.704C.5.956 1.114.35 1.84.35h24.32a1.337 1.337 0 0 1 1.34 1.354V9.8h-1.35v13.501a1.345 1.345 0 0 1-1.34 1.349H3.19a1.343 1.343 0 0 1-1.34-1.349V9.8Zm21.6 0H4.55v12.15h18.9V9.8ZM3.2 3.05V7.1h21.6V3.05H3.2Zm6.75 9.45h8.1v2.7h-8.1v-2.7Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span>Projects</span>
              </div>
            </Link>

            <Link to="/about-us">
              <div
                className={[
                  styles.fixedBottomLeftBtn,
                  bgColorState ? styles.fixedBtnWhite : styles.fixedBtnBlack,
                ].join(" ")}
              >
                <div className={styles.fixedBtnIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="27"
                    fill="currentColor"
                    className="svg replaced-svg"
                  >
                    <path
                      d="M14 12.15a6.75 6.75 0 0 1 6.75 6.75V27h-2.7v-8.1a4.05 4.05 0 0 0-3.812-4.043L14 14.85a4.05 4.05 0 0 0-4.043 3.812l-.007.238V27h-2.7v-8.1A6.75 6.75 0 0 1 14 12.15ZM5.225 16.2c.377 0 .743.044 1.094.127a8.029 8.029 0 0 0-.407 2.126L5.9 18.9v.116a2.016 2.016 0 0 0-.48-.108l-.195-.008a2.025 2.025 0 0 0-2.016 1.83l-.009.195V27H.5v-6.075A4.725 4.725 0 0 1 5.225 16.2Zm17.55 0a4.725 4.725 0 0 1 4.725 4.725V27h-2.7v-6.075a2.025 2.025 0 0 0-1.83-2.016l-.195-.009c-.236 0-.463.04-.675.115V18.9c0-.9-.146-1.763-.417-2.57.35-.085.715-.13 1.092-.13ZM5.225 8.1a3.375 3.375 0 1 1 0 6.75 3.375 3.375 0 0 1 0-6.75Zm17.55 0a3.375 3.375 0 1 1 0 6.75 3.375 3.375 0 0 1 0-6.75Zm-17.55 2.7a.675.675 0 1 0 0 1.35.675.675 0 0 0 0-1.35Zm17.55 0a.675.675 0 1 0 0 1.35.675.675 0 0 0 0-1.35ZM14 0a5.4 5.4 0 1 1 0 10.8A5.4 5.4 0 0 1 14 0Zm0 2.7a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span>About Us</span>
              </div>
            </Link>

            <Link to="/contact">
              <div
                className={[
                  styles.fixedBottomRightBtn,
                  bgColorState ? styles.fixedBtnWhite : styles.fixedBtnBlack,
                ].join(" ")}
              >
                <div className={styles.fixedBtnIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="27"
                    fill="currentColor"
                    className="svg replaced-svg"
                  >
                    <path
                      d="M7.643 25.412.5 27l1.588-7.143A13.44 13.44 0 0 1 .5 13.5C.5 6.044 6.544 0 14 0s13.5 6.044 13.5 13.5S21.456 27 14 27a13.441 13.441 0 0 1-6.357-1.588Zm.391-2.852.882.472A10.739 10.739 0 0 0 14 24.3 10.8 10.8 0 1 0 3.2 13.5c0 1.8.439 3.534 1.269 5.084l.471.882-.884 3.978 3.978-.884ZM7.25 13.5h2.7a4.05 4.05 0 0 0 8.1 0h2.7a6.75 6.75 0 1 1-13.5 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span>Contact Us</span>
              </div>
            </Link>
          </div>

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <CarouselWrapper />
                    <Projects />
                    <Questions />
                  </>
                }
              />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>NOT FOUD PAGE</h1>} />
            </Routes>
        </>
      )}
    </div>
  );
}

export default MainContent;
