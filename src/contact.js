import "./style.css";
import Location from "./images/location.png";

function contact(){
    const div = document.getElementById("tabContent");

    const info = document.createElement("div");
    info.classList.add("dish");

    const image = new Image();
    image.src = Location;
    image.classList.add("image");

    const container = document.createElement("div");
    container.classList.add("container");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("discription");
    contactInfo.textContent = "Phone number: 123 456 789 \r\n";
    contactInfo.textContent += "Email: vacanze@gmail.com";

    const locationInfo = document.createElement("div");
    locationInfo.classList.add("discription");
    locationInfo.textContent = "Address: 73 Wooster St, New York, NY 10012, USA"
    
    container.appendChild(contactInfo);
    container.appendChild(document.createElement("br"));
    container.appendChild(locationInfo);
    info.append(container);
    info.append(image);
    div.append(info);

    return div;
}

export default contact;