const x="hello";
console.log(x);

const ele = document.createElement("h2");
ele.innerHTML = "This h2 element is through javascript code";
const root = document.getElementById("root");
root.appendChild(ele);
console.log(ele);