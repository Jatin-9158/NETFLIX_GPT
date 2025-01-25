/* eslint-disable no-undef */

import React, { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

const googleTranslateElementInit = () => {
  if (window.google && window.google.translate) {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,es,fr,de,hi,zh-CN,kn",
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      },
      "google_translate_element"
    );
  }
};

function App() {
  const scriptLoaded = useRef(false); 

  useEffect(() => {
    if (scriptLoaded.current) return; 
    scriptLoaded.current = true;

    const scriptId = "google-translate-script";

  
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);


      window.googleTranslateElementInit = googleTranslateElementInit;
    }

    return () => {
      const script = document.getElementById(scriptId);
      if (script) script.remove();
      const translateElement = document.getElementById(
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />

        <div
          id="google_translate_element"
          class="absolute bottom-5 right-5 z-50 h-15 bg-zinc-800 text-white py-2 px-4 rounded-xl border  opacity-80 border-gray-400 transition-all duration-300 ease-in-out"
        ></div>

        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
      