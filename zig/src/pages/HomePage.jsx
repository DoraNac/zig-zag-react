import React from "react";
import "../styles/HomePage.css";

const images = [
  "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/04/07111030/tijs-van-leur-Qnlp3FCO2vc-unsplash-scaled.jpg",
  "https://s3-ap-southeast-2.amazonaws.com/ish-oncourse-scc/85edf77e-03d4-4d37-8171-130776d6d4d2?versionId=CyqL4UCaGm9Ld.YzcsTqQah7LpCs.E2m",
  "https://liquidcapitalcorp.com/wp-content/uploads/2018/04/Prepare-for-a-conference.jpg",
  "https://static01.nyt.com/images/2017/09/20/business/21ebiz1/21ebiz1-superJumbo.jpg",
  "https://www.loghicconnect.com.au/wp-content/uploads/2020/05/Untitled-design-2023-03-16T112342.403.jpg",
  "https://www.johntalk.com/wp-content/uploads/2018/06/The-Benefits-of-Working-Music-Festivals.jpg",
  "https://www.nevadaart.org/wp-content/uploads/2018/11/2018_GalleryShot_AlteredLandscape1.jpg",
  "https://www.walksinsiderome.com/wp-content/uploads/2023/01/italian-cooking-class-in-rome.jpg",
];

const texts = [
  "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
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
              <div className="col"><img src={image} alt={`Image ${index + 1}`} /></div>
            </>
          ) : (
            <>
              <div className="col"><img src={image} alt={`Image ${index + 1}`} /></div>
              <div className="col text">{texts[index]}</div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HomePage;
