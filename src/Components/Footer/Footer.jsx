import img3 from "../../assets/footer-3.svg";
import img4 from "../../assets/footer-4.svg";
import img5 from "../../assets/footer-5.svg";

function Footer() {
  return (
    <footer className=" py-5">
      <div className="container">
      <div className="back">
        <a href="#" className="back p-2">Back to top</a>
      </div>

        <div className="row g-4 mt-3">
          <div className="col-md-3">
            <h4>FunEdu</h4>
            <h5>FunEdu — Safer learning, smarter play.</h5>
          </div>
          <div className="col-md-3">
            <h4>Socials</h4>
            <ul className="list-unstyled">
              {/* <li className="mb-2"><a href="#" className="text-white link-decoration-custom"><img src={img1} width={35} alt="facebook" /> Facebook</a></li> */}
              {/* <li className="mb-2"><a href="#" className="text-white link-decoration-custom"><img src={img2} width={35} alt="linkedin" /> LinkedIn</a></li> */}
              <li className="icon mb-2"><a href="https://www.instagram.com/funedumobilekidapp?igsh=bXY0Z3drZGhrMmNw" className="text-black link-decoration-custom"><img src={img3} width={35} alt="instagram" /> Instagram</a></li>
              <li className="icon mb-2"><a href="tech@funedukids.com" className="text-black link-decoration-custom"><img src={img4} width={35} alt="email" style={{ filter: 'invert(0%) sepia(1000%) saturate(10000%) hue-rotate(500deg)' }} />Email</a></li>
              <li className="icon mb-2"><a href="https://x.com/FuneduKidApp?t=JIWXdfiR7d8RU3RvG1PD8g&s=09" className="text-black link-decoration-custom"><img src={img5} width={35} alt="x" /> X</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Products</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-black link-decoration-custom">Overview</a></li>
              <li className="mb-2"><a href="#" className="text-black link-decoration-custom">Learn Anywhere</a></li>
              <li className="mb-2"><a href="#" className="text-black link-decoration-custom">Creative Play</a></li>
              <li className="mb-2"><a href="#" className="text-black link-decoration-custom">Parental Tools</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Policies</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-black link-decoration-custom">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="text-black link-decoration-custom">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-black link-decoration-custom">Data Security & Compliance</a></li>
              <li className="mb-2"><a href="#" className="text-black link-decoration-custom">Information Sales</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

