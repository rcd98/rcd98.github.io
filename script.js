const achievements = [
"Portfolio Loaded"
];

window.addEventListener("load", () => {

console.log(
"🏆 Achievement Unlocked: Portfolio Loaded"
);

});

let konami = [];

const code = [
"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"
];

document.addEventListener("keydown",(e)=>{

konami.push(e.key);

konami = konami.slice(-10);

if(JSON.stringify(konami)===JSON.stringify(code)){

alert(
"🏆 ACHIEVEMENT UNLOCKED\nKonami Code Detected!"
);

}

});
