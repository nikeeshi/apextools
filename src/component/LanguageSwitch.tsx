/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const languageList = [
    ["ja", "日本語"],
    ["en", "English"],
  ];
  const currentLg = i18n.language;
  const languageListInOrder = languageList
    .filter((lg) => lg[0] === currentLg)
    .concat(
      languageList.filter((lg) => lg[0] !== currentLg)
    );
  return (
    <>
      {languageListInOrder.map(([code, name], index) => (
        <Fragment key={index}>
          {index !== 0 && "/"}
          <a
            href="#"
            onClick={() => {
              changeLanguage(code);
            }}
          >
            {name}
          </a>
        </Fragment>
      ))}
    </>
  );
}
