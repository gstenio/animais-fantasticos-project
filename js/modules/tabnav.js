// Navegação por tabs
export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "active";
  }

  // Ativa a tab de acordo com o seu index.
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direction = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direction);
  }

  // Adiciona os eventos nas tabs.
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativa o primeiro item.
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
