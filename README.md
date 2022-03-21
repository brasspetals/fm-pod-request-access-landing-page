# Frontend Mentor - Pod request access landing page solution

![Design preview for the Pod request access landing page coding challenge](./preview.jpg)

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). 

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The Challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://fm-pod-request-access-landing-page-psi.vercel.app/](https://fm-pod-request-access-landing-page-psi.vercel.app/)

## My Process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Flexbox
- Mobile-first workflow
- JS

### What I Learned

After a very long coding break, I decided to stick with plain, old CSS and JS for this project as a bit of a warm up. 

While the project was pretty straightforward, I did run into a rather odd bug. In Safari, I noticed the podcast svgs were blurry. After some testing, it seems that svgs that have a filter *and* are also in an img tag are blurred. If the filtered svgs are inline, they display just fine. The only suggestions I found online were to add ```-webkit-transform: translate3d(0,0,0)``` and/or ```-webkit-filter: blur(0px);```. Unfortunately, neither worked in this case.

Since the grey filter on the podcast svgs in the starter code didn't quite match the color in the design files anyway, I ended up editing the svg files to remove the filter and manually change the color to match the design.

## Author

- Frontend Mentor - [@brasspetals](https://www.frontendmentor.io/profile/brasspetals)
