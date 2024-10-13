import { article } from "./Article";
import { useState } from "react";

const Main = () => {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };
  return (
    
    <div className="row pt-5">
    <div className="col-lg-9 py-5 text-center mx-auto">
      <img
        src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
        alt="Bootstrap logo"
        className="bootstrap img"
        width="71.53"
      />
      <p className="h2 custom-font fw-bold col-12 mt-3">
        {article.title[language]}
      </p>
      <p className="custom-font col-7  mx-auto">
        {article.description[language]}
      </p>
      <button onClick={toggleLanguage} className="btn btn-primary mt-1">
        {language === "en" ? "Gunakan Bahasa Indonesia" : "Use English"}
      </button>
    </div>
  </div>
  );
};

export default Main;