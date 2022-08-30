const changeBtn = document.querySelector("#change-mode");

function toggleDarkMode (){
    document.body.classList.toggle("dark");
}

function loadTheme(){
    let darkMode = localStorage.getItem("dark")

    if(darkMode){
        toggleDarkMode()
    }
};
loadTheme()
changeBtn.addEventListener("change", ()=> {
    toggleDarkMode();

    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1)
    }
});