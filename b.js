require("browser-env")();

console.log(__dirname);
if (navigator.userAgent.indexOf("win") != -1) console.log("Windows");
if (navigator.userAgent.indexOf("mac") != -1) console.log("MacOS");
if (navigator.userAgent.indexOf("x11") != -1) console.log("UNIX");
if (navigator.userAgent.indexOf("linux") != -1) console.log("Linux");
