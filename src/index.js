import "./styles.css";
import loadHome from "./components/loadHome";
import loadMenu from "./components/loadMenu";
import loadContact from "./components/loadContact";

document.addEventListener("click",(e)=>{
  clearContent()
  const btnClass = e.target.className
  if (btnClass === "home") {
    loadHome();
  }
  if (btnClass === "menu") {
    loadMenu();
  }
  if (btnClass === "contact") {
    loadContact();
  }
})

function clearContent(){
  const main = document.getElementById("content")
  main.innerHTML = "";
}