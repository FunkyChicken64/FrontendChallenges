# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshots-of-my-final-project)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learnt](#what-i-learnt)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshots of my final project
<span>
<img src="./images/desktop-complete.png" height=400>
<img src="./images/mobile-complete.png" height=400>
</span>

### Links
- Live Site URL: [project site hosted on Netlify](https://main--zippy-salmiakki-cc4085.netlify.app/)

## My process

Started with mobile design first. Created the utility classes (fonts, colors, sizes), followed by the buttons and layout.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learnt

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

```html css
picture id="perfume-image" >
  <source
    media="(min-width: 35em)"
    srcset="images/image-product-desktop.jpg"
  />
  <img
    src="images/image-product-mobile.jpg"
    alt="the Perfume, Gabrielle Essence Eau De Parfum"
  />
</picture>
```

### Continued development

- Improving the look while on small desktop screens and image spacing.
- Using JSON data for dynamic and multipurpose use, instead of static html and css.

### Useful resources

- [Create a Design System with CSS](https://www.youtube.com/watch?v=lRaL-8qZ0mM) - This helped me for use more complex CSS tools. I really liked this pattern and will use it going forward.
- [Controlling ratios of flex items along the main axis](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax) - This is an amazing article which helped me finally understand flex item control. I'd recommend it to anyone still learning this concept.

