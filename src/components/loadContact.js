import locationImg from '../location.svg';
import mailImg from '../mail.svg';
import phoneImg from '../phone.svg';
import overlayImg from '../phone-overlay.png';

function loadContact(){
  const main = document.getElementById("content")
  const contactSection = document.createElement("section")
  contactSection.setAttribute("class", "contact-section")
  const contactTitle = document.createElement("h1")
  contactTitle.textContent="contact us!"
  contactTitle.setAttribute("class", "contact__title")

  const wrapper = document.createElement("div")
  wrapper.setAttribute("class", "contact__wrapper")

  for (let i = 0; i < 3; i++) {
    const item = document.createElement("div")
    item.setAttribute("class", "contact__item")
    const img = document.createElement("img")
    const span = document.createElement("span")
    if(i == 0) {
      img.src = locationImg;
      img.alt="location";
      span.textContent = '+123 456 789';
    }
    if(i == 1) {
      img.src = mailImg;
      img.alt="mail";
      span.textContent = 'somePlace, abc.123';
    }
    if(i == 2) {
      img.src = phoneImg;
      img.alt="phone";
      span.textContent = 'email@address.com';
    }

    item.appendChild(img)
    item.appendChild(span)
    wrapper.appendChild(item)
  }

  contactSection.appendChild(contactTitle)
  contactSection.appendChild(wrapper)
  main.appendChild(contactSection)

}

export default loadContact;