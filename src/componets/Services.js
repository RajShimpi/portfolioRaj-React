import React from 'react';
import '../App.css';

export default function Services() {
  return (
    <section id="services" style={{ marginTop: '80px' }} >
      <h1 className="text-center">Services</h1>

      <div className="container row m-auto justify-content-center">
        <div className="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/web.jpeg" className="card-img-top" alt="Web Developer" />
          <div className="card-body">
            <h5 className="card-title">Web Developer</h5>
            <p className="card-text">HTML describes the structure of a web page semantically and originally included cues for its appearance.</p>
          </div>
        </div>

        <div className="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/full.jpeg" className="card-img-top" alt="FullStack Developer" />
          <div className="card-body">
            <h5 className="card-title">FullStack Developer</h5>
            <p className="card-text">CSS describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
          </div>
        </div>

        <div className="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/soft.jpeg" className="card-img-top" alt="Software Developer" />
          <div className="card-body">
            <h5 className="card-title">Software Developer</h5>
            <p className="card-text">JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
