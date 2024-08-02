let str1 = "1 12 1222 123 1234 1234541 1231 121 1122"
let pattern = /[^1-3]/g;
let pattern2 = /e\B/g;
let result = str1.match(pattern);
let result2 = str1.replace(pattern2, "_");

let text = "";
text += result + '<br>';
text += result2 + '<br>';
document.getElementById("show").innerHTML = text;
