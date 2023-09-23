import React, { useState, useEffect } from 'react';

export default function Home() {
  const [displayText, setDisplayText] = useState("Web Developer");
  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setDisplayText("Software Developer");
      }, 4000);
      setTimeout(() => {
        setDisplayText("Full Stack Developer");
      }, 8000);
    };
    textLoad();
  }, []);

  return (
    <section id="#home">
      <div className="main bgimage row m-auto justify-content-left">
        <div className="infocontainer m-auto justify-content-left">
          <div className="devinfo">
            <div className="hello" style={{ color: 'rgb(255,255,255)' }}>Hi, it's me</div>
            <div className="name" style={{ color: 'rgb(255,255,255)' }}>Raj Shimpi</div>
            <div className="about" style={{ color: 'rgb(255,255,255)' }}>and</div>
            <div className="about ">
              <div className="h-text">
                <div className="h-animate">
                  <span className="text first-text">I'm a&nbsp;</span>
                  <span className="text sec-text">{displayText}</span>
                </div>
              </div>
            </div>
            <div className="moreabout" style={{ color: 'rgb(255,255,255)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
