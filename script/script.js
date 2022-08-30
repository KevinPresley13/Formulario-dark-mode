const changeBtn = document.querySelector("#change-mode");

function toggleDarkMode (){
    document.body.classList.toggle("dark");
}

changeBtn.addEventListener("change", ()=> {
    toggleDarkMode();
});