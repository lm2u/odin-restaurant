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

  const contacts = [
    {img:phoneImg , alt:"phone" , text:"+123 456 789" },
    {img:locationImg , alt:"location" , text:"somePlace, abc.123" },
    {img:mailImg , alt:"mail" , text:"email@address.com" },
  ]

  contacts.forEach(({img, alt, text}) => {
    const item = document.createElement("div")
    item.setAttribute("class", "contact__item")
    const icon = document.createElement("img")
    const span = document.createElement("span")

    icon.src = img;
    icon.alt = alt;
    span.textContent = text;

    item.append(icon, span)
    wrapper.appendChild(item)
  })

  contactSection.appendChild(contactTitle)
  contactSection.appendChild(wrapper)
  main.appendChild(contactSection)

}

export default loadContact;