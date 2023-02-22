import React from "react";
import InfoTool from "../info-tool/InfoTool";
import HomeIcon from "../icon/HomeIcon";

const Hero = ({ type, info, image }) => {
  return type === "home" ? (
    <div className="hero">
      <HomeIcon anchorName={info.anchorName} />
      <div className="hero__box">
        {info.desc !== "" && <InfoTool content={info} />}
        <div className="wrapper">
          <div className="hero__wrap">
            <h3 className="hero__subtitle">{info.subtitle}</h3>
            <h2 className="hero__title">{info.title}</h2>
            <div
              className="hero__content"
              dangerouslySetInnerHTML={{ __html: info.content }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="hero">
      {/* <div className="hero__bg" style={{'background-image': 'url(' +info.background + ')'}}></div> */}
      <div
        className="hero__bg"
        style={{
          backgroundImage: "url(" + `${image}` + ")",
        }}
      ></div>
      {/* <picture className="hero__image">
        <img
          src={image}
          alt={info.background}
        ></img>
      </picture> */}

      <HomeIcon anchorName={info.anchorName} />
      <div className="hero__box">
        {info.desc !== "" && <InfoTool content={info} />}
        <div className="wrapper">
          <div className="hero__wrap">
            <h3 className="hero__subtitle">{info.subtitle}</h3>
            <h2 className="hero__title">{info.title}</h2>
            <div
              className="hero__content"
              dangerouslySetInnerHTML={{ __html: info.content }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
