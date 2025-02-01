function loadMenu(){
  const main = document.getElementById("content")
  const menuSection = document.createElement("section")
  menuSection.setAttribute("class", "menu-section")
  const menuTitle = document.createElement("h1")
  menuTitle.textContent="our menu"
  menuTitle.setAttribute("class", "menu__title")

  const menuGrid = document.createElement("div")
  menuGrid.setAttribute("class", "menu__grid")
  for (let i = 0; i < 6; i++) {
    const item = document.createElement("div")
    item.setAttribute("class", "menu__item")
    item.textContent="something delicious."
    menuGrid.appendChild(item)
  }

  menuSection.appendChild(menuTitle)
  menuSection.appendChild(menuGrid)
  main.appendChild(menuSection)
}

export default loadMenu;