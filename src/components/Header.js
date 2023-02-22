import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

const Header = ({ siteTitle }) => {
  const { languages, originalPath, t, i18n } = useI18next();
  return (
    <header className="main-header">
      {/* ... */}
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link
              to={originalPath}
              language={lng}
              style={{
                textDecoration:
                  i18n.resolvedLanguage === lng ? "underline" : "none",
              }}
            >
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
