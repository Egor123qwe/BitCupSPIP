const headerMenu = document.querySelector(".header-menu"); 
const burgerButton = document.querySelector(".burger-button"); 
 
let isNavBarShowed = false; 
 
burgerButton.addEventListener("click", function() { 
    if (isNavBarShowed) { 
        headerMenu.classList.remove("showen"); 
        burgerButton.classList.remove("black"); 
    } 
    else { 
        headerMenu.classList.add("showen"); 
        burgerButton.classList.add("black"); 
    } 
 
    isNavBarShowed = !isNavBarShowed; 
    console.log(isNavBarShowed)
});