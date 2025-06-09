import "./Home.css";
import Logo from "../../Assets/Main2.png";
import { FaPlayCircle } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import img1 from "../../Assets/avatar-1.jpg";
import img2 from "../../Assets/avatar-2.jpg";
import img3 from "../../Assets/avatar-3.jpg";
import img4 from "../../Assets/avatar-5.jpg";
import img5 from "../../Assets/avatar-4.jpg";
import img6 from "../../Assets/avatar-6.png";
import { FaStar } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { BsMortarboardFill } from "react-icons/bs";
import { BsPersonFillCheck } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const imgdata = [
  {
    id: 1,
    img: img1
  },
  {
    id: 1,
    img: img2
  },
  {
    id: 1,
    img: img3
  },
  {
    id: 1,
    img: img4
  },
  {
    id: 1,
    img: img5
  },
  {
    id: 1,
    img: img6
  }
];

const Home = () => {
  return (
    <div className="HomeDiv">
      <div className="topDiv">
        <div className="infoHeadingDiv">
          <h1 className="headingMsg">
            Education is the Best Way to
            <span className="headingMsg2"> Grow Up Knowledge</span>
          </h1>
          <p className="paragraph">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="btnDiv flex">
            <button className="button">Get learned</button>
            <button className="btn2 flex">
              <FaPlayCircle className="icon" />
              Play Video
            </button>
          </div>
          <div className="iconDiv flex ">
            <div className="icon1 flex">
              <TiTick className="icon" />
              Experience Members
            </div>
            <div className="icon2 flex">
              <TiTick className="icon" />
              Quality videos
            </div>
            <div className="icon3 flex">
              <TiTick className="icon" />
              Affordable Price
            </div>
          </div>
        </div>

        <div className="imageHeadDiv flex">
          <div className="imgDiv">
            <img src={Logo} alt="main-girl" className="mainImage" />
          </div>

          <div className="msgDiv flex">
            <MdStars className="icon" />
            <div className="textDiv flex">
              <h1>98.99%</h1>
              <p>28+ review with 5 star rating</p>
            </div>
          </div>

          <div className="viewDiv">
            <div className="textDiv flex">
              <h1>10k+</h1>
              <p>Online Members</p>
              <div className="imgDiv2 flex">
                <div className="avatarGroup">
                  {imgdata.slice(0, 5).map((user, index) => (
                    <img
                      key={index}
                      src={user.img}
                      alt={`user-${index}`}
                      className="avatarImg"
                      style={{
                        left: `${index * 20}px`,
                        zIndex: imgdata.length - index
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomDiv flex">
        <div className="btmOne flex">
          Rated Excellent
          <div className="flex">
            <FaStar className="icon" />
            <FaStar className="icon" />
            <FaStar className="icon" />
            <FaStar className="icon" />
            <FaStar className="icon" />
          </div>
        </div>
        <div className="btmTwo flex">
          <BsMortarboardFill className="icon" />
          20 Thousand + learners
        </div>
        <div className="btmThree flex">
          <BsPersonFillCheck className="icon" />4 Thousand + learners
        </div>
        <div className="btmFour flex">
          <TbWorld className="icon" />
          28+ countries
        </div>
      </div>
    </div>
  );
};

export default Home;
