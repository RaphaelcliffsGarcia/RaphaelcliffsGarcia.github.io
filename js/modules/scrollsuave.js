function suaveScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const secction = document.querySelector(href);
    secction.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((links) => {
    links.addEventListener("click", scrollToSection);
  });
}

export default suaveScroll;
