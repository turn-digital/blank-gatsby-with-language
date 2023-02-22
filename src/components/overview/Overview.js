import React from "react";

const OverviewBlock = (activitiesAlt) => {
  const { event, moderator, radio } = activitiesAlt.activitiesAlt;
  return (
    <div className="overview">
      <div className="overview__wrap">
        <ul className="overview__list">
          <li className="overview__item">
            <div className="overview__image">
              <picture>
                <img
                  src="/sakums-parskats-1.jpg"
                  alt={event}
                  placeholder="blurred"
                  objectFit="cover"
                  layout="fill"
                />
              </picture>
            </div>
          </li>
          <li className="overview__item">
            <div className="overview__image">
              <picture>
                <img
                  src="/moderators.jpg"
                  alt={moderator}
                  placeholder="blurred"
                  objectFit="cover"
                  layout="fill"
                />
              </picture>
            </div>
          </li>
          <li className="overview__item">
            <div className="overview__image">
              <picture>
                <img
                  src="/kazu-vaditajs-hero.jpg"
                  alt={radio}
                  placeholder="blurred"
                  objectFit="cover"
                  layout="fill"
                />
              </picture>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewBlock;
