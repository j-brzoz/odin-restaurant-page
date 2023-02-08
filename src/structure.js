import "./style.css";

function header(){
    const headerDiv = document.createElement("div");
    headerDiv.textContent = "vacanze";
    headerDiv.classList.add("header");
    
    return headerDiv;
}

function tabs(){
    const tabsDiv = document.createElement("div");
    tabsDiv.classList.add("tabs");

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

    return tabsDiv;
}

function content(){
    const contentDiv = document.createElement("div")
    contentDiv.setAttribute("id", "content");
    contentDiv.classList.add("content");

    contentDiv.appendChild(tabs());

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