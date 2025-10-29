import tick from "../assets/icon-list.svg";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  return (
    <div className="success-div">
      <div className="success-content">
        <div className="success-content-c1">
          <img className="tick-img" src={tick} alt="check" />
          <h3>
            Thanks for <br />
            subscribing!
          </h3>
          <p className="confirmation-para">
            A confirmation email has been sent to
            <span className="email"> ash@loremcompany.com</span>. Please open it
            and click the button inside to confirm your subscription.
          </p>
        </div>
        <button onClick={() => navigate("/")}>Dismiss Message</button>
      </div>
    </div>
  );
}

export default Success;
