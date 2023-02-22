import React from "react";

const Clients = (props) => {
  const clientsList = [
    {
      logo: "/logo-facebook.svg",
      alt: "Facebook logo",
    },
    {
      logo: "/logo-lbp.svg",
      alt: "LBP logo",
    },
    {
      logo: "/logo-lu.svg",
      alt: "LU logo",
    },
    {
      logo: "/ideju-instituts-logo.svg",
      alt: "Ideju institūta logo",
    },
    {
      logo: "/golin-logo.svg",
      alt: "Golin logo",
    },
    {
      logo: "/logo-rtu.svg",
      alt: "RTU logo",
    },
    {
      logo: "/liaa-logo.svg",
      alt: "LIAA logo",
    },
    {
      logo: "/Tet_logo.svg",
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
              <img
                src={anObjectMapped.logo}
                alt={`${anObjectMapped.alt}`}
              />
            </picture>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
