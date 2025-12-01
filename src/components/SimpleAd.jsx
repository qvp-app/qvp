import { useEffect } from "react";

export default function SimpleAd() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      atOptions = {
        'key' : '20d70c6c0ce17b616bdc5d617f96a591',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;

    const script2 = document.createElement("script");
    script2.src = "//www.highperformanceformat.com/20d70c6c0ce17b616bdc5d617f96a591/invoke.js";

    const container = document.getElementById("ad-qvb-bottom");
    container.innerHTML = "";
    container.appendChild(script1);
    container.appendChild(script2);
  }, []);

  return null;
}
