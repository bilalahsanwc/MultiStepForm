import mobileImage from "../assets/illustration-sign-up-mobile.svg";
import desktopImage from "../assets/illustration-sign-up-desktop.svg";
import tick from "../assets/icon-list.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Design() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email Required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please Enter a Valid Email Address");
      return;
    }

    setError("");
    navigate("/success");
  };

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="container">
      <div className="design-div">
        <img
          className="main-image"
          src={isDesktop ? desktopImage : mobileImage}
          alt="Image"
        />
        <div className="text-content">
          <h3>Stay updated!</h3>
          <p className="main-para">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="uses">
            <div>
              <img src={tick} alt="check" />
              <p>Product discovery and building what matters</p>
            </div>
            <div>
              <img src={tick} alt="check" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div>
              <img src={tick} alt="check" />
              <p>And much more!</p>
            </div>
          </div>
          <form noValidate onSubmit={handleSubmit}>
            <label>
              Email address
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
                required
              />
            </label>
            <button type="submit">
              <span>Subscribe to monthly newsletter</span>
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Design;
