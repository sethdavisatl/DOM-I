const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let theNav = document.querySelectorAll('nav a');
theNav[0].textContent = siteContent['nav']['nav-item-1'];
theNav[1].textContent = siteContent['nav']['nav-item-2'];
theNav[2].textContent = siteContent['nav']['nav-item-3'];
theNav[3].textContent = siteContent['nav']['nav-item-4'];
theNav[4].textContent = siteContent['nav']['nav-item-5'];
theNav[5].textContent = siteContent['nav']['nav-item-6'];

// CTA 
let ctaImg = document.getElementById("cta-img");
  ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

 let ctaH1 = document.querySelector('.cta-text h1');

   ctaH1.textContent = siteContent["cta"]["h1"];

 let ctaButton = document.querySelector('.cta-text button');

   ctaButton.textContent = siteContent["cta"]["button"];

 //main-content

 let mainTextContentH4 = document.querySelectorAll('.text-content h4');

   mainTextContentH4[0].textContent = siteContent["main-content"]["features-h4"];
  mainTextContentH4[1].textContent = siteContent["main-content"]["about-h4"];

 let mainTextContentP = document.querySelectorAll('.text-content p');

   mainTextContentP[0].textContent = siteContent["main-content"]["features-content"];
  mainTextContentP[1].textContent = siteContent["main-content"]["about-content"];

 let middleImg = document.getElementById("middle-img");

   middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

 //bottom-content

 let bottomTextContentH4 = document.querySelectorAll('.bottom-content h4');

   bottomTextContentH4[0].textContent = siteContent["main-content"]["services-h4"];  
  bottomTextContentH4[1].textContent = siteContent["main-content"]["product-h4"];
  bottomTextContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

 let bottomTextContentP = document.querySelectorAll('.bottom-content p');

   bottomTextContentP[0].textContent = siteContent["main-content"]["services-content"];
  bottomTextContentP[1].textContent = siteContent["main-content"]["product-content"];
  bottomTextContentP[2].textContent = siteContent["main-content"]["vision-content"];

 //contact

 let contactH4 = document.querySelector ('.contact h4');

   contactH4.textContent = siteContent["contact"]["contact-h4"];

 let contactP = document.querySelectorAll('.contact p');

   contactP[0].textContent = siteContent["contact"]["address"];
  contactP[1].textContent = siteContent["contact"]["phone"];
  contactP[2].textContent = siteContent["contact"]["email"];

 //footer

 let footerP = document.querySelector ('footer p');

   footerP.textContent = siteContent["footer"]["copyright"];

 //Task 4 Items:
//change nav text to green

document.querySelectorAll('nav a').forEach(e => e.style.color = "green");

//  theNav[0].style.color = 'green';
//  theNav[1].style.color = 'green';
//  theNav[2].style.color = 'green';
//  theNav[3].style.color = 'green';
//  theNav[4].style.color = 'green';
//  theNav[5].style.color = 'green';

 //Select Navigation to Change

 let navMenu = document.querySelector('nav');

 //append Navigation 

 const postNav = document.createElement('a');
  postNav.innerText = 'After';
  postNav.href = '#';
  postNav.style = 'color: green;';
  navMenu.append(postNav);

 //prepend Navigation

 const preNav = document.createElement('a');
  preNav.innerText = 'Before';
  preNav.href = '#';
  preNav.style = 'color: green;';
  navMenu.prepend(preNav);