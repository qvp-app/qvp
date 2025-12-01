import { useEffect } from "react";

export default function SimpleAd() {
  useEffect(() => {
    const container = document.getElementById("ad-qvb-bottom");
    if (!container) return;

    container.innerHTML = "";

    const script1 = document.createElement("script");
    script1.type = "text/javascript";
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
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/20d70c6c0ce17b616bdc5d617f96a591/invoke.js";

    container.appendChild(script1);
    container.appendChild(script2);
  }, []);

  return null;
}
