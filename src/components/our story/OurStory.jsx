import React from "react";

const OurStory = () => {
  return (
    <>
      <div style={{}}>
        <div className="container-fluid  text-dark py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div style={{ width: "500px", marginLeft: "200px" }}>
                <h6
                  style={{
                    color: "grey",
                    textAlign: "left",
                    marginBottom: "20px",
                  }}
                >
                  OUR STORY
                </h6>

                <h2
                  className="display-4"
                  style={{ textAlign: "left", marginBottom: "30px" }}
                >
                  Welcome To Royal
                </h2>
                <p className="lead" style={{ textAlign: "left" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  quae aliquid fugit non illo! Consectetur deserunt corporis
                  temporibus minima, reprehenderit voluptatem non! Molestias
                  odit in autem inventore dolor voluptates ad.Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Natus quae aliquid
                  fugit non illo! Consectetur deserunt corporis temporibus
                  minima, reprehenderit voluptatem non! Molestias odit in autem
                  inventore dolor voluptates ad. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Natus quae aliquid fugit non
                  illo! Consectetur deserunt corporis temporibus minima,
                  reprehenderit voluptatem non! Molestias odit in autem
                  inventore dolor voluptates ad. ad.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  quae aliquid fugit non illo! Consectetur deserunt corporis
                  temporibus minima, reprehenderit voluptatem non! Molestias
                  odit in autem inventore dolor voluptates ad.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/20/06/12/fruits-4639222_640.jpg"
                alt="Hero Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div
          className="container-fluid  py-5 d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh", backgroundColor: "#f4f4f6" }}
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
                ONLY THE BEST
              </h6>
              <h1 className="display-4 mb-5">Fresh Ingredient, Tasty Meals</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                optio unde magni ipsam cupiditate ,<br />
                earum dolorem temporibus, pariatur exercitationem reprehenderit
                ad. Quaerat totam in
                <br /> quia placeat, beatae sapiente sit laboriosam.
              </p>
              <button className="btn btn-warning mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
