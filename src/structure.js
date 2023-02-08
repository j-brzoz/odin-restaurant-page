import "./style.css";
import home from "./home"
import menu from "./menu"
import contact from "./contact"

function cleanContent(){
    const div = document.getElementById("tabContent");
    div.innerHTML = "";
}


function header(){
    const headerDiv = document.createElement("div");
    headerDiv.textContent = "vacanze";
    headerDiv.classList.add("header");

    return headerDiv;
}

function tabs(){
    const tabsDiv = document.createElement("div");
    tabsDiv.classList.add("tabs");
    tabsDiv.setAttribute("child", false)

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "home";
    homeBtn.setAttribute("id", "home");

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "menu";
    menuBtn.setAttribute("id", "menu");

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "contact us";
    contactBtn.setAttribute("id", "contact");

    tabsDiv.appendChild(homeBtn);
    tabsDiv.appendChild(menuBtn);
    tabsDiv.appendChild(contactBtn);

    homeBtn.addEventListener("click", () => cleanContent());
    homeBtn.addEventListener("click", () => home());

    menuBtn.addEventListener("click", () => cleanContent());
    menuBtn.addEventListener("click", () => menu());

    contactBtn.addEventListener("click", () => cleanContent());
    contactBtn.addEventListener("click", () => contact());

    return tabsDiv;
}

function content(){
    const contentDiv = document.createElement("div")
    contentDiv.classList.add("content");

    const tabContent = document.createElement("div")
    tabContent.setAttribute("id", "tabContent");

    contentDiv.appendChild(tabs());
    contentDiv.appendChild(tabContent);

    return contentDiv;
}


function main(){
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");

    mainDiv.appendChild(content());

    return mainDiv;
}

function footer(){
    const footerDiv = document.createElement("div");
    footerDiv.textContent = "Project from The Odin Project course by Jan Brzozowski";
    footerDiv.classList.add("footer");

    return footerDiv;
}

function websiteSturcture(){
    document.body.appendChild(header());
    document.body.appendChild(main());
    document.body.appendChild(footer());
}

export default websiteSturcture;