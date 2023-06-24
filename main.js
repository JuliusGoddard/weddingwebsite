const divs = document.querySelectorAll(".divider")


const observer = new IntersectionObserver(divs => {
    divs.forEach(div => {
        div.target.classList.toggle('show', entry.isIntersecting)
    })
})

divs.forEach(div => {
    observer.observe(div)
})