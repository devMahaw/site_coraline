document.addEventListener("DOMContentLoaded", function() {
    const radios = document.querySelectorAll("[data-tab-id]");
    
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("click", function(id) {
            console.log(id);
        })
    }

    function hideInput() {
        const radios = document.querySelectorAll("[data-tab-id]");

        for (let i = 0; i < radios.length; i++) {
            radios[i].classList.remove("is-active");
        }
    }
})