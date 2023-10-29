document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button");
    const load = document.querySelector(".load");
    const coraline = document.querySelector(".coraline");
    const wybie = document.querySelector(".wybie");
    const cat = document.querySelector(".cat");
    
    const min = 1
    const max = 3

    button.addEventListener("click", function() {
        const result = Math.floor((Math.random() * max) + min);

        hideActive();

        load.classList.add("is-active");

        setTimeout(function() {
            load.classList.remove("is-active");
        }, 2000);

        setTimeout(function() {
            if (result === 1) {
                coraline.classList.add("is-active");
            } else if (result === 2) {
                wybie.classList.add("is-active");
            } else {
                cat.classList.add("is-active");
            }
        }, 2000);
    })

    function hideActive() {
        const elements = document.querySelectorAll(".sorter-container-list-items");
    
        elements.forEach(function(element) {
            if (element.classList.contains("is-active")) {
                element.classList.remove("is-active");
            }
        });
    }
});