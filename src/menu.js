import "./style.css";
import Lasagne from "./images/lasagne.jpg";
import Carbonara from "./images/carbonara.jpg";
import Tiramisu from "./images/tiramisu.jpg";
import Aperol from "./images/aperol.jpg";

function firstDish(){
    const dish = document.createElement("div");
    dish.classList.add("dish");

    const image = new Image();
    image.src = Lasagne;
    image.classList.add("image");
    
    const container = document.createElement("div");
    container.classList.add("contianer");
    
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = "lasagne"

    const discription = document.createElement("p");
    discription.classList.add("discription");
    discription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor ullamcorper ex ac interdum. Aliquam pellentesque leo finibus tellus rhoncus, vel sodales dui dignissim."

    container.appendChild(title);
    container.appendChild(discription);
    dish.appendChild(image);
    dish.appendChild(container);

    return dish;
}

function secondDish(){
    const dish = document.createElement("div");
    dish.classList.add("dish");

    const image = new Image();
    image.src = Carbonara;
    image.classList.add("image");
    
    const container = document.createElement("div");
    container.classList.add("contianer");
    
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = "carbonara"

    const discription = document.createElement("p");
    discription.classList.add("discription");
    discription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor ullamcorper ex ac interdum. Aliquam pellentesque leo finibus tellus rhoncus, vel sodales dui dignissim."

    container.appendChild(title);
    container.appendChild(discription);
    dish.appendChild(container);
    dish.appendChild(image);

    return dish;
}

function thirdDish(){
    const dish = document.createElement("div");
    dish.classList.add("dish");

    const image = new Image();
    image.src = Tiramisu;
    image.classList.add("image");
    
    const container = document.createElement("div");
    container.classList.add("contianer");
    
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = "tiramisu"

    const discription = document.createElement("p");
    discription.classList.add("discription");
    discription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor ullamcorper ex ac interdum. Aliquam pellentesque leo finibus tellus rhoncus, vel sodales dui dignissim."

    container.appendChild(title);
    container.appendChild(discription);
    dish.appendChild(image);
    dish.appendChild(container);

    return dish;
}

function fourthDish(){
    const dish = document.createElement("div");
    dish.classList.add("dish");

    const image = new Image();
    image.src = Aperol;
    image.classList.add("image");
    
    const container = document.createElement("div");
    container.classList.add("contianer");
    
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = "aperol"

    const discription = document.createElement("p");
    discription.classList.add("discription");
    discription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor ullamcorper ex ac interdum. Aliquam pellentesque leo finibus tellus rhoncus, vel sodales dui dignissim."

    container.appendChild(title);
    container.appendChild(discription);
    dish.appendChild(container);
    dish.appendChild(image);

    return dish;
}

function menu(){
    const div = document.getElementById("tabContent");

    const firstText = document.createElement("p");
    firstText.textContent = "Our specialties:";
    firstText.classList.add("firstText");

    div.appendChild(firstText);
    div.appendChild(firstDish());
    div.appendChild(secondDish());
    div.appendChild(thirdDish());
    div.appendChild(fourthDish());

    return div;
}

export default menu;