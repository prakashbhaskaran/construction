import React from "react";
import styles from "../../styles/Section.module.css";
import { BsTextIndentLeft } from "react-icons/bs";
const Services = () => {
  return (
    <div>
      <style>
        {`
        .service .icon{
          font-size:60px;
          color:#007bff;
         
         
        }
        .service{
        
          border-radius: 10px;
          cursor:pointer; 
          box-shadow: black 0px 0px 24px;
        }
    
          `}
      </style>
      <section className={styles.padding_services}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center">
              <h2 className="text-uppercase mb-4 text-secondary">Services</h2>

              <p className="mb-5 fs-5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi unde impedit, necessitatibus, soluta sit quam minima
                expedita atque corrupti reiciendis.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="service d-block text-center p-5 ">
                <span className="icon">
                  <BsTextIndentLeft />
                </span>
                <div className="service-body mt-4">
                  <h5 className="mt-0 text-uppercase mb-3 text-secondary">
                    Pre-Construction
                  </h5>
                  <p className="mb-5 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p>
                    <a href="" className="btn btn-outline-primary btn-sm">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="service d-block text-center p-5 ">
                <span className="icon">
                  <BsTextIndentLeft />
                </span>
                <div className="service-body mt-4">
                  <h5 className="mt-0 text-uppercase mb-3 text-secondary">
                    House Renovation
                  </h5>
                  <p className="mb-5 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p>
                    <a href="" className="btn btn-outline-primary btn-sm">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-3">
              <div className="service d-block text-center p-5 ">
                <span className="icon">
                  <BsTextIndentLeft />
                </span>
                <div className="service-body mt-4">
                  <h5 className="mt-0 text-uppercase mb-3 text-secondary">
                    General contracting
                  </h5>
                  <p className="mb-5 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <p>
                    <a href="" className="btn btn-outline-primary btn-sm">
                      Learn More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button mt-5 text-center">
            <div className="btn btn-primary">View All Services</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
