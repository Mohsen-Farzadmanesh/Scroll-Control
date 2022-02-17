let element = document.querySelectorAll(".Scroll-Control");

element.forEach((el) => {
    let elat = el.getAttribute("scrollcnt");
    document.addEventListener("scroll", () => {
        if (elat != "defult" & (window.scrollY >= elat)) {
              console.log('hello')
            // el.classList.add("active");
        }
        if (elat == "defult") {
            let elY = el.offsetTop;
            if (window.scrollY >= elY) {
                el.classList.add("active");
            }
        }
    });
});
