import React from 'react';
import '../App.css';

export default function Contact() {
    return (
        <section id="contact" style={{marginTop:'80px'}} >
            <h1 className="text-center">Contact Me</h1>
            <div className="container mt-3 contactContent">
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <div style={{ overflow: 'hidden', resize: 'none', maxWidth: '100%', width: '500px', height: '500px' }}>
                            <div id="canvas-for-googlemap" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
                                <iframe
                                    style={{ height: '100%', width: '100%', border: '0' }}
                                    frameBorder="0"
                                    src="https://www.google.com/maps/embed/v1/search?q=Yogiraj+Complex,+Sasane+Nagar+Road,+Kalepadal,+Sasane+Nagar,+Hadapsar,+Pune,+Maharashtra,+India&key=YOUR_API_KEY"
                                ></iframe>
                            </div>
                            <a className="google-maps-html" href="https://www.bootstrapskins.com/themes" id="make-map-data">premium bootstrap themes</a>
                            <style>
                                {`
                                    #canvas-for-googlemap img {
                                        max-width: none !important;
                                        background: none !important;
                                        font-size: inherit;
                                        font-weight: inherit;
                                    }
                                `}
                            </style>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <form>
                            <input type="text" className="form-control form-control-lg" placeholder="Name" />
                            <input type="email" className="form-control mt-3" placeholder="Email" />
                            <input type="text" className="form-control mt-3" placeholder="Subject" />
                            <div className="mb-3 mt-3">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    id="comment"
                                    name="text"
                                    placeholder="Project Details"
                                ></textarea>
                            </div>
                        </form>
                        <button type="button" className="btn btn-success mt-3">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
