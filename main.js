document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header")
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    const isScrollingDown = window.scrollY > lastScrollY
    header.classList.toggle("hidden-header", isScrollingDown)
    header.classList.toggle("visibled-header", !isScrollingDown)
    lastScrollY = window.scrollY
  })
})
