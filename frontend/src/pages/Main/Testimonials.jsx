import React from "react";
import "./Testimonials.css";
import img1 from "../../Assets/male-1.jpg";
import img2 from "../../Assets/female.jpg";
import img3 from "../../Assets/male-3.jpg";
import { FaStar } from "react-icons/fa";

const cartData = [
  {
    id: 1,
    imgSrc: img1,
    Name: "Lesile Alexander",
    Title: "Tap Course Enroller",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    rating: 5
  },
  {
    id: 2,
    imgSrc: img2,
    Name: "Ralph Edwards",
    Title: "Tap Course Enroller",
    paragraph:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    rating: 4
  },
  {
    id: 3,
    imgSrc: img3,
    Name: "Courtney Henry",
    Title: "Tap Course Enroller",
    paragraph:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="TestimonialsDiv">
      <div className="heading">
        <h3 className="title">Testimonials</h3>
      </div>
      <div className="sectionForContent">
        {cartData.map(({ id, imgSrc, Name, Title, paragraph, rating }) => (
          <div className="mainPart" key={id}>
            <div className="cartDeails">
              <div className="imageSec">
                <img src={imgSrc} alt={Name} />
              </div>
              <span className="name">{Name}</span>
              <span className="title">{Title}</span>
              <div className="stars">
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} color="#000" />
                ))}
              </div>
            </div>
            <div className="ParaDiv">
              <p className="paragraph">{paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
