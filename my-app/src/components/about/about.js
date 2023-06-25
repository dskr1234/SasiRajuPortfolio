import Header from "../header/header";

import "./about.css";

const About = () => (
  <div>
    <Header />
    <h1 className="about-head">About me!</h1>;
    <div className="about-container">
      <h1 className="details-head">Personal Details:</h1>
      <div className="align">
        <p className="details-para">Name: Sasi Kumar Raju Dommraju</p>
        <p className="details-para">E-Mail: dskr2511@gmail.com</p>
        <p className="details-para">Ph.No: +91 9121393540</p>
        <p className="details-para">Gender: Male</p>
      </div>
      <h1 className="details-head">Graduation Details:</h1>
      <div className="align">
        <p className="details-para">
          College: Sree Vidyanikethan Degree College ,Tirupati.
        </p>
        <p className="details-para">Degree: Bachelor of science (B.sc)</p>
        <p className="details-para">Stream: Computer Science</p>
        <p className="details-para">Percentage: 80%</p>
        <p className="details-para">Year of Passing: 2022</p>
      </div>
      <h1 className="details-head">Course Details:</h1>
      <div className="align">
        <p className="details-para">Institution: Nxtwave Technologies.</p>
        <p className="details-para">Program: MERN Stack Development</p>
        <p className="details-para">Started Date: 18/08/2022</p>
        <p className="details-para">Course-Status: Ongoing</p>
        <p className="details-para">Mode of Teaching: Online</p>
      </div>
      <h1 className="details-head">Social Media Links:</h1>
      <div className="align">
        <p className="details-para">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sasi-kumar-raju-dommaraju"
            target="_blank"
            rel="noreferrer"
          >
            Sasi Kumar Raju Dommaraju
          </a>
        </p>
        <p className="details-para">
          GitHub:{" "}
          <a
            href="https://github.com/dskr1234"
            target="_blank"
            rel="noreferrer"
          >
            dskr1234
          </a>
        </p>
        <p className="details-para">
          Instagram:{" "}
          <a
            href="https://instagram.com/sasikumarraju_1?igshid=NGExMmI2YTkyZg=="
            target="_blank"
            rel="noreferrer"
          >
            SasiKumarRaju_1
          </a>
        </p>
      </div>
    </div>
    <p className="key-field">
      Please navigate to particular section on the top, you want to know about!
    </p>
  </div>
);

export default About;
