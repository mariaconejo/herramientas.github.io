const acordeon = document.querySelectorAll('.acordeon');

for(let i = 0; i < acordeon.length; i++){
    acordeon[i].addEventListener('click', (event)=>{
        event.preventDefault();
        const elemento = event.currentTarget;
        let info = elemento.nextElementSibling;
        if (info.style.display == "block") {
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }
    }
    )
}