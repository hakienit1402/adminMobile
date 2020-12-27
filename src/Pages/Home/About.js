import React from "react";
import { Image, Divider, Row,Col } from "antd";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
const MyTitleMessage = styled.h1`
  width: 100%;
  text-align: center;
   strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
      padding: 10px 0px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
      padding: 10px 0px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Ha Ngoc Kien</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Web Developer", "MERN Stack Developer","Tester"],
              autoStart: true,
              loop: true,
              delay: 100
            }}
          />
        </div>

        <p style={{color:'red',marginBottom:0,marginTop:10 }}>Sign In to use my app </p>
        <p style={{color:'red',marginBottom:0,marginTop:10 }}> Love you ! </p>
      </div>
    </div>
  </MyTitleMessage>
);
export const About = () => {
  return (
    <div className="container">
        <Row>
        <TitleMessage/>
        </Row>
    </div>
  );
};
