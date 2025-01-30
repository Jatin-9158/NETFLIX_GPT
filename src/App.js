/* eslint-disable no-undef */
import React, { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from 'react-redux';

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

    // Hide Google Translate Bar
    setTimeout(() => {
      const googleTranslateBar = document.querySelector(".goog-te-banner-frame");
      if (googleTranslateBar) googleTranslateBar.style.display = "none";
      
      document.body.style.top = "0px"; // Reset body top margin
    }, 500);
  }
};

function App() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    // Set function globally before script loads
    window.googleTranslateElementInit = googleTranslateElementInit;

    const scriptId = "google-translate-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      const script = document.getElementById(scriptId);
      if (script) script.remove();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />

        {/* Google Translate Dropdown */}
        <div
          id="google_translate_element"
          className="absolute bottom-5 right-5 z-50 h-15 bg-zinc-800 text-white py-2 px-4 rounded-xl border opacity-80 border-gray-400 transition-all duration-300 ease-in-out"
        ></div>

        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
