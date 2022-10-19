import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const Trending = ({ blogs }) => {
  const options = {
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        item: 1,
      },
      400: {
        item: 2,
      },
      600: {
        item: 3,
      },
      1000: {
        item: 4,
      },
    },
  };
  return (
    <>
      <div>
        <div className="blog-heading text-start pt-3 py-2 mb-4">Trending</div>
      </div>
      <OwlCarousel className="owl-theme" {...options}>
        {blogs?.map((item) => (
          <div className="item px-2" key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <div className="trending-img-position">
                <div className="trending-img-size">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="trending-img-relative"
                  />
                </div>
                <div className="trending-img-absolute"></div>
                <div className="trending-img-absolute-1">
                  <span className="text-white">{item.title}</span>
                  <div className="trending-meta-info">
                    {item.author} - {item.timestamp.toDate().toDateString()}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};

export default Trending;
