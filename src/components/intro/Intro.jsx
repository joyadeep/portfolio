import "./intro.css";
import Me from "../../assets/images/me.png";
const Intro = () => {
  return (
    <>
      <div className="i-container">
        <div className="ic-left">
          <div className="icl-wrapper">
            <p className="greeting">Hello, I am</p>
            <p className='name'>Joy-A-deep</p>
            <div className="intro-wrapper">
              <div className="intro-items">
                <div className="intro-item">Web Developer</div>
                <div className="intro-item">MERN Stack Developer</div>
                <div className="intro-item">Technical Content Writer</div>
                <div className="intro-item">Technophile</div>
                <div className="intro-item">Freelancer</div>
              </div>
            </div>
            <div className="icl-desc">
                Create your dream projects with me.
            </div>
            <div className="icl-buttons">
                <button className='btn-moreme'><a href="https://jofibo.com/s/EmerqOLDC02PTPzNBacI0Q" target="_blank">Download CV</a> </button>
                <button className='btn-hireme'><a href="#contact"> Hire me</a></button>
            </div>
          </div>
        </div>
        <div className="ic-right">
          <div className="icr-bg"></div>
          <img src={Me} alt="profile pic"  className="i-img" />
        </div>
      </div>
    </>
  );
};
export { Intro };
