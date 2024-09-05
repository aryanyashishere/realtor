const navbar = document.getElementById("navbar-id");
    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        if (scroll > 33) {
            navbar.style.backgroundImage = "radial-gradient(circle, rgba(10,60,155,1) 15%, rgba(223,125,157,1) 33%, rgba(67,100,205,1) 97%"
        } else {
            navbar.style.backgroundImage = "none"
        }
    })

    const dropDownBtn = document.getElementById("drop-text");
    const dropLists = document.getElementById("drop-list");
    const icon = document.getElementById("drop-icon");
    const dropSpan = document.getElementById("drop-span");
    const dropItems = document.querySelectorAll(".dropdown-list-item");
    const input =  document.getElementById("search-input");



    dropDownBtn.addEventListener("click", ()=>{

        if (dropLists.classList.contains('show')) {
            icon.style.rotate= "0deg";  
        }else{
            
            icon.style.rotate= "-180deg";
        }
        dropLists.classList.toggle('show');
    })

    window.addEventListener("click", (e)=>{
        if (e.target.id !== 'drop-text' &&
            e.target.id !== 'drop-icon' &&
            e.target.id !== 'drop-span'
        ) {
           dropLists.classList.remove('show');
           icon.style.rotate= '0deg';
        }
    })

for(items of dropItems){
    items.addEventListener('click', (e)=>{
        dropSpan.innerText = e.target.innerText;
        input.placeholder = "Search " + e.target.innerText;
    })
}

const menuBtn = document.getElementById("hamburger");
const crossBtn = document.getElementById("hamcross");
const offscreen = document.getElementById("off-screen-menu");
menuBtn.addEventListener("click", ()=>{
    menuBtn.style.display = "none";
    crossBtn.style.display = "inline";
    offscreen.style.display = "flex";

}
)

crossBtn.addEventListener("click", ()=>{
    menuBtn.style.display = "inline";
    crossBtn.style.display = "none";
    offscreen.style.display = "none";

}
)






