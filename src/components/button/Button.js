import React from "react";
import SvgIcon from "../icon/Icon";

const Button = (props) => {
  const link = props.link,
    target = props.target,
    title = props.title,
    icon = props.icon,
    btnClass = "button " + props.btnClass;
  return (
    <a className={btnClass} href={link} target={target}>
      <span className="button__icon">
        <SvgIcon icon={icon} />
      </span>
      {title}
    </a>
  );
};

export default Button;
