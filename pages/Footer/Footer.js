import React from "react";

import { FiInstagram } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="p-3 bg-dark">
      <div className="container p-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 ">
            <div className="footer-col">
              <p>
                <span className="text-secondary">Address:</span>
                <br />
                <span className="text-white">
                  {" "}
                  34 Street Name, City Name Here, United States
                </span>
              </p>
              <p>
                <span className="text-secondary">Phone:</span>
                <br />
                <span className="text-white">+91 9483984700</span>
              </p>
              <p>
                <span className="text-secondary">E-mail:</span>
                <br />
                <span className="text-white">info@site.com</span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="footer-col text-secondary">
              <h5 className="mb-4">Links</h5>
              <p>
                <a href="#" className="text-decoration-none">
                  About
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none">
                  Services
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none">
                  Works
                </a>
              </p>
              <p>
                <a href="#" className="text-decoration-none">
                  Contact
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="footer-col">
              <h5 className="text-secondary mb-4">Media</h5>

              <p>
                <a href="#">
                  <FiInstagram size={25} />
                </a>

                <a href="#">
                  <GrFacebookOption size={25} />
                </a>

                <a href="#">
                  <FaLinkedinIn size={25} />
                </a>

                <a href="#">
                  <AiOutlineTwitter size={25} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
