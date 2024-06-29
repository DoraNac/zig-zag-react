import React from "react";
import "../styles/HomePage.css";

const images = [
  "https://cdn.pixabay.com/photo/2023/03/16/16/49/watercolor-7857103_960_720.png",
  "https://cdn.pixabay.com/photo/2020/10/23/05/23/leaves-5677718_960_720.png",
  "https://cdn.pixabay.com/photo/2020/10/23/05/23/leaves-5677717_960_720.png",
  "https://cdn.pixabay.com/photo/2023/01/26/18/11/leaves-7746730_960_720.png",
  "https://cdn.pixabay.com/photo/2020/12/16/03/40/leaves-5835593_960_720.png",
  "https://cdn.pixabay.com/photo/2020/10/21/04/01/leaves-5672036_960_720.png",
];

const texts = [
  "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias   ",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  " Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. ",
];

const HomePage = () => {
  return (
    <div className="container">
      {images.slice(0, 6).map((image, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="col text">{texts[index]}</div>
              <div className="col">
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            </>
          ) : (
            <>
              <div className="col">
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
              <div className="col text">{texts[index]}</div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HomePage;
