const changeBtn = document.querySelector("#change-mode");

changeBtn.addEventListener("change", ()=> {
    document.body.classList.toggle("dark");
});