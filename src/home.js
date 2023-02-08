import "./style.css";

function home(){
    const div = document.getElementById("tabContent");
    
    const firstText = document.createElement("p");
    firstText.textContent = "Your favourite italian restaurant with highest quality seasonal ingredients.";
    firstText.classList.add("firstText");

    const mainText = document.createElement("p");
    mainText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor ullamcorper ex ac interdum. Aliquam pellentesque leo finibus tellus rhoncus, vel sodales dui dignissim. Morbi interdum justo vitae mollis fermentum. Proin odio mi, vehicula ac semper at, vestibulum eget nibh. Suspendisse mattis cursus imperdiet. Suspendisse id interdum tortor, et pellentesque diam. Quisque tempus elit vel lectus consectetur tincidunt."
    mainText.classList.add("mainText");

    div.appendChild(firstText);
    div.appendChild(mainText);

    return div;
}

export default home;