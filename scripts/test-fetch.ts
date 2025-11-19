const res = await fetch("https://theuselessweb.com/js/uselessweb.js");
const jsText = await res.text();

console.log(jsText);
const match = jsText.match(/var sitesList = \[([\s\S]*?)\]/);

if (match) {
  const arrayString = '[' + match[1] + ']';
  const sitesList = eval(arrayString);
  //console.log(sitesList);
}
