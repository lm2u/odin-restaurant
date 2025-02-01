function loadHome(){
  const main = document.getElementById("content")
  const homeSection = document.createElement("section")
  homeSection.setAttribute("class", "home-section")
  const homeTitle = document.createElement("h1")
  homeTitle.textContent="coming soon."
  homeTitle.setAttribute("class", "home__title")

  homeSection.appendChild(homeTitle)
  main.appendChild(homeSection)
}

export default loadHome;