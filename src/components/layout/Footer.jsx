import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-logo">CorVex</h2>
        <p className="footer-tagline">
          Luxury Eyewear · Jewellery · Sunglasses
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h4>COLLECTIONS</h4>
          <a>Men</a>
          <a>Women</a>
          <a>Kids</a>
        </div>

        <div>
          <h4>CUSTOMER CARE</h4>
          <a>Contact Us</a>
          <a>Order History</a>
          <a>Payments</a>
        </div>

        <div>
          <h4>ABOUT</h4>
          <a>About BVLGARI</a>
          <a>Stores</a>
          <a>Careers</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CorVex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;




