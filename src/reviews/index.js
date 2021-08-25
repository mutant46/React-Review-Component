import React, { useState } from "react";
import { reviews } from "../data";
import cite from "../assests/mark.svg";

const Index = () => {
  const currentReveiw = reviews[0];
  const findIndex = (id) => {
    for (var x in reviews) {
      if (reviews[x].id === id) {
        return parseInt(x);
      }
    }
  };
  const [review, setReview] = useState(currentReveiw);
  const handleClickNext = (id) => {
    if (id === 1) {
      let lastReview = reviews[reviews.length - 1];
      setReview(lastReview);
    } else {
      setReview(reviews[findIndex(id) - 1]);
    }
  };
  const handleClickPrev = (id) => {
    if (id >= reviews.length) {
      setReview(currentReveiw);
    } else {
      setReview(reviews[findIndex(id) + 1]);
    }
  };
  return (
    <div className="container">
      <div className="person-img" data-cite="“">
        <img src={review.image} alt="" id="person" />
        <img src={cite} alt="" id="cite" />
      </div>
      <h3> {review.name} </h3> <span> {review.job} </span>
      <p>{review.text}</p>
      <div className="arrows">
        <i
          className="fas fa-long-arrow-alt-left"
          onClick={() => handleClickNext(review.id)}
        ></i>
        <i
          className="fas fa-long-arrow-alt-right"
          onClick={() => handleClickPrev(review.id)}
        ></i>
      </div>
    </div>
  );
};

export default Index;
