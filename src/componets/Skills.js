import React from 'react'
import '../App.css';

export default function Skills() {
  return (
    <section className='Container' style={{ marginTop: '80px' }} id="skills">
      <h1 class="text-center">Skills & Languages</h1>
      <div class="container row m-auto justify-content-center">
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/Html.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">Html</h5>
            <p class="card-text">HTML describes the structure of a web page semantically and originally included cues for its appearance.</p>
          </div>
        </div>
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/css.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">CSS</h5>
            <p class="card-text">CSS describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
          </div>
        </div>
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/JavaScript.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">JavaScript</h5>
            <p class="card-text">JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.</p>
          </div>
        </div>
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/React.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">React JS</h5>
            <p class="card-text">React is a free and open-source front-end JavaScript library for building user interfaces based on components.</p>
          </div>
        </div>
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/java.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">Java</h5>
            <p class="card-text">Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today..</p>
          </div>
        </div>
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/c.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">C</h5>
            <p class="card-text">C is a procedural language that provides no support for objects and classes.</p>
          </div>
        </div>
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/cpp.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">C++</h5>
            <p class="card-text">C++ is an object-oriented programming language which gives a clear structure to programs
              and allows code to be reused, lowering development costs.</p>
          </div>
        </div>
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/bootstrap.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">Bootstrap</h5>
            <p class="card-text">Bootstrap is a free, open source front-end development framework for the creation of
              websites and web apps</p>
          </div>
        </div>
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/mysql.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">MySQL</h5>
            <p class="card-text">MySQL is a database management system.To add, access, and process data stored in a computer database, you need a database management system such as MySQL Server.</p>
          </div>
        </div>
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/mongodb.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">MongoDB</h5>
            <p class="card-text">MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.</p>
          </div>
        </div>
        <div class="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src="/img/git.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 id="first" class="card-title">Git</h5>
            <p class="card-text">Git is a DevOps tool used for source code management. It is a free and open-source version control system used to handle small to very large projects efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
