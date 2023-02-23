import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import fbLogo from "../../images/logo-facebook.svg";
import lbpLogo from "../../images/logo-lbp.svg";
import luLogo from "../../images/logo-lu.svg";
import iiLogo from "../../images/ideju-instituts-logo.svg";
import golinLogo from "../../images/golin-logo.svg";
import rtuLogo from "../../images/logo-rtu.svg";
import liaaLogo from "../../images/liaa-logo.svg";
import tetLogo from "../../images/Tet_logo.svg";

const Clients = (props) => {
  const clientsList = [
    {
      logo: fbLogo,
      alt: "Facebook logo",
    },
    {
      logo: lbpLogo,
      alt: "LBP logo",
    },
    {
      logo: luLogo,
      alt: "LU logo",
    },
    {
      logo: iiLogo,
      alt: "Ideju institūta logo",
    },
    {
      logo: golinLogo,
      alt: "Golin logo",
    },
    {
      logo: rtuLogo,
      alt: "RTU logo",
    },
    {
      logo: liaaLogo,
      alt: "LIAA logo",
    },
    {
      logo: tetLogo,
      alt: "TET logo",
    },
  ];

  const title = props.title;
  return (
    <div className="clients">
      <div className="wrapper">
        <h3 className="clients__title title">{title}</h3>
        <div className="clients__list">
          {clientsList.map((anObjectMapped, index) => (
            <picture key={index} className="clients__img">
              <img src={anObjectMapped.logo} alt={`${anObjectMapped.alt}`} />
            </picture>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
