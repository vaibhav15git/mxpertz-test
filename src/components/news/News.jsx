import React from "react";

const News = () => {
  return (
    <>
      <div style={{ minHeight: "100vh", backgroundColor: "#f4f4f6" }}>
        <div
          className="container-fluid  py-5 d-flex justify-content-center mt-5"
          style={{ backgroundColor: "#f4f4f6" }}
        >
          <div className="row">
            <div className="col-md-12 text-center">
              <h6
                style={{
                  color: "grey",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                DON'T MISS
              </h6>
              <h1 className="display-4">Our News And Events</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                optio unde
                <br />
                quia placeat, beatae sapiente sit laboriosam.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "80%",
            height: "350px",

            margin: "auto",
          }}
        >
          <div
            style={{ width: "33.99%", textAlign: "left", paddingLeft: "35px" }}
          >
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/30/05/48/cooking-1013455_640.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Vestibulum Nisl Felis</h5>
                <p
                  style={{
                    color: "orange",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  CATEGORY
                </p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ width: "33.99%", textAlign: "left", paddingLeft: "35px" }}
          >
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/30/05/48/cooking-1013455_640.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Vestibulum Nisl Felis</h5>
                <p
                  style={{
                    color: "orange",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  CATEGORY
                </p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ width: "33.99%", textAlign: "left", paddingLeft: "35px" }}
          >
            <div className="card" style={{ width: "22rem" }}>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/30/05/48/cooking-1013455_640.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Vestibulum Nisl Felis</h5>
                <p
                  style={{
                    color: "orange",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  CATEGORY
                </p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid  py-5 d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#f4f4f6" }}
      >
        <div className="row">
          <div className="col-md-12 text-center">
            <button className="btn btn-warning mt-3 text-white mt-5 mb-5">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;





