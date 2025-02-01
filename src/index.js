import "./styles.css";
import loadHome from "./components/loadHome";
import loadMenu from "./components/loadMenu";
import loadContact from "./components/loadContact";
import addHover, {setHomeActive} from "./components/addHover"

document.addEventListener("DOMContentLoaded", () => {
  loadHome();
  addHover();
  setHomeActive();
});

const header = document.querySelector("header")

header.addEventListener("click",(e)=>{
  const target = e.target.classList[0]
  if (target === "home" || target === "logo") {
    clearContent()
    loadHome();
  }else if (target === "menu") {
    clearContent()
    loadMenu();
  }else if (target === "contact") {
    clearContent()
    loadContact();
  }

})

function clearContent(){
  const main = document.getElementById("content")
  main.innerHTML = "";
}