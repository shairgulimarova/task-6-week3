//body
document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "[Outfit](https://fonts.google.com/specimen/Outfit)";
document.body.style.fontSize = "18px";

//wrapper
let wrapper = document.createElement("div"); 
wrapper.id = "wrapper" ;
wrapper.style.margin = "0 auto"; 
wrapper.style.maxWidth = "1440px";
wrapper.style.display = "flex"; 

wrapper.style.justifyContent = "space-around";
wrapper.style.marginTop = "100px"; 



//card
let card = document.createElement("div"); 
card.className.card = "card"; 
card.style.padding = "20px";
card.style.borderRadius = "20px";
card.style.backgroundColor = "hsl(216, 50%, 16%)";


//image
let cardPhoto = document.createElement("img");
cardPhoto.className = "card-image";
cardPhoto.src = "./images/image-equilibrium.jpg";
cardPhoto.style.maxWidth = "300px";
cardPhoto.style.borderRadius = "10px"; 
cardPhoto.style.marginBottom = "17px"; 

//h3 заголовок 
let main = document.createElement("div");
main.className = "main-part"; 

let title = document.createElement("h3");
title.className = "card-title";
title.innerText = "Equilibrium #3429";
title.style.margin = "0px";
title.style.fontWeight = "600"; 
title.style.color = "hsl(0, 0%, 100%)";


//Paragraph
let paragraph = document.createElement("p");
paragraph.className = "card-about";
paragraph.innerText = "Our Equilibrium collection promotes balance and calm.";
paragraph.style.color = "hsl(215, 51%, 70%)";
paragraph.style.maxWidth = "300px";
paragraph.style.lineHeight = "25px";
paragraph.marginBottom = "17px"; 


//information 
let items = document.createElement("div");
items.style.display = "flex"; 
items.style.justifyContent = "space-between";

let info = document.createElement("div"); 
info.className = "info-numbers"; 


let infoIcon = document.createElement("img");
infoIcon.className = "info-img";
infoIcon.src = "./images/icon-ethereum.svg"; 
infoIcon.style.marginRight = "5px";

let infoText = document.createElement("p");
infoText.className = "info-text"; 
infoText.innerText = "0.041 ETH";
infoText.style.margin = "0";
infoText.style.display = "inline-block";
infoText.style.color = "hsl(178, 100%, 50%)";
infoText.style.fontWeight = "600"; 
infoText.style.marginRight = "70px"

let dayLeft = document.createElement ("div");
dayLeft.className = "day-left"; 
dayLeft.style.display = "flex"; 
dayLeft.style.marginBottom = "17px"; 


let clockIcon = document.createElement ("img");
clockIcon.className = "clock-icon"; 
clockIcon.src = "./images/icon-clock.svg"; 
clockIcon.style.marginRight = "5px"; 

let timeDescr = document.createElement("time");
timeDescr.className = "time-descr";
timeDescr.innerText = "3 days are left"; 
timeDescr.style.color = "hsl(215, 51%, 70%)";
timeDescr.style.bottom = "3px";
timeDescr.style.position = "relative";

let hrline = document.createElement("hr");
hrline.style.borderColor = "hsl(215, 32%, 27%)";



let creator = document.createElement("div"); 
creator.className = "creator-info"; 
creator.style.marginTop = "22px"; 
creator.style.display = "flex"; 
creator.alignItems = "center"; 

let creatorImg = document.createElement("img");
creatorImg.className = "avatar"; 
creatorImg.src = "./images/image-avatar.png"; 
creatorImg.style.maxWidth = "45px"; 
creatorImg.style.marginRight = "15px"; 
creatorImg.style.border = "2px solid white"; 
creatorImg.style.borderRadius = "50%"; 

let creatorText = document.createElement("span"); 
creatorText.className = "creator-text"; 
creatorText.innerText = "Creation of"; 
creatorText.style.color = "hsl(215, 51%, 70%)"; 
creatorText.style.textAlign = "center"; 
creatorText.style.marginRight = "5px";
creatorText.style.bottom = "20px";
creatorText.style.position = "relative";



let creatorName = document.createElement ("span");
creatorName.className = "creator-name"; 
creatorName.innerText = "Jules Wivern"; 
creatorName.style.color = "white"; 
creatorName.style.bottom = "20px";
creatorName.style.position = "relative";

document.body.appendChild(wrapper); 
wrapper.appendChild(card); 
card.appendChild(cardPhoto); 
card.appendChild(title); 
card.appendChild(paragraph);
card.appendChild(infoIcon); 
card.appendChild(infoText);
card.appendChild(clockIcon);
card.appendChild(timeDescr);
card.appendChild(hrline);
card.appendChild(creatorImg);
card.appendChild(creatorText);
card.appendChild(creatorName);

//Добавляем еще карточек



let card2 = card.cloneNode(true); 
wrapper.appendChild(card2); 

let card3 = card.cloneNode(true); 
wrapper.appendChild(card3);


alert("Я оцениваю свою работу на 110 баллов");