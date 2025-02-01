# TOP Restaurant Page 
A minimal restaurant page with multiple pages functionalities build with webpack and modular components.
To note though this is only made for learning purposes so there wasn't really much effort put into the styling and actual content.

## Live preview
[View Live Site](https://lm2u.github.io/odin-restaurant)

## Key Learnings
- Import and export in ES6.
- Basic webpack for html and css.
- Use array of objects to loop and append multiple img attached to a div.
```js
  const contacts = [
    {img:phoneImg , alt:"phone" , text:"+123 456 789" },
    {img:locationImg , alt:"location" , text:"somePlace, abc.123" },
    {img:mailImg , alt:"mail" , text:"email@address.com" },
  ]
```
- And destructuring operator for assigning those properties:
```js
  contacts.forEach(({img, alt, text}) => {
    // declarations
    icon.src = img;
    icon.alt = alt;
    span.textContent = text;
  })
```

## Build instructions

Use javascript only to load the different pages.
Put the contents of each page to its own modules.
Each module will export a function that creates a div element, adds the appropriate content and styles, then appends it to the DOM.
Tab switching logic should be in the index.js file.
Each button should have an event listener that clears out #content, then runs the correct page module to populate it.

## Steps
1. Separate each page to its own modules.
    - loadHome.js for the home page
    - loadMenu.js for the menu page
    - loadContact.js for the contact page
    - addHover.js for the nav hover effect
2. On button click in index.js, clear content, then call the respective module.
3. The modules are where the dom creation is.
4. Add hover styles using css and to maintain active state with addHover.js

## Further improvements
1. Populate with actual food and content.
2. Eliminate styles.css and do styling in their respective module(?)