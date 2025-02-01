export default function loadHeader(){
  const headerCtn = document.createElement("header");
  headerCtn.classList.add("container");
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent="someRestaurant";

  const nav = document.createElement("nav");
  const navEls = ["home", "menu", "contact"];

  navEls.forEach(el => {
    const btn = document.createElement("button");
    btn.classList.add(el);
    btn.textContent=el;
    nav.appendChild(btn);
  });

  const content = document.createElement("div")
  content.setAttribute("id", "content")
  content.classList.add("container")
  headerCtn.append(logo, nav);
  document.body.append(headerCtn, content);
}