
function Menu(item1, item2, item3, item4, item5, item6) {
    this.item1 = item1
    this.item2 = item2
    this.item3 = item3
    this.item4 = item4
    this.item5 = item5
    this.item6 = item6
}

var share = new Menu("CALAMARI", "MUSSELS", "POPCORN SHRIMPS", null, null, null);
var main = new Menu("FISH AND CHIPS", "BAKED SALMON", "SEAFOOD PENNE", "CLAPMS LINGUINE", null );
var sides = new Menu("CHIPS", "SEAFOOD SALAD", null, null, null, null);


var mainDiv = document.getElementById("mainCont");
mainDiv.setAttribute("class", "main")

var mainHead = document.createElement("h1");
mainHead.setAttribute("class", "main-head")
var mainHeadTxt = document.createTextNode("Menu")

var shareDiv = document.createElement("div");
shareDiv.setAttribute("class", "share")
var shareDivHead = document.createElement("h1");
var shareDivHeadTxt = document.createTextNode("Share")
var shareDivUl = document.createElement("ul");
var shareDivUlLi1 = document.createElement("li");
var shareDivUlLi1Txt = document.createTextNode(share.item1);
var shareDivUlLi2 = document.createElement("li");
var shareDivUlLi2Txt = document.createTextNode(share.item2);
var shareDivUlLi3 = document.createElement("li");
var shareDivUlLi3Txt = document.createTextNode(share.item3);

var mainMenuDiv = document.createElement("div");
mainMenuDiv.setAttribute("class", "main-menu")
var mainMenuDivHead = document.createElement("h1");
var mainMenuDivHeadTxt = document.createTextNode("Main");
var mainMenuDivUl = document.createElement("ul");
var mainMenuDivUlLi1 = document.createElement("li");
var mainMenuDivUlLi1Txt = document.createTextNode(main.item1);
var mainMenuDivUlLi2 = document.createElement("li");
var mainMenuDivUlLi2Txt = document.createTextNode(main.item2);
var mainMenuDivUlLi3 = document.createElement("li");
var mainMenuDivUlLi3Txt = document.createTextNode(main.item3);
var mainMenuDivUlLi4 = document.createElement("li");
var mainMenuDivUlLi4Txt = document.createTextNode(main.item4);


var sideDiv =document.createElement("div");
sideDiv.setAttribute("class", "side")
var sideDivHead = document.createElement("h1");
var sideDivHeadTxt = document.createTextNode("Sides");
var sideDivUl = document.createElement("ul");
var sideDivUlLi1 = document.createElement("li");
var sideDivUlLi1Txt = document.createTextNode(sides.item1);
var sideDivUlLi2 = document.createElement("li");
var sideDivUlLi2Txt = document.createTextNode(sides.item2);






mainDiv.appendChild(mainHead);
mainHead.appendChild(mainHeadTxt);



mainDiv.appendChild(shareDiv);
shareDiv.appendChild(shareDivHead);
shareDivHead.appendChild(shareDivHeadTxt);
shareDiv.appendChild(shareDivUl);
shareDivUl.appendChild(shareDivUlLi1);
shareDivUlLi1.appendChild(shareDivUlLi1Txt);
shareDivUl.appendChild(shareDivUlLi2);
shareDivUlLi2.appendChild(shareDivUlLi2Txt);
shareDivUl.appendChild(shareDivUlLi3);
shareDivUlLi3.appendChild(shareDivUlLi3Txt);


mainDiv.appendChild(mainMenuDiv)
mainMenuDiv.appendChild(mainMenuDivHead);
mainMenuDivHead.appendChild(mainMenuDivHeadTxt);
mainMenuDiv.appendChild(mainMenuDivUl);
mainMenuDivUl.appendChild(mainMenuDivUlLi1);
mainMenuDivUlLi1.appendChild(mainMenuDivUlLi1Txt);
mainMenuDivUl.appendChild(mainMenuDivUlLi2 );
mainMenuDivUlLi2.appendChild(mainMenuDivUlLi2Txt);
mainMenuDivUl.appendChild(mainMenuDivUlLi3 );
mainMenuDivUlLi3.appendChild(mainMenuDivUlLi3Txt);
mainMenuDivUl.appendChild(mainMenuDivUlLi4 );
mainMenuDivUlLi4.appendChild(mainMenuDivUlLi4Txt);

mainDiv.appendChild(sideDiv);
sideDiv.appendChild(sideDivHead);
sideDivHead.appendChild(sideDivHeadTxt);
sideDiv.appendChild(sideDivUl);
sideDivUl.appendChild(sideDivUlLi1);
sideDivUlLi1.appendChild(sideDivUlLi1Txt);
sideDivUl.appendChild(sideDivUlLi2);
sideDivUlLi2.appendChild(sideDivUlLi2Txt);



