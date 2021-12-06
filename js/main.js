// active navbar
let nav = document.querySelector("navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    }
    else {
        nav.classList.remove("scroll-on");
    }
}

//nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
}
)


//counter design 
document.addEventListener("DOMContentLoaded", () => {
    function counter(Id, start, end, duration) {
        let obj = document.getElementById(Id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 120, 400);
    counter("count2", 100, 1200, 2500);
    counter("count3", 0, 1200, 3000);
    counter("count4", 0, 1200, 3000);
})