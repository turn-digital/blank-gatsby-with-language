import React from "react";
const ReviewInfo = (props) => {
  const content = props.content;
  let positionTag = true,
    eventTag = true,
    contentTag = true;

  // check if position or event or content is not entered
  if (content.position === undefined || content.position === null) {
    positionTag = false;
  }

  if (content.event === undefined || content.event === null) {
    eventTag = false;
  }

  if (content.content === undefined || content.content === null) {
    contentTag = false;
  }

  return (
    <div className="reviews__info">
      <h3 className="reviews__name">{content.name}</h3>
      {positionTag ? (
        <div
          className="reviews__position"
          dangerouslySetInnerHTML={{ __html: content.position }}
        ></div>
      ) : (
        ""
      )}
      {eventTag ? <p className="reviews__event">{content.event}</p> : ""}
      {contentTag ? (
        <div
          className="reviews__content"
          dangerouslySetInnerHTML={{ __html: content.content }}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
};

/* condition for image and initials*/
const ReviewImageCheck = (props) => {
  let EnabledElement;
  const isImage = props.isImage.image,
    isInitials = props.isInitials.initials;
  const imagsAlt = props.imageAlt;
  if (typeof isInitials === "undefined") {
    if (isImage) {
      EnabledElement = (
        <picture>
          <img
            src={props.isImage.image}
            className="reviews__image"
            style={{
              gridArea: "1/1",
              maxHeight: 60,
              width: 60,
            }}
            alt={imagsAlt}
          ></img>
        </picture>
      );
    }
  } else {
    EnabledElement = (
      <div className="reviews__initials">
        <span>{isInitials}</span>
      </div>
    );
  }

  return EnabledElement;
};

const Reviews = (props) => {
  const reviews = props.reviews;
  const imagesAlt = props.imagesAlt;
  return (
    <div className="reviews">
      <div className="wrapper">
        <div className="reviews__list">
          {reviews.map((anObjectMapped, index) => (
            <div className="reviews__item" key={`${index}`}>
              <ReviewImageCheck
                isImage={reviews[index]}
                isInitials={reviews[index]}
                imageAlt={imagesAlt[index]}
              />
              <ReviewInfo content={anObjectMapped} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
