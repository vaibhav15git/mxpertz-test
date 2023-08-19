import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="hero-overlay"></div>
        <div className="horizontal-container">
          <div className="custom-box">
            <p style={{ fontSize: "30px", marginTop: "70px" }}>
              Hours of Operation
            </p>
            <p style={{ fontFamily:'sans-serif'}}>
              MON-FRI
              <br />
              10.00am - 1.00pm
              <br />
              4.00pm - 10.30pm
            </p>

            <hr
              style={{
                color: "orange",
                width: "70%",
                display: "flex",
                margin: "auto",
                fontWeight: "bold",
              }}
            />

            <p
              style={{
              
                marginTop: "20px",
                marginBottom: "30px",
                fontFamily:"sans-serif"
              }}
            >
              SAT
              <br />
              3.00pm - 10.30pm
            </p>

            <hr
              style={{
                color: "orange",
                width: "70%",
                display: "flex",
                margin: "auto",
                fontWeight: "bold",
              }}
            />

            <p
              style={{
             
                marginTop: "20px",
                marginBottom: "30px",
                fontFamily: "sans-serif",
              }}
            >
              SUN
              <br />
              We Are Closed
            </p>
            <button
              style={{
                backgroundColor: "#edb458",
                color: "white",
                border: "none",
                padding: "8px",
                fontFamily: "sans-serif",
              }}
            >
              MAKE A RESERVATION
            </button>
          </div>

          <div className="custom-box">
            <p
              style={{
                fontSize: "25px",
                marginTop: "70px",
                fontFamily: "sans-serif",
              }}
            >
              Drop Us a Line
            </p>

            <p>
              Don't be shy. Let us know if you have any <br />
              questions!
            </p>

            <button
              style={{
                backgroundColor: "#edb458",
                color: "white",
                border: "none",
                padding: "6px",
                fontFamily: "sans-serif",
              }}
            >
              CONTACT US
            </button>

            <p
              style={{
                fontSize: "25px",
                marginTop: "70px",
                fontFamily: "sans-serif",
              }}
            >
              Our NewsLetter
            </p>
            <p >
             Dialogue is an essential part of any script
            </p>
            <form action="">
                <input className='input-box' type="text" name="" id="" placeholder='First Name' />
                <br />
                <input className='input-box' type="text" name="" id="" placeholder='Last Name' />
                <br />
                <input className='input-box' type="email" name="" id="" placeholder='Email' />
                <br />
                <input className='input-btn' type="submit" name="" id="" placeholder='CONTACT US' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer