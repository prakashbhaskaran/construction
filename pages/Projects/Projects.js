import React from "react";
import styles from "../../styles/Section.module.css";

const Projects = () => {
  return (
    <div>
      <style>
        {`
        .project-item{
          width:320px;
          height:320px;
          padding:5px;
        
        }
          .project-item a {
            width: 100%;
            height: 100%;
            display:block;
          }
          .project-item a img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            
          }
          `}
      </style>
      <section className={styles.padding_projects}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center">
              <h2 className="text-uppercase mb-4 text-secondary">
                Recent Projects
              </h2>

              <p className="mb-5 fs-5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi unde impedit, necessitatibus, soluta sit quam minima
                expedita atque corrupti reiciendis.
              </p>
              <p>
                <a href="#" className="btn btn-secondary">
                  See All Projects
                </a>
              </p>
            </div>
          </div>
          <div className="row justify-content-center gap-3">
            <div className="project-item col-md-3">
              <a href="">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </a>
            </div>
            <div className="project-item col-md-3">
              <a href="">
                <img
                  src="https://images.unsplash.com/photo-1563253746-350a0a877afa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"
                  alt=""
                />
              </a>
            </div>
            <div className=" project-item col-md-3">
              <a href="">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </a>
            </div>
            <div className="project-item  col-md-3">
              <a href="">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </a>
            </div>
            <div className="project-item col-md-3">
              <a href="">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </a>
            </div>
            <div className="project-item col-md-3">
              <a href="">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
