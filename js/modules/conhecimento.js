function conhecimento() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  function activeTab(tabClass) {
    // Remove a classe "ativo" de todas as seções
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });

    // Adiciona a classe "ativo" à seção correspondente à classe do li
    const matchingSection = document.querySelector(
      `.js-tabcontent section.${tabClass}`
    );
    if (matchingSection) {
      matchingSection.classList.add("ativo");
    }
  }

  tabMenu.forEach((itemMenu) => {
    itemMenu.addEventListener("click", () => {
      // Obtém diretamente a classe do li
      const tabClass = itemMenu.classList[0];
      activeTab(tabClass);
    });
  });
}

export default conhecimento;
