import React from 'react';
import '../App.css';
import './About.css';

export default function About() {
  return (
    <section id="about" style={{ marginTop: '80px' }} >
      <h1 className="text-center">About Me</h1>
      <div className="container mt-2 pt-2">
        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="card__collection clear-fix">
              <div className="cards cards--two">
                <img
                  src="img/raj.jpg"
                  className="img-responsive"
                  alt="Image"
                />
                <span className="cards--two__rect"></span>
                <span className="cards--two__tri"></span>
                <p>Raj Shimpi</p>
                <ul className="cards__list my-2">
                  <li><i className="fab fa-facebook-f"></i></li>
                  <li><i className="fab fa-twitter"></i></li>
                  <li><i className="fab fa-instagram"></i></li>
                  <li><i className="fab fa-linkedin-in"></i></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <p>
              My name is Raj Shimpi, originally hailing from the town of Nandurbar, I now reside in the bustling city of Pune.
              In 2023, I proudly graduated with a B.E in Computer Engineering from North Maharashtra University,Jalgaon. achieving an impressive 9.06 out of 10.
              I consider myself a quick learner and a diligent worker, always eager to expand my horizons.
            </p>
            <p>
              Outside the realm of academics and work, I find solace and joy in a few hobbies.
              I'm an avid reader, constantly seeking knowledge and inspiration from the pages of books.
              Music serves as a source of relaxation, and on sunny days, I love to grab a cricket bat and hit the pitch.
            </p>
            <p>
              In the short term, I aspire to secure a position in a reputable organization, where I can further cultivate my skills, acquire practical knowledge, and gain invaluable experience.
              Looking ahead, my long-term ambition is to become a leader in my chosen field, striving for excellence every step of the way.
            </p>
            <p>
              Thank you for taking the time to get to know me better.
              I'm excited about the future and the opportunities it holds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}