import React, { useState } from "react";
import { useInView, motion, useAnimation, delay } from "framer-motion";
import { Reveal, Reveal2 } from "./Reveal";
import { useRef, useEffect, useReducer, useCallback } from "react";
import sd from '/websiteImage/school-dashboard.png'
import movie from '/websiteImage/movie.png'
import ecoms from '/websiteImage/ecoms.png'
import todo from '/websiteImage/to-do.png'
import commission from '/websiteImage/commission.png'
import eskwela from '/public/infoImage/eskwela.png'
import pelicula from '/public/infoImage/pelicula.png'
import commerce from '/public/infoImage/commerce.png'
import todo2 from '/public/infoImage/todo.png'
import comms from '/public/infoImage/comms.png'



const ProjectsInformation = [
  {
      id: 1,
      img: `${sd}`,
      title: 'ESKWELA',
      details: 'A school administration website can be set up to meet the needs of each institution in a personalized way. Thus, different accesses are created depending on the type of user (students, teachers, family, administration staff) to obtain specific functions according to the assigned role. In short, it provides an enclave for integral academic management. It is the best solution to have all the necessary technological tools in education in one place. ',
      reactjs: true,
      link: 'https://rynchrls.github.io/admin-dashboard/',
      github: 'https://github.com/rynchrls/admin-dashboard',
      class: 'proj1',
      img2: `${eskwela}`,
      alt: 'eskwela'

  },
  {
      id: 2,
      img: `${movie}`,
      title: 'PELICULA',
      details: 'PELICULA was made to entertain audiences. In order to get visitors’ attention and encourage them to see the movie, PELICULA give them what they are looking for and provide some entertainment at the same time. This website make it easy to take a couple minutes and watch a few trailers before deciding which movie to see.',
      reactjs: false,
      class: 'proj5',
      img2: `${pelicula}`,
      alt: 'pelicula'
  },
  {
      id: 3,
      img: `${ecoms}`,
      title: 'ECOMMERCE',
      details: 'ECOMMERCE allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.',
      reactjs: false,
      github: 'https://github.com/rynchrls/ecommerce.guthub.io',
      class: 'proj3',
      img2: `${commerce}`,
      alt: 'ecommerce'
  },
  {
      id: 4,
      img: `${todo}`,
      title: 'TODOLIST',
      details: 'This website I created has the authentication for each user, so that you can store all the things that you have done throughout the day,week,month and year. It allows user to freely assigned task for themselves to organize the time and effort for certain things, this application could help you to manage your time and be more productive within the said day.',
      reactjs: false,
      github: 'https://github.com/rynchrls/Todolist',
      class: 'proj4',
      img2: `${todo2}`,
      alt: 'todolist'
  },
  {
      id: 5,
      img: `${commission}`,
      title: 'COMMISION',
      details: 'This was my first commission as a front-end web developer, I created this enrollment and log in form for my client having trouble of creating this dynamic webpages, with the help of my skills and experienced I managed to satisfy my client’s wants. And thankfully we had the great deal for that, I’m still open for more commissions just get in touch with me.',
      reactjs: false,
      class: 'proj2',
      img2: `${comms}`,
      alt: 'commission'
  }

]







function Project({proj, changeSkin}) {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const line = useAnimation();
  const image = useAnimation();
  const [openDetails, setOpenDetails] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    if (isInview) {
      line.start("long");
      image.start("end");
    }
  }, [isInview]);

  const clickToOpen = useCallback((id) => {
    setOpenDetails(true);
    // let dataGathered;
    ProjectsInformation.map((pi) => {
      if (pi.id === id) {
        setData(pi);
      }
    });
  });

  const toTop = () => {
    const element = document.querySelector(".hero");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="project" ref={proj}>
      <div className="section-title">
        <h1>Project</h1>
        <h4>Responsive Web Application</h4>
      </div>
      {window.innerWidth > "700" ? (
        <div className="project-wrapper" id="wrapper">
          <span className={`web ${openDetails ? "hidden" : ""}`}>WEB</span>

          {ProjectsInformation.map((proj) => {
            return (
              <div
                className={`${proj.class} ${openDetails ? "hidden" : ""}`}
                ref={ref}
                key={proj.id}
              >
                <div className="proj1-wrapper">
                  <motion.img
                    variants={{
                      start: { opacity: 0 },
                      end: { opacity: 1 },
                    }}
                    initial="start"
                    animate={image}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    src={proj.img}
                    alt={proj.alt}
                    onClick={() => {
                      clickToOpen(proj.id, proj);
                    }}
                  />
                  <div className="proj-title-wrapper">
                    <Reveal>
                      <h1>{proj.title}</h1>
                    </Reveal>
                    <motion.div
                      variants={{
                        short: { width: "0%" },
                        long: { width: "100%" },
                      }}
                      initial="short"
                      animate={line}
                      transition={{ duration: 0.7, delay: 0.6 }}
                      className="line"
                    ></motion.div>
                    <Reveal2>
                      <p>click {">"}</p>
                    </Reveal2>
                  </div>
                </div>
              </div>
            );
          })}
          <section
            className={`proj-details ${openDetails ? "active-details" : ""}`}
          >
            <div className="proj-details-wrapper">
              <div className="close-section">
                <svg
                  onClick={() => setOpenDetails(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path>
                  <path d="m11 16 5-4-5-4v3.001H3v2h8z"></path>
                </svg>
              </div>
              <div className="detail-img">
                <img
                  src={data.img2 ? data.img2 : ""}
                  alt={data.alt ? data.alt : ""}
                />
              </div>
              <div className="proj-details-container">
                <div className="proj-details-left">
                  <h1>{data.title ? data.title : ""}</h1>
                  <p>{data.details ? data.details : ""}</p>
                  <div className="link-wrapper">
                    {data.github ? (
                      <a
                        href={data.github ? data.github : ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="github"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                          ></path>
                        </svg>
                      </a>
                    ) : (
                      ""
                    )}
                    {data.link ? (
                      <a
                        href={data.link ? data.link : ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="link-to-website"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                          <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                        </svg>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="proj-details-right">
                  <div className="tech-stack">
                    <h2>Tech used:</h2>
                    <div className="tech-stack-wrapper">
                      <div className="html-wrapper">
                        <svg
                          className="html"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path>
                        </svg>
                      </div>
                      <div className="css-wrapper">
                        <svg
                          className="css"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path>
                        </svg>
                      </div>
                      <div className="js-wrapper">
                        <svg
                          className="js"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path>
                        </svg>
                      </div>
                      {data.reactjs ? (
                        <div className="react-wrapper">
                          <svg
                            className="react"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="11.245" r="1.785"></circle>
                            <path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path>
                            <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path>
                            <path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path>
                            <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path>
                          </svg>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
      {window.innerWidth <= "700" ? (
        <div className="project-wrapper2" id="wrapper">
          <span className={`web ${openDetails ? "hidden" : ""}`}>WEB</span>

          {ProjectsInformation.map((proj) => {
            return (
              <div
                className={`for-flex ${openDetails ? "hidden" : ""}`}
                ref={ref}
                key={proj.id}
              >
                <div className="proj1-wrapper">
                  <motion.img
                    variants={{
                      start: { opacity: 0 },
                      end: { opacity: 1 },
                    }}
                    initial="start"
                    animate={image}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    src={proj.img}
                    alt={proj.alt}
                    onClick={() => {
                      clickToOpen(proj.id, proj);
                    }}
                  />
                  <div className="proj-title-wrapper">
                    <Reveal>
                      <h1>{proj.title}</h1>
                    </Reveal>
                    <motion.div
                      variants={{
                        short: { width: "0%" },
                        long: { width: "100%" },
                      }}
                      initial="short"
                      animate={line}
                      transition={{ duration: 0.7, delay: 0.6 }}
                      className="line"
                    ></motion.div>
                    <Reveal2>
                      <p>click {">"}</p>
                    </Reveal2>
                  </div>
                </div>
              </div>
            );
          })}
          <section
            className={`proj-details ${openDetails ? "active-details" : ""}`}
          >
            <div className="proj-details-wrapper">
              <div className="close-section">
                <svg
                  onClick={() => setOpenDetails(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path>
                  <path d="m11 16 5-4-5-4v3.001H3v2h8z"></path>
                </svg>
              </div>
              <div className="detail-img">
                <img
                  src={data.img2 ? data.img2 : ""}
                  alt={data.alt ? data.alt : ""}
                />
              </div>
              <div className="proj-details-container">
                <div className="proj-details-left">
                  <h1>{data.title ? data.title : ""}</h1>
                  <p>{data.details ? data.details : ""}</p>
                  <div className="link-wrapper">
                    {data.github ? (
                      <a
                        href={data.github ? data.github : ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="github"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                          ></path>
                        </svg>
                      </a>
                    ) : (
                      ""
                    )}
                    {data.link ? (
                      <a
                        href={data.link ? data.link : ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="link-to-website"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                          <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                        </svg>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="proj-details-right">
                  <div className="tech-stack">
                    <h2>Tech used:</h2>
                    <div className="tech-stack-wrapper">
                      <div className="html-wrapper">
                        <svg
                          className="html"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path>
                        </svg>
                      </div>
                      <div className="css-wrapper">
                        <svg
                          className="css"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path>
                        </svg>
                      </div>
                      <div className="js-wrapper">
                        <svg
                          className="js"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path>
                        </svg>
                      </div>
                      {data.reactjs ? (
                        <div className="react-wrapper">
                          <svg
                            className="react"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="11.245" r="1.785"></circle>
                            <path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path>
                            <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path>
                            <path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path>
                            <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path>
                          </svg>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
      <div className={`back-to-top ${openDetails ? "hidden" : ""}`}>
        <h6 onClick={toTop}>{`Home />`}</h6>
      </div>
    </section>
  );
}

export default Project;

