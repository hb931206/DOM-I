const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo (Images)
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let cta = document.getElementById("cta-img");
cta.src = "img/header-img.png";

let mid = document.getElementById("middle-img");
mid.src = "img/mid-page-accent.jpg";

// Nav
const navg = document.querySelectorAll("nav a");
navg[0].textContent = siteContent["nav"]["nav-item-1"];
navg[1].textContent = siteContent["nav"]["nav-item-2"];
navg[2].textContent = siteContent["nav"]["nav-item-3"];
navg[3].textContent = siteContent["nav"]["nav-item-4"];
navg[4].textContent = siteContent["nav"]["nav-item-5"];
navg[5].textContent = siteContent["nav"]["nav-item-6"];

const cola = document.querySelectorAll("a");
cola.forEach(element => {
  element.style.color = "green";
});

const newContent = document.createElement("a");
newContent.textContent = "Ideas";
newContent.style.color = "green";

const conwork = document.createElement("a");
conwork.textContent = "Work";
conwork.style.color = "green";

const navapp = document.querySelector("nav");
navapp.appendChild(newContent);
navapp.appendChild(conwork);

// // H1 and button
const title = document.querySelector(".cta-text h1");
title.textContent = siteContent["cta"]["h1"];

const button = document.querySelector(".cta .cta-text button");
button.textContent = "Get Started";

// Middle Section is in the middle Section
const midtitle = document.querySelectorAll(".text-content h4");
midtitle[0].textContent = siteContent["main-content"]["features-h4"];
midtitle[1].textContent = siteContent["main-content"]["about-h4"];
midtitle[2].textContent = siteContent["main-content"]["services-h4"];
midtitle[3].textContent = siteContent["main-content"]["product-h4"];
midtitle[4].textContent = siteContent["main-content"]["vision-h4"];

const midp = document.querySelectorAll(".text-content p");
midp[0].textContent = siteContent["main-content"]["features-content"];
midp[1].textContent = siteContent["main-content"]["about-content"];
midp[2].textContent = siteContent["main-content"]["services-content"];
midp[3].textContent = siteContent["main-content"]["product-content"];
midp[4].textContent = siteContent["main-content"]["vision-content"];

// contact
const con = document.querySelector(".contact");
con.textContent = siteContent["contact-h4"]["Contact"];

const conp = document.querySelectorAll(".contact");
conp[0].textContent = siteContent["contact"]["address"];

// footer
let foot = document.querySelectorAll("footer");
foot.textContent = siteContent["footer"]["copyright"];
