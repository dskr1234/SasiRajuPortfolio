
import { Component } from "react";

import Cookies from "js-cookie";

import Header from "../header/header";

import "./home.css";

class Home extends Component {


  render() {
    const name = Cookies.get("user_name");
    return (
      <div>
        <Header />
        <h1 className="intro-head-1">
          Hi <span className="special"> {`${name}`} </span>! Nice to meet you!
        </h1>
        <div className="intro-container">
          <div>
            <img
              src="https://i.ibb.co/hWyS1fr/Profile.jpg"
              alt="web-logo"
              className="web-logo"
            />
          </div>
          <div className="last-align">
            <h1 className="special-one">Welcome to my Portfolio!!</h1>
            <h1 className="intro-head">
              I am Sasi Kumar Raju Dommaraju, a passionate and enthusiastic ,
              With a strong foundation in Web Technologies. I am eager to bring
              creative and innovative solutions to the digital world. I am
              constantly learning and adapting to the ever-evolving technologies
              in order to deliver engaging and user-friendly web experiences.
              Join me on this exciting journey as we shape the future of the web
              together.
            </h1>
          </div>
        </div>
        <p className="intro-para">
          Please navigate to particular section on the top, you want to know
          about!
        </p>
      </div>
    );
  }
}
export default Home;
