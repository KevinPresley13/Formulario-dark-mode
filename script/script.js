const changeBtn = document.querySelector("#change-mode");

function toggleDarkMode (){
    document.body.classList.toggle("dark");
}

changeBtn.addEventListener("change", ()=> {
    toggleDarkMode();

    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1)
    }
});