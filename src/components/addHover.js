export default function addHover(){
  const logo = document.querySelector(".logo");
  const home = document.querySelector(".home")
  let activeEl = null;

  logo.addEventListener("click", () => setActive(home));
  setActive(home);

  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", ()=>{
      setActive(btn)
    })
  })

  function setActive(btn){
    console.log(activeEl)
    if (activeEl) {
      activeEl.classList.remove("active")
    }
    btn.classList.add("active")
    activeEl = btn;
  }



}

export function setHomeActive(){
  const home = document.querySelector(".home")
  home.classList.add("active")
}
