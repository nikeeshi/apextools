/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      css={{
        position: "absolute",
        top: 24,
        right: 24,
      }}
    >
      <a
        href="#"
        onClick={() => {
          changeLanguage("ja");
        }}
      >
        日本語
      </a>
      /
      <a
        href="#"
        onClick={() => {
          changeLanguage("en");
        }}
      >
        English
      </a>
    </div>
  );
}
