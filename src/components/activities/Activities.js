import React from "react";
import patternSvg from "../../images/pattern-round-blade.svg";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const OverviewBlock = ({ title, content, activitiesAlt, anchorName }) => {
  const { event, moderator, radio } = activitiesAlt;
  return (
    <div className="activities" id={anchorName}>
      <div className="wrapper">
        <h3 className="activities__title title titlePadding">{title}</h3>
        <ul className="activities__list">
          <li className="activities__item">
            <Link className="activities__link" to="/pasakumu-vaditajs/"></Link>
            <div
              className={`${
                true
                  ? "activities__image activities__image--visible"
                  : "activities__image"
              }`}
            >
              <img
                className="activities__image-blade"
                src={patternSvg}
                alt="Svg pattern - grey circle"
              />
              <div className={`activities__image-tag pasakumu-vaditajs`}>
                <StaticImage
                  src="../../images/pasakuma-vaditajs-hero.jpg"
                  alt={event}
                  placeholder="blurred"
                />
              </div>
            </div>
            <h4 className="activities__section">{content.organiser}</h4>
          </li>
          <li className="activities__item">
            <Link
              className="activities__link"
              to="/diskusiju-moderators/"
            ></Link>
            <div
              className={`${
                true
                  ? "activities__image activities__image--visible"
                  : "activities__image"
              }`}
            >
              <img
                className="activities__image-blade"
                src={patternSvg}
                alt="Svg pattern - grey circle"
              />
              <div className={`activities__image-tag diskusiju-moderators`}>
                <StaticImage
                  src="../../images/moderators.jpg"
                  alt={moderator}
                  placeholder="blurred"
                />
              </div>
            </div>
            <h4 className="activities__section">{content.moderator}</h4>
          </li>
          <li className="activities__item">
            <Link className="activities__link" to="/radio-personiba/"></Link>
            <div
              className={`${
                true
                  ? "activities__image activities__image--visible"
                  : "activities__image"
              }`}
            >
              <img
                className="activities__image-blade"
                src={patternSvg}
                alt="Svg pattern - grey circle"
              />
              <div className={`activities__image-tag radio-personiba`}>
                <StaticImage
                  src="../../images/radioHomePage.jpg"
                  alt={radio}
                  placeholder="blurred"
                />
              </div>
            </div>
            <h4 className="activities__section">{content.radio}</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewBlock;
