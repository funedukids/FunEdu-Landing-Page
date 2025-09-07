import React, { useState } from "react";

import "./Home.css"
import heroimg from "../../assets/childtoy.jpg";
import img2 from "../../assets/imgsection2.png";
import icon from "../../assets/icon.png";
import icon1 from "../../assets/icon(1).png";
import icon2 from "../../assets/icon(2).png";
import icon3 from "../../assets/icon(3).png";
import whyimage from "../../assets/whyimage.png";
import Footer from "../../Components/Footer/Footer";

function Home() {
 const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // send email to backend or API
  };

    return(
        <div className="landingPage">
            <div className="container">
                <section className="heroSection py-1">
                    <div className="hero w-100 d-flex justify-between row ">
                        <div className="herotext col-lg-6">
                            <div className="herotext1">
                                <h1 className="display-4 fw-semibold mb-4">Learning made fun, <br /> safe, easy and <br />offline-first </h1>
                                <p className="lead fw-medium mb-4">We’re building an educational app for kids that works anywhere, anytime — no internet required.</p>
                                <button className="btn btn-primary btn-lg">Join the Waitlist</button>
                            </div>
                        </div>
                        <div className="hero col-lg-6 d-flex justify-content-between justify-content-lg-end mt-4 mt-lg-0">
                        <img
                        src={heroimg}
                      
                        alt="A picture of toys and a little baby hand"
                        className="rounded-3"
                        />
                    </div>
                    </div>
                </section>

                <section>
                    <div className="w-100 d-flex row align-items-center">
                        <div className="display col-lg-6 d-flex justify-content-between justify-content-lg-start mt-4 mt-lg-0">
                        <img
                        src={img2}
                        alt="A picture of toys and a little baby hand"
                        className="rounded-3"
                        />
                    </div>
                    <div className="herotext col-lg-6">
                            <div className="section2text">
                        <p className="display fw-semibold mb-4">Every child deserves a safe space to learn and grow. FunEdu is designed to bring learning and creativity to kids, even in places where internet isn’t always available.</p>
                    </div>
                    </div>
                    </div>
                </section>

                <section>
                    <div className='features mt-5'>
                    <h2 className='fw-semibold'>Core Features</h2>
                    <div className="coreFeatures m-5 d-flex flex-wrap justify-content-between">
                    <div className="feature1 p-3 mb-2 align-items-center">
                    <img src={icon} alt="Icon"/>
                    <h5 className=" my-4">Learn Anywhere</h5>
                    <p>Math games, stories, and learning tools.</p>
                    </div>
                    <div className="feature2 p-3 mb-2 align-items-center">
                    <img src={icon1} alt="Icon" />
                    <h5 className=" my-4">Play Safely</h5>
                    <p>Music, puzzles, and safe offline fun.</p>
                    </div>
                    <div className="feature3 p-3 ">
                    <img src={icon2} alt="Icon" />
                     <h5 className=" my-4 align-items-center">Be Creative</h5>
                    <p>Screen-time limits & progress tracking.</p>
                    </div>
                    <div className="feature4 p-3 align-items-center">
                    <img src={icon3} alt="Icon" />
                     <h5 className=" my-4">Parent-Friendly</h5>
                    <p>Drawing tools and customizable avatars.</p>
                    </div>
                    </div>
                    </div>
                </section>

                  <section className="whySection py-1">
                    <div className="w-100 d-flex row align-items-center">
                        <div className="whytext col-lg-6">
                            <div className="herotext1">
                                <h2 className="fw-semibold mb-4">Why FunEdu?</h2>
                                <p className="lead fw-medium mb-4">Kids need safe, engaging spaces to learn and play. Parents need peace of mind. </p>
                                <p className="lead fw-medium mb-4">FunEdu makes both possible — anytime, anywhere, even without internet</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-between justify-content-lg-end mt-4 mt-lg-0">
                        <img
                        src={whyimage}
                        height={400}
                        alt="A picture of toys and a little baby hand"
                        className="rounded-3"
                        />
                    </div>
                    </div>
                </section>

                <section>
                    <div className="signup mt-5">
                <div className="signupContent text-center m-4 p-4">
                <h1 className="fw-bold">We’re getting ready to launch!</h1>
                <h5 className="mt-3">
                    FunEdu web app will be live shortly. Stay tuned for updates!
                </h5>
                <p className="mt-4 text-muted">
                    Exciting features are on the way to make learning more fun and engaging.
                </p>
                </div>

                    </div>
                </section>

                <Footer />

                </div>
        <script async src="https://eocampaign1.com/form/59b0fe22-8c33-11f0-87a0-d1c12aeab298.js" data-form="59b0fe22-8c33-11f0-87a0-d1c12aeab298"></script>
        </div>
    )
}

export default Home;