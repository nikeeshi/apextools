/** @jsxImportSource @emotion/react */
import { useTranslation } from "react-i18next";
import mq from "../mediaQuery";
import LanguageSwitch from "./LanguageSwitch";

export function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <h1
        css={mq({
          width: ["100%", "80%"],
          display: "inline-block",
        })}
      >
        {t("Apex Legends RP calculator")}
      </h1>
      <div
        css={mq({
          width: ["100%", "calc(20% - 24px)"],
          display: "inline-block",
          textAlign: "end",
          verticalAlign: "top",
          marginTop: [0, 24],
          marginRight: 24,
        })}
      >
        <LanguageSwitch />
      </div>
    </header>
  );
}
