// src/utils/translate.js

export async function translateWord(text, from, to) {
  if (!text.trim()) return "";

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(
    text
  )}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data[0][0][0];
  } catch (err) {
    console.log("Translate error:", err);
    return "";
  }
}
