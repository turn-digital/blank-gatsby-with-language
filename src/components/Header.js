import { Link, useI18next } from "gatsby-plugin-react-i18next";
import PropTypes from "prop-types";
import "./header.css";
import React from "react";

const isBrowser = typeof window !== "undefined";

const Header = () => {
  const { originalPath } = useI18next();
  let language = "";
  if (isBrowser) {
    language = window.location.pathname.includes("/en/");
  }
  return (
    <div className="language">
      <Link
        title="latviešu valoda"
        to={originalPath}
        className={!language ? "current" : ""}
        language={"lv"}
      >
        Latviešu
      </Link>{" "}
      <Link
        title="English language"
        to={originalPath}
        className={language ? "current" : ""}
        language={"en"}
      >
        English
      </Link>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

// import React from "react";
// // import Link from "next/link";
// // import { useRouter } from "next/router";

// const Header = () => {
//   const router = useRouter();
//   const { locale, asPath } = router;

//   let urlPath = "";

//   if (asPath === "/#darbibas-jomas" || asPath === "/#field-of-work") {
//     urlPath = "/";
//   } else {
//     urlPath = asPath;
//   }

//   return (
//     <div className="language">
//       <Link
//         title="latviešu valoda"
//         href={urlPath}
//         className={locale === "lv" ? "current" : ""}
//         locale="lv"
//       >
//         Latviešu
//       </Link>{" "}
//       <Link
//         title="English language"
//         href={urlPath}
//         className={locale === "en" ? "current" : ""}
//         locale="en"
//       >
//         English
//       </Link>
//     </div>
//   );
// };

// export default Header;
