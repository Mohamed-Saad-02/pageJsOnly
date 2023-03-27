// Change Font Family in page , Padding And Margin
document.body.style.fontFamily = "Open Sans";
document.body.style.margin = "0";

// Create Element => Container
let container = document.createElement("div");
// Add Class Name to => Container
container.classList.add("container");

// Add media query to Container

window.addEventListener("load", () => {
  startQuerySmall();
  startQueryMid();
  startQueryLarge();
  mediaQueryGridMobile();
  addProperties();
  responsiveHeaderAndLanding();
  responsiveServices();
  responsivePortfolio();
  responsiveAboutUs();
  responsiveAboutUsMobile();
  responsiveBlog();
  responsiveContact();
});

function startQuerySmall() {
  let mediaQuery = window.matchMedia(
    "(min-width: 768px) and (max-width: 991px)"
  );

  let ifMatchesChange = (e) => {
    if (e.matches) {
      document.querySelectorAll(".container").forEach((con) => {
        con.style.cssText +=
          "padding-left: 15px; padding-right: 15px; margin-left: auto; margin-right: auto; width: 750px";
      });
    } else {
      document.querySelectorAll(".container").forEach((con) => {
        con.style.cssText +=
          "padding-left: 15px; padding-right: 15px; margin-left: auto; margin-right: auto; width: auto";
      });
    }
  };

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

function startQueryMid() {
  let mediaQuery = window.matchMedia(
    "(min-width: 992px) and (max-width: 1199px)"
  );

  let ifMatchesChange = (e) => {
    if (e.matches) {
      document.querySelectorAll(".container").forEach((con) => {
        con.style.cssText +=
          "padding-left: 15px; padding-right: 15px; margin-left: auto; margin-right: auto; width: 970px";
      });
      document.querySelectorAll(".res-two-columns").forEach((el) => {
        el.style.cssText +=
          "display: grid; grid-template-columns: repeat(auto-fill, minmax(450px, 1fr))";
      });
    }
  };

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

function startQueryLarge() {
  let mediaQuery = window.matchMedia("(min-width: 1200px)");

  let ifMatchesChange = (e) => {
    if (e.matches) {
      document.querySelectorAll(".container").forEach((con) => {
        con.style.cssText +=
          "padding-left: 15px; padding-right: 15px; margin-left: auto; margin-right: auto; width: 1170px";
      });
      document.querySelectorAll(".res-two-columns").forEach((el) => {
        el.style.cssText +=
          "display: grid; grid-template-columns: repeat(auto-fill, minmax(450px, 1fr))";
      });
    }
  };

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

// responsive Mobile => Grid

function mediaQueryGrid() {
  let mediaQuery = window.matchMedia("(min-width: 768px)");

  let ifMatchesChange = (e) => {
    if (e.matches) {
      document.querySelectorAll(".res-two-columns").forEach((el) => {
        el.style.cssText +=
          "display: grid; grid-template-columns: repeat(auto-fill, minmax(450px, 1fr))";
      });

      document.querySelectorAll(".res-three-columns").forEach((el) => {
        el.style.cssText +=
          "display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))";
      });

      document.querySelectorAll(".res-four-columns").forEach((el) => {
        el.style.cssText +=
          "display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))";
      });
    }
  };

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

function mediaQueryGridMobile() {
  let mediaQuery = window.matchMedia("(max-width: 767px)");

  let ifMatchesChange = (e) => {
    if (e.matches) {
      document.querySelectorAll(".res-mobile").forEach((el) => {
        el.style.cssText +=
          "display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))";
      });

      document.querySelectorAll(".res-two-columns").forEach((el) => {
        el.style.cssText +=
          "display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))";
      });

      document.querySelectorAll(".res-three-columns").forEach((el) => {
        el.style.cssText +=
          "display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))";
      });

      document.querySelectorAll(".res-four-columns").forEach((el) => {
        el.style.cssText +=
          "display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))";
      });
    } else {
      document.querySelectorAll(".res-mobile").forEach((el) => {
        el.classList.remove("res-mobile");
      });
    }
  };

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

// Add some properties to element

function addProperties() {
  document.querySelectorAll(".bullets").forEach((el) => {
    el.style.cssText +=
      "box-sizing: border-box; position: absolute; display: flex; align-items: center; justify-content: center; left: 50%; top: 150px; transform: translateX(-50%); gap: 10px; z-index: 5;";
  });

  document.querySelectorAll(".bullet").forEach((bullet) => {
    bullet.style.cssText +=
      "width: 15px; height: 15px; background-color: #fff; border-radius: 50%; box-sizing: border-box; border: 3px solid #FFE500; ";
  });

  document.querySelectorAll(".app-bullet-child").forEach((el) => {
    el.style.cssText =
      "position: absolute; left: 50%; top: 157px; transform: translateX(-50%); box-sizing: border-box; background-color: #FFE500; width: 60px; height: 2px; z-index: 1;";
  });

  document.querySelectorAll(".main-title").forEach((el) => {
    el.style.cssText +=
      "color: #2C4755; font-size: 70px; margin: 0; text-align: center; font-weight: 600; text-transform: uppercase; position: relative";
  });

  document.querySelectorAll("div").forEach((div) => {
    div.style.cssText += "box-sizing: border-box;";
  });

  document.querySelectorAll("ul").forEach((ul) => {
    ul.style.cssText += "box-sizing: border-box; list-style: none; padding: 0;";
  });

  document.querySelectorAll("a").forEach((a) => {
    a.style.cssText +=
      "box-sizing: border-box; list-style: none; text-decoration: none";
  });

  document.querySelectorAll("img").forEach((img) => {
    img.alt = "photo";
  });
}

// Start Code

// Title Of Page
document.title = "Brands";

// Start header

let header = document.createElement("header"),
  icon = document.createElement("div"),
  bars = document.createElement("i"),
  logoIcon = document.createElement("img"),
  paginationUl = document.createElement("ul");

header.style.cssText = "background-color: #fff; padding: 10px 0";

icon.appendChild(bars);

icon.style.cssText =
  "font-size: 26px; display: flex; align-items: center; justify-content: space-between;";

bars.className = "fa-solid fa-bars";

logoIcon.src = "imgs/logo.png";

paginationUl.className = "pagination-ul links-hide";

for (let i = 1; i < 8; i++) {
  let paginationLi = document.createElement("li"),
    paginationLiElA = document.createElement("a");

  paginationLiElA.href = "#";

  paginationLiElA.style.cssText =
    "color: #334752; text-decoration: none; font-size: 15px; text-transform: uppercase; font-weight: 600";

  paginationLi.className = `link-${i}`;

  paginationLi.appendChild(paginationLiElA);
  paginationUl.appendChild(paginationLi);
}

let headerContainer = document.createElement("div");
headerContainer.classList.add("container");

icon.appendChild(logoIcon);
icon.appendChild(bars);
headerContainer.appendChild(icon);
headerContainer.appendChild(paginationUl);
header.appendChild(headerContainer);
document.body.appendChild(header);

document.querySelector(".link-1").firstChild.textContent = "home";
document.querySelector(".link-2").firstChild.textContent = "services";
document.querySelector(".link-3").firstChild.textContent = "portfolio";

document
  .querySelector(".link-1")
  .firstChild.setAttribute("data-section", "home");
document
  .querySelector(".link-2")
  .firstChild.setAttribute("data-section", "services");
document
  .querySelector(".link-3")
  .firstChild.setAttribute("data-section", "portfolio");

let img = document.createElement("img");

img.src = "imgs/logo.png";
img.alt = "logo";

document.querySelector(".link-4").firstChild.appendChild(img);
document.querySelector(".link-5").firstChild.textContent = "about us";
document.querySelector(".link-6").firstChild.textContent = "blog";
document.querySelector(".link-7").firstChild.textContent = "contact us";

document
  .querySelector(".link-5")
  .firstChild.setAttribute("data-section", "about-us");
document
  .querySelector(".link-6")
  .firstChild.setAttribute("data-section", "blog");
document
  .querySelector(".link-7")
  .firstChild.setAttribute("data-section", "contact");

// Start Style For header And another Element

paginationUl.style.cssText =
  "display: flex; align-items: center; justify-content: center; list-style: none; gap:20px; padding: 0; margin: 0";

// Start Responsive

function responsiveHeaderAndLanding() {
  let mediaQuery = window.matchMedia("(max-width: 767px)");

  let ifMatchesChange = (e) => {
    if (e.matches) {
      paginationUl.style.cssText =
        "list-style: none; padding: 0; margin: 0 ;display: flex; flex-direction: column; gap:10px; pointer-events: none; transition: 0.5s; opacity: 0; height: 0";

      document.querySelector(".link-4").style.display = "none";

      icon.style.display = "flex";

      bars.style.cssText =
        "display: block; cursor: pointer; padding: 4px; transition: 0.5s";

      lanDevText.lastElementChild.style.cssText =
        "margin: 0; font-size: 80px; text-transform: uppercase; color: #fff; font-weight: 600;";
    } else {
      paginationUl.style.cssText =
        "display: flex; align-items: center; justify-content: center; list-style: none; gap:20px; padding: 0; margin: 0";
      bars.style.display = "none";
      document.querySelector(".link-4").style.display = "block";
      icon.style.display = "none";
      lanDevText.lastElementChild.style.cssText =
        "margin: 0; font-size: 110px; text-transform: uppercase; color: #fff; font-weight: 600;";
    }
  };

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

bars.addEventListener("click", (e) => {
  e.stopPropagation();
  if (paginationUl.classList.contains("links-hide")) {
    paginationUl.style.cssText =
      "list-style: none; padding: 0; margin: 0 ; margin-top: 20px;display: flex; flex-direction: column; gap:10px; pointer-events: auto; transition: 0.5s; opacity: 1; height: 180px";
    paginationUl.classList.remove("links-hide");
    bars.style.cssText =
      "display: block; cursor: pointer; padding: 4px; outline: #2C4755 3px solid; border-radius: 4px;";
  } else {
    paginationUl.style.cssText =
      "list-style: none; padding: 0; margin: 0 ;display: flex; flex-direction: column; gap:10px; pointer-events: none; transition: 0.5s; opacity: 0; height: 0";
    paginationUl.classList.add("links-hide");
    bars.style.cssText =
      "display: block; cursor: pointer; padding: 4px; transition: 0.5s";
  }
});

document.onkeyup = function (e) {
  if (!paginationUl.classList.contains("links-hide")) {
    if (e.key == "Escape") {
      paginationUl.style.cssText =
        "list-style: none; padding: 0; margin: 0 ;display: flex; flex-direction: column; gap:10px; pointer-events: none; transition: 0.5s; opacity: 0; height: 0";
      paginationUl.classList.add("links-hide");
      bars.style.cssText =
        "display: block; cursor: pointer; padding: 4px; transition: 0.5s; outline: none";
    }
  }
};

document.addEventListener("click", (e) => {
  if (e.currentTarget !== bars && e.currentTarget !== paginationUl) {
    if (!paginationUl.classList.contains("links-hide")) {
      paginationUl.style.cssText =
        "list-style: none; padding: 0; margin: 0 ;display: flex; flex-direction: column; gap:10px; pointer-events: none; transition: 0.5s; opacity: 0; height: 0";
      paginationUl.classList.add("links-hide");
      bars.style.cssText =
        "display: block; cursor: pointer; padding: 4px; transition: 0.5s; outline: none";
    }
  }
});

paginationUl.onclick = (e) => {
  e.stopPropagation();
};

const allLinks = document.querySelectorAll("header .container ul li a");

function scrollToLinks(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();

      document
        .querySelector(`.${e.currentTarget.dataset.section}`)
        .scrollIntoView({
          behavior: "smooth",
        });
    });
  });
}

scrollToLinks(allLinks);

// End Header

// Start Landing

let main = document.createElement("main"),
  landingSection = document.createElement("section"),
  lanDevContainer = document.createElement("div"),
  lanDevText = document.createElement("div"),
  lanBtn = document.createElement("button");

landingSection.className = "landing home";
landingSection.style.cssText =
  "height: calc(100vh - 73px) ; background: #324651; display: flex; align-items: center; justify-content: center; text-align: center;";

lanDevContainer.classList.add("container");

lanDevContainer.style.cssText =
  "display: flex; align-items: center; justify-content: center; text-align: center; flex-direction: column;";

lanDevText.innerHTML = `<p>Hello,we are <span>Molly</span>,and we create</p><h1>brands</h1>`;

lanDevText.firstElementChild.style.cssText =
  "margin: 0; font-size: 20px; font-weight: 300; color: #fff; letter-spacing: 0.5px;";
lanDevText.firstElementChild.firstElementChild.style.color = "#FFE600";

lanDevText.lastElementChild.style.cssText =
  "margin: 0; font-size: 110px; text-transform: uppercase; color: #fff; font-weight: 600;";

lanBtn.textContent = "get started";
lanBtn.style.cssText =
  "outline: none; border: none; font-size: 15px; font-weight: 600; transition: 0.5s; color: #FFE600; background-color: #fff; border-radius: 20px; padding: 10px 20px; height: 40px; cursor: pointer; width: 150px; text-transform: uppercase; margin-top: 50px;";

lanBtn.addEventListener("mouseenter", (e) => {
  lanBtn.style.background = "#eee";
});
lanBtn.addEventListener("mouseleave", (e) => {
  lanBtn.style.background = "#fff";
});

lanDevContainer.appendChild(lanDevText);
lanDevContainer.appendChild(lanBtn);

landingSection.append(lanDevContainer);

main.append(landingSection);

document.body.appendChild(main);

// End Landing Section

// Start Service Section

let serSection = document.createElement("div"),
  serH2 = document.createElement("h2"),
  serContainer = document.createElement("div");

for (let g = 1; g < 5; g++) {
  let serBox = document.createElement("div"),
    serBoxIcon = document.createElement("i"),
    serBoxTxt = document.createElement("p");

  serBox.classList.add(`box`);
  serBox.classList.add(`box-${g}`);

  serBox.appendChild(serBoxIcon);
  serBox.appendChild(serBoxTxt);

  serContainer.appendChild(serBox);
}

serSection.appendChild(serH2);
serSection.appendChild(serContainer);

main.appendChild(serSection);

serSection.className = "services";
serSection.style.padding = "50px 0 0";
serSection.style.position = "relative";

serH2.className = "main-title";
serH2.textContent = "services";

document.querySelectorAll(".main-title").forEach((el) => {
  el.style.cssText +=
    "color: #2C4755; font-size: 70px; margin: 0; text-align: center; font-weight: 600; text-transform: uppercase; position: relative";
});
// Make Bullet To serH2
let appBullet = document.createElement("div");
appBullet.className = "bullets";

let appBulletChild = document.createElement("div");
appBulletChild.className = "app-bullet-child";

for (let bullets = 1; bullets < 4; bullets++) {
  let bullet = document.createElement("div");
  bullet.className = "bullet";

  appBullet.appendChild(bullet);
}

serH2.before(appBullet);
serH2.after(appBulletChild);

document.querySelectorAll(".bullets").forEach((el) => {
  el.style.cssText +=
    "box-sizing: border-box; position: absolute; display: flex; align-items: center; justify-content: center; left: 50%; top: 150px; transform: translateX(-50%); gap: 10px";
});

document.querySelectorAll(".bullet").forEach((bullet) => {
  bullet.style.cssText +=
    "width: 15px; height: 15px; background-color: #fff; border-radius: 50%; box-sizing: border-box; border: 3px solid #FFE500; ";
});

document.querySelectorAll(".app-bullet-child").forEach((el) => {
  el.style.cssText =
    "position: absolute; left: 50%; top: 157px; transform: translateX(-50%); box-sizing: border-box; background-color: #FFE500; width: 60px; height: 2px; z-index: -1;";
});

serContainer.className = "container";
serContainer.style.cssText +=
  "display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); margin-top: 100px";

document.querySelector(".box-1").firstElementChild.className =
  "fa-brands fa-html5";
document.querySelector(".box-2").firstElementChild.className =
  "fa-solid fa-paint-roller";
document.querySelector(".box-3").firstElementChild.className =
  "fa-solid fa-camera";
document.querySelector(".box-4").firstElementChild.className =
  "fa-solid fa-mobile-screen-button";

document.querySelector(".box-1").lastElementChild.textContent = "web design";
document.querySelector(".box-2").lastElementChild.textContent =
  "graphic design";
document.querySelector(".box-3").lastElementChild.textContent = "photography";
document.querySelector(".box-4").lastElementChild.textContent = "developing";

document.querySelectorAll(".services .container .box").forEach((box) => {
  box.style.cssText = "text-align: center; margin-top: 50px";
  box.firstElementChild.style.cssText = "font-size: 100px; color: #FFE600;";
  box.lastElementChild.style.cssText =
    "color: #2C4755; font-size: 20px; font-weight: 600; margin-top: 50px; text-transform: uppercase";
});

// Start details and Info

let serDetail = document.createElement("div"),
  serDetailContainer = document.createElement("div"),
  serPhone = document.createElement("div"),
  serPhoneImg = document.createElement("img"),
  serInfo = document.createElement("div"),
  serInfoMainPints = document.createElement("div"),
  serInfoTitle = document.createElement("h3"),
  serInfoUl = document.createElement("ul"),
  serBtnApp = document.createElement("div"),
  serBtn = document.createElement("button");

for (let info = 1; info < 5; info++) {
  let serInfoPints = document.createElement("li");

  serInfoPints.innerHTML = `<i class = "fa-solid fa-circle-plus"></i><span>responsive web site</span>`;
  serInfoPints.className = `point-${info}`;
  serInfoPints.style.cssText =
    "display: flex; align-items: center; justify-content: center; gap:10px; color: #fff; text-transform: capitalize; font-size: 18px";

  serInfoUl.appendChild(serInfoPints);
}

serDetail.className = "ser-details ser-two-columns";

serDetailContainer.className =
  "container res-mobile res-two-columns padding: 20px;";

serInfoTitle.textContent = "we make web design";

serInfoTitle.style.cssText =
  "font-size: 35px; font-weight: 600; color: #FFE600; text-transform: uppercase; font-weight: 600; margin: 0";

serDetail.style.cssText =
  "background-image: url(imgs/mask.png); background-size: cover; margin-top: 50px; padding-top: 50px; gap: 50px;";

serPhone.className = "box";
serInfo.className = "box";

serPhoneImg.src = "imgs/phones.png";
serPhoneImg.alt = "phones";
serPhoneImg.style.width = "100%";

serPhone.style.cssText =
  "text-align: center; width: fit-content; margin: auto;";

serInfo.style.cssText =
  "display: flex; gap: 80px; flex-direction: column; margin: auto; text-align: center;";

serInfoUl.style.cssText =
  "display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 10px; box-sizing: border-box; list-style: none; padding: 0px; margin: 0";

serBtnApp.style.cssText =
  "height: 107px; background-color: #FFE500; display: flex; align-items: center; justify-content: center; margin-top: -30px;";

serBtn.textContent = "get started";
serBtn.style.cssText =
  "outline: none; border: none; font-size: 15px; font-weight: 600; transition: all 0.5s ease 0s; color: rgb(255, 230, 0); background: rgb(255, 255, 255); border-radius: 20px; padding: 10px 20px; height: 40px; cursor: pointer; width: 150px; text-transform: uppercase;";

serPhone.appendChild(serPhoneImg);

serInfo.appendChild(serInfoTitle);
serInfo.appendChild(serInfoUl);

serDetailContainer.appendChild(serPhone);
serDetailContainer.appendChild(serInfo);

serBtnApp.appendChild(serBtn);

serDetail.appendChild(serDetailContainer);
serDetail.appendChild(serBtnApp);

serSection.appendChild(serDetail);

function responsiveServices() {
  let mediaQuery = window.matchMedia("(max-width: 991px)");

  let ifMatchesChange = function (e) {
    if (e.matches) {
      serInfoTitle.style.cssText += "margin-top: 30px";
      serInfo.style.cssText += "margin-bottom: 60px";
      serBtnApp.style.cssText += "height: 75px";
    } else {
      serInfoTitle.style.cssText += "margin-top: 0";
      serInfo.style.cssText += "margin-bottom: auto";
      serBtnApp.style.cssText += "height: 107px";
    }
  };

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

// End Service Section

// Start Portfolio Section

let portSection = document.createElement("section"),
  portContainer = document.createElement("div"),
  portMainTitle = document.createElement("h2"),
  portAppBullet = document.createElement("div"),
  portAppFilters = document.createElement("ul"),
  btnShowMore = document.createElement("button"),
  portAppBulletChild = document.createElement("div");

for (let portNumber = 1; portNumber < 10; portNumber++) {
  if (portNumber < 4) {
    let bullet = document.createElement("div");
    bullet.className = "bullet";

    portAppBullet.appendChild(bullet);
  }
  if (portNumber < 6) {
    let portFilters = document.createElement("li");

    portFilters.className = `filter-img filter-${portNumber}`;

    portFilters.setAttribute("data-filter", "all");

    portFilters.style.cssText =
      "font-size: 15px; font-weight: 600; color: #637988; text-transform: uppercase; cursor: pointer; transition: 0.5s;";

    portAppFilters.appendChild(portFilters);
  }
}

portSection.style.cssText = "padding-top: 50px; position: relative";

portSection.appendChild(portMainTitle);
portSection.appendChild(portAppFilters);
portSection.appendChild(portContainer);
portSection.appendChild(btnShowMore);

main.appendChild(portSection);

portMainTitle.before(portAppBullet);
portMainTitle.after(portAppBulletChild);

portMainTitle.className = "main-title";
portMainTitle.textContent = "portfolio";

portAppBullet.className = "bullets";

portContainer.className = "container";

portSection.className = "portfolio";

portAppBulletChild.className = "app-bullet-child";

btnShowMore.className = "show-more-img";

document.querySelector(".filter-1").textContent = "all";
document.querySelector(".filter-2").textContent = "web design";
document.querySelector(".filter-3").textContent = "graphic design";
document.querySelector(".filter-4").textContent = "photography";
document.querySelector(".filter-5").textContent = "apps";

document.querySelector(".filter-1").setAttribute("data-filter", "all");

document.querySelector(".filter-2").setAttribute("data-filter", "web-design");

document
  .querySelector(".filter-3")
  .setAttribute("data-filter", "graphic-design");

document
  .querySelector(".filter-4")
  .setAttribute("data-filter", "photography-design");

document.querySelector(".filter-5").setAttribute("data-filter", "apps");

document.querySelector(".filter-1").style.cssText +=
  "background-color: #FFE500; padding: 8px 20px; color: #fff !important; border-radius: 20px;";

portAppFilters.style.cssText =
  "margin: 0; display: flex; align-items: center; justify-content: center; flex-wrap: wrap; margin-top: 100px; gap: 20px; height: 36px";

portContainer.style.cssText +=
  "margin-top: 100px; min-height: 315px; text-align: center;";

const imgFilter = [
  "web.png",
  "graphic.png",
  "learning.jpg",
  "images.jpeg",
  "media.jpg",
  "photo.jpg",
  "graphic-designer.webp",
  "website-design-new.jpeg",
  "تنزيل.jpeg",
];

let numVisible = 6;
const incrementAmount = 6;

for (let img = 0; img < numVisible; img++) {
  const imageElement = document.createElement("img");

  imageElement.src = `imgs/${imgFilter[img]}`;

  imageElement.className = `img-${img}`;

  imageElement.style.cssText =
    "width: 300px; height: 250px; margin: 5px; border-radius: 6px; transition: 0.5s;";

  portContainer.appendChild(imageElement);
}

btnShowMore.addEventListener("click", () => {
  // Update number of visible images
  numVisible += incrementAmount;

  // Loop through additional images and append them to container
  for (
    let i = numVisible - incrementAmount;
    i < numVisible && i < imgFilter.length;
    i++
  ) {
    const imageElement = document.createElement("img");

    imageElement.src = `imgs/${imgFilter[i]}`;

    imageElement.className = `img-${i}`;

    imageElement.style.cssText =
      "width: 300px; height: 250px; margin: 5px; border-radius: 6px";

    portContainer.appendChild(imageElement);
  }

  // Hide "show more" button if all images have been displayed
  if (numVisible >= imgFilter.length) {
    btnShowMore.style.display = "none";

    document.querySelector(".portfolio .container .img-5").className +=
      " all photography-design";

    document.querySelector(".portfolio .container .img-6").className +=
      " all web-design";

    document.querySelector(".portfolio .container .img-7").className +=
      " all graphic-design";

    document.querySelector(".portfolio .container .img-8").className +=
      " all graphic-design";
  }
});

document.querySelector(".portfolio .container .img-0").className +=
  " all web-design";

document.querySelector(".portfolio .container .img-1").className +=
  " all graphic-design";

document.querySelector(".portfolio .container .img-2").className +=
  " all photography-design";

document.querySelector(".portfolio .container .img-3").className += " all apps";

document.querySelector(".portfolio .container .img-4").className += " all apps";

btnShowMore.textContent = "show more";

btnShowMore.style.cssText =
  "background-color: #FFE500; border: none; padding: 8px 20px; text-transform: uppercase; margin: 50px auto; display: flex; border-radius: 20px; font-weight: 600; color: #fff; font-size: 15px; cursor: pointer;";

let allImage = Array.from(
  document.querySelectorAll(".portfolio .container img")
);

// Filter Image
document.querySelectorAll(".filter-img").forEach((li) => {
  li.addEventListener("mouseenter", (e) => {
    e.target.style.cssText += "color: #FFE500";
  });

  li.addEventListener("mouseleave", (e) => {
    e.target.style.cssText += "color: #637988";
  });

  li.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-img").forEach((li) => {
      li.style.removeProperty("background-color");
      li.style.removeProperty("padding");
      li.style.removeProperty("color");
      li.style.color = "#637988";
    });

    // show and hide show more btn
    if (e.currentTarget.dataset.filter != "all") {
      btnShowMore.style.display = "none";
    } else {
      if (portContainer.children.length <= incrementAmount) {
        btnShowMore.style.display = "flex";
      } else {
        btnShowMore.style.display = "none";
      }
    }

    document.querySelectorAll(".portfolio .container img").forEach((img) => {
      img.style.cssText +=
        "opacity: 0; transform: scale(0); width: 0; height: 0;";
    });

    document
      .querySelectorAll(`.portfolio .container .${e.target.dataset.filter}`)
      .forEach((img) => {
        img.style.cssText +=
          "transform: scale(1); opacity:1; width: 300px; height: 250px;";
      });

    e.target.style.cssText +=
      "background-color: #FFE500; padding: 8px 20px; color: #fff !important; border-radius: 20px;";
  });
});

let portInfo = document.createElement("div"),
  portInfoMainTitle = document.createElement("h3"),
  portInfoSmallTitle = document.createElement("span"),
  portInfoBtn = document.createElement("button");

portInfo.appendChild(portInfoMainTitle);
portInfo.appendChild(portInfoSmallTitle);
portInfo.appendChild(portInfoBtn);

portSection.appendChild(portInfo);

portInfoMainTitle.textContent = "molly is great for any business";

portInfoSmallTitle.textContent =
  "yes mentum is fully responsive,and look's great on any device.";

portInfoBtn.textContent = "order now";

portInfo.style.cssText +=
  "background-color: #324651; text-align: center; padding: 20px; color: #fff; margin-top: 50px;";

portInfoMainTitle.style.cssText +=
  "margin: 0; text-transform: uppercase; font-size: 30px; font-weight: 600;";

portInfoSmallTitle.style.cssText +=
  "display: block; font-size: 15px; font-weight: 300; font-style: italic; margin-top: 5px; text-transform: capitalize";

portInfoBtn.style.cssText +=
  "outline: none; border: none; font-size: 15px; font-weight: 600; transition: all 0.5s ease 0s; color: rgb(255, 230, 0); background: rgb(255, 255, 255); border-radius: 20px; padding: 10px 20px; height: 40px; cursor: pointer; width: 150px; text-transform: uppercase; margin-top: 40px;";

function responsivePortfolio() {
  let mediaQuery = window.matchMedia("(max-width: 991px)");

  function ifMatchesChange(e) {
    if (e.matches) {
      portContainer.style.cssText +=
        "display: flex; align-items: center; justify-content: center; flex-direction: column;";

      portMainTitle.style.cssText += "font-size: 60px;";

      portInfoSmallTitle.style.cssText += "margin-top: 30px";
    } else {
      portContainer.style.removeProperty("display");
      portContainer.style.removeProperty("align-items");
      portContainer.style.removeProperty("justify-content");
      portContainer.style.removeProperty("flex-direction");

      portMainTitle.style.cssText += "font-size: 70px;";

      portInfoSmallTitle.style.cssText += "margin-top: 10px";
    }
  }

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

// End Portfolio Section

// Start about us section

let aboutSection = document.createElement("section"),
  aboutMainTitle = document.createElement("h2"),
  aboutAppBullet = document.createElement("div"),
  aboutAppFilters = document.createElement("ul"),
  aboutAppBulletChild = document.createElement("div"),
  aboutBoxInfoLink = document.createElement("ul"),
  aboutContainer = document.createElement("div");

for (let aboutNumber = 1; aboutNumber < 4; aboutNumber++) {
  let bullet = document.createElement("div");
  bullet.className = "bullet";

  aboutAppBullet.appendChild(bullet);

  let aboutBoxInfoLinks = document.createElement("li");
  aboutBoxInfoLinks.className = `link-${aboutNumber}`;
  aboutBoxInfoLinks.innerHTML = `<a href="#" style= "color: #324651; width: 100%; text-align: center; line-height: 35px;"><i></i></a>`;

  aboutBoxInfoLinks.style.cssText +=
    "background-color: #fafafa; width: 35px; height: 35px; padding: 4px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: 0.5s";

  aboutBoxInfoLink.appendChild(aboutBoxInfoLinks);
}

aboutSection.appendChild(aboutMainTitle);
aboutSection.appendChild(aboutContainer);

main.appendChild(aboutSection);

aboutMainTitle.before(aboutAppBullet);
aboutMainTitle.after(aboutAppBulletChild);

// Add Class Name To Element
aboutMainTitle.className = "main-title";
aboutMainTitle.textContent = "about us";

aboutAppBullet.className = "bullets";

aboutContainer.className += "container res-two-columns";

aboutSection.className = "about-us";

aboutBoxInfoLink.className = "links";

aboutAppBulletChild.className = "app-bullet-child";

// Add Style To Some Element
aboutSection.style.cssText = "padding-top: 50px; position: relative;";

aboutContainer.style.cssText +=
  "margin-top: 100px; gap: 20px; text-align: center;";

let aboutBoxImage = document.createElement("div"),
  aboutBoxInfo = document.createElement("div");

aboutBoxImage.innerHTML = `<img src= "imgs/Mohamed Saad.jpg" loading="lazy" alt= "Img For designer">`;

aboutBoxInfo.innerHTML = `<div><h3 class= "title-1">mohamed saad</h3><h4>front end developer</h4></div>`;
aboutBoxInfo.appendChild(aboutBoxInfoLink);

aboutContainer.appendChild(aboutBoxImage);
aboutContainer.appendChild(aboutBoxInfo);

document.querySelector(
  ".about-us .container .link-1"
).firstChild.firstChild.className += "fa-brands fa-facebook-f";
document.querySelector(
  ".about-us .container .link-2"
).firstChild.firstChild.className += "fa-brands fa-twitter";
document.querySelector(
  ".about-us .container .link-3"
).firstChild.firstChild.className += "fa-brands fa-youtube";

aboutBoxImage.firstElementChild.style.cssText =
  "width: 100%; border-radius: 20px; filter: saturate(0.9);";

aboutBoxInfo.style.cssText +=
  "display: flex; justify-content: center; flex-direction: column; margin: auto; gap: 50px;";

aboutBoxInfo.firstElementChild.firstElementChild.style.cssText =
  "font-size: 25px; color: #FFE600; font-weight: 600; text-transform: capitalize; margin: 0;";

aboutBoxInfo.firstElementChild.lastElementChild.style.cssText =
  "font-weight: 600; font-size: 15px; font-style: italic; margin: 10px 0 0; text-transform: capitalize;";

aboutBoxInfoLink.style.cssText += "margin: 0; display: flex; gap: 20px;";

document.querySelector(".about-us .container .link-1").firstChild.href =
  "https://www.facebook.com/profile.php?id=100046155277195";

document.querySelector(".about-us .container .link-1").firstChild.target =
  "_blank";

document.querySelectorAll(".about-us .container .links li").forEach((li) => {
  li.addEventListener("mouseenter", (e) => {
    e.target.firstElementChild.firstElementChild.className += " fa-fade";
  });

  li.addEventListener("mouseleave", (e) => {
    e.target.firstElementChild.firstElementChild.classList.remove("fa-fade");
  });
});

let skillsContain = document.createElement("div"),
  mainTitleSkills = document.createElement("h3"),
  skillsContent = document.createElement("div"),
  skillsContainer = document.createElement("div");

for (let skills = 0; skills < 4; skills++) {
  let skillsProgress = document.createElement("div"),
    skillsTitle = document.createElement("span"),
    progress = document.createElement("div");

  skillsProgress.className = "box";

  skillsProgress.appendChild(skillsTitle);
  skillsProgress.appendChild(progress);

  skillsContent.appendChild(skillsProgress);

  skillsContainer.appendChild(skillsContent);

  skillsTitle.className = `skill-${skills + 1}`;

  progress.innerHTML = `<span></span>`;

  skillsProgress.style.cssText +=
    "display: flex; flex-direction: column; gap: 20px;";

  skillsTitle.style.cssText +=
    "text-transform: uppercase; font-size: 15px; font-weight: 300; letter-spacing: 1px;";

  progress.style.cssText +=
    "background-color: #fff; width: 100%; height: 30px; border-radius: 8px; position: relative; overflow: hidden;";

  progress.firstElementChild.style.cssText +=
    "background-color: #FFE500; width: 90%; height: 100%; position: absolute; left: 0; top: 0;";
}

skillsContain.className = "skills";

skillsContainer.className = "container";

skillsContent.className = "progress-content";

skillsContain.appendChild(skillsContainer);

skillsContainer.prepend(mainTitleSkills);

aboutSection.appendChild(skillsContain);

skillsContain.style.cssText +=
  "background-color: #324651; margin-top: 50px; margin-top: 50px; padding: 50px 0;";

mainTitleSkills.textContent = "skills";
mainTitleSkills.style.cssText =
  "margin: 0px; color: #FFE600; text-transform: uppercase; font-size: 20px; font-weight: 600;";

skillsContent.style.cssText +=
  "margin-top: 35px; display: flex; flex-direction: column; gap: 20px; color: #fff;";

document.querySelector(".progress-content .box .skill-1").textContent = "html";
document.querySelector(".progress-content .box .skill-2").textContent = "css";
document.querySelector(".progress-content .box .skill-3").textContent = "js";
document.querySelector(".progress-content .box .skill-4").textContent =
  "bootstrap";

function responsiveAboutUs() {
  let mediaQuery = window.matchMedia(
    "(min-width: 768px) and (max-width: 991px)"
  );

  function ifMatchesChange(e) {
    if (e.matches) {
      aboutContainer.style.setProperty(
        "grid-template-columns",
        "repeat(auto-fill, minmax(350px, 1fr))"
      );
    }
  }

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

function responsiveAboutUsMobile() {
  let mediaQuery = window.matchMedia("(max-width: 767px)");

  function ifMatchesChange(e) {
    if (e.matches) {
      aboutMainTitle.style.cssText += "font-size: 60px";
    } else {
      aboutMainTitle.style.cssText += "font-size: 70px";
    }
  }

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

// End about us section

// Start Section Blog

let blogSection = document.createElement("section"),
  blogMainTitle = document.createElement("h2"),
  blogAppBullet = document.createElement("div"),
  blogAppFilters = document.createElement("ul"),
  blogAppBulletChild = document.createElement("div"),
  blogContainer = document.createElement("div");

for (let blogNumber = 1; blogNumber < 4; blogNumber++) {
  let bullet = document.createElement("div");
  bullet.className = "bullet";

  blogAppBullet.appendChild(bullet);
}

blogSection.appendChild(blogMainTitle);
blogSection.appendChild(blogContainer);

main.appendChild(blogSection);

blogMainTitle.before(blogAppBullet);
blogMainTitle.after(blogAppBulletChild);

// Add Class To Element
blogMainTitle.className = "main-title";
blogMainTitle.textContent = "blog";

blogAppBullet.className = "bullets";
blogSection.className = "blog";
blogAppBulletChild.className = "app-bullet-child";

blogContainer.className += "container res-two-columns";

blogSection.style.cssText += "position: relative; padding-top: 50px;";

let blogTitleBoxOne = document.createElement("div"),
  blogTitleBoxTwo = document.createElement("div"),
  blogContent = document.createElement("div");

for (let blogBoxNumber = 1; blogBoxNumber < 6; blogBoxNumber++) {
  if (blogBoxNumber < 3) {
    let blogBox = document.createElement("div"),
      blogBoxImg = document.createElement("img"),
      blogBoxTitle = document.createElement("h4"),
      blogBoxContent = document.createElement("div"),
      blogBoxText = document.createElement("p"),
      blogBoxMore = document.createElement("span");

    blogBox.className = `box box-${blogBoxNumber}`;
    blogBoxContent.className = `info`;

    blogBoxContent.appendChild(blogBoxTitle);
    blogBoxContent.appendChild(blogBoxText);
    blogBoxContent.appendChild(blogBoxMore);

    blogBox.appendChild(blogBoxImg);
    blogBox.appendChild(blogBoxContent);

    blogContainer.appendChild(blogBox);

    blogBoxMore.textContent = "read more";

    blogBox.style.cssText +=
      "overflow: hidden; transition: 0.5s; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; border-radius: 6px; height: fit-content;";

    blogBoxImg.style.cssText += "width: 100%";

    blogBoxTitle.style.cssText +=
      "color: #FFE600; font-size: 20px; font-weight: 300; text-transform: capitalize; margin: 10px 0 0;";

    blogBoxContent.style.cssText += "padding: 20px;";

    blogBoxText.style.cssText +=
      "margin: 10px 0 0; font-size: 15px; height: 160px; overflow: hidden; transition: 0.5s";

    blogBoxMore.style.cssText +=
      "color: #FFE600; margin-top: 30px; cursor: pointer; font-size: 15px; font-weight: 600; display: block; text-transform: uppercase; margin-left: auto; width: fit-content;";

    blogBoxMore.addEventListener("click", (e) => {
      if (!e.target.classList.contains("done")) {
        blogBoxMore.parentElement.children.item(1).style.cssText +=
          "height: fit-content";

        e.target.classList.add("done");

        e.target.textContent = "less";
      } else {
        blogBoxMore.parentElement.children.item(1).style.cssText +=
          "height: 160px";

        e.target.textContent = "reed more";

        e.target.classList.remove("done");
      }
    });
  }
}

document.querySelector(".blog .container .box-1 img").src =
  "imgs/coffee&book.jpg";

document.querySelector(".blog .container .box-1 h4").textContent =
  "coffee & chapters";

document.querySelector(
  ".blog .container .box-1 p"
).textContent = `"Coffee & Chapters" is a simple and catchy blog title that suggests the focus of the blog is on coffee and books. The title invokes the image of a cozy coffee shop where one can relax with a good book and a warm cup of coffee.
The blog could cover a range of topics related to coffee and books, such as book reviews, coffee shop reviews, interviews with authors and baristas, and recommendations for pairings of coffee and books. The author can also share their personal experiences of reading and drinking coffee, and how they combine these two passions to create a more enjoyable reading experience.
The blog could also explore the cultural significance of coffee and books, such as how coffee and literature have influenced each other throughout history, and how coffee shops have become a popular destination for readers and writers.
Overall, "Coffee & Chapters" is a blog title that creates a warm and inviting atmosphere, and suggests a focus on the pleasures of reading and coffee-drinking. It is a title that would appeal to book lovers and coffee enthusiasts alike.`;

document.querySelector(".blog .container .box-2 img").src = "imgs/js.jpg";
document.querySelector(
  ".blog .container .box-2 h4"
).innerHTML = `java<span>script</span>`;

document.querySelector(
  ".blog .container .box-2 p"
).textContent = `JavaScript, or JS for short, is a programming language used primarily for web development. It is a versatile language that can be used both on the client-side (in the browser) and on the server-side (using Node.js).
One of the key features of JS is its ability to manipulate web page content in real-time through the Document Object Model (DOM). This allows developers to dynamically update web page content based on user interactions, making JS a key component of modern web development.
JS also has a wide range of libraries and frameworks available, such as React, Angular, and Vue.js, which make it easier to build complex web applications. These libraries and frameworks provide developers with pre-built components and tools that help speed up development and improve code quality.
Another advantage of JS is its popularity and community support. It is one of the most widely used programming languages in the world, meaning there are countless resources and tutorials available online to help developers learn and improve their skills.
In conclusion, JS is a powerful.`;

blogContainer.style.cssText += "margin-top: 50px; gap: 20px;";

// Start Subscribe

let subscribe = document.createElement("div"),
  subscribeContainer = document.createElement("div"),
  subscribeTitle = document.createElement("h2"),
  subscribeForm = document.createElement("form"),
  subscribeFormMail = document.createElement("input"),
  subscribeFormSub = document.createElement("input");

subscribeForm.appendChild(subscribeFormMail);
subscribeForm.appendChild(subscribeFormSub);

subscribeContainer.appendChild(subscribeTitle);
subscribeContainer.appendChild(subscribeForm);

subscribe.appendChild(subscribeContainer);

blogSection.appendChild(subscribe);

subscribe.className = "subscribe";

subscribeContainer.className = "container";

subscribeTitle.textContent = "subscribe to our newsletter";

subscribeFormMail.type = "email";
subscribeFormMail.placeholder = "your mail";

subscribeFormSub.type = "submit";
subscribeFormSub.value = "subscribe";

subscribe.style.cssText +=
  "background-color: #FFE500; padding:20px; margin-top: 50px";

subscribeContainer.style.cssText +=
  "display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center;";

subscribeTitle.style.cssText +=
  "margin: 0; text-transform: uppercase; color: #fff; font-weight: 600;";

subscribeForm.style.cssText +=
  "margin-top: 30px; display: flex; align-items: center; justify-content: center; gap: 20px;";

subscribeFormMail.style.cssText +=
  "outline: none; border: none; border-radius: 20px; padding: 7px 20px; width: 370px; caret-color: #324651; color: #324651; transition: 0.5s;";

subscribeFormSub.style.cssText +=
  "color: #324651; border: none; text-transform: uppercase; padding: 7px 22px; border-radius: 20px; width: 120px; background-color: #fff; font-size: 13px; font-weight: 600; cursor: pointer; height: 30px;";

subscribeFormSub.addEventListener("click", (e) => {
  e.preventDefault();
});

function responsiveBlog() {
  let mediaQuery = window.matchMedia("(max-width: 767px)");

  function ifMatchesChange(e) {
    if (e.matches) {
      subscribeForm.style.cssText += "flex-wrap: wrap;";

      subscribeFormMail.style.cssText += "width: -webkit-fill-available;";
    } else {
      subscribeForm.style.removeProperty("flex-wrap");
      subscribeFormMail.style.cssText += "width: 370px";
    }
  }

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}

// End Subscribe
// End Section Blog

// Start Contact Us

let contactSection = document.createElement("section"),
  contactMainTitle = document.createElement("h2"),
  contactAppBullet = document.createElement("div"),
  contactAppFilters = document.createElement("ul"),
  contactAppBulletChild = document.createElement("div"),
  contactContainer = document.createElement("div"),
  textArea = document.createElement("textarea"),
  contactSub = document.createElement("input"),
  contactForm = document.createElement("form");

for (let contactNumber = 1; contactNumber < 4; contactNumber++) {
  if (contactNumber < 4) {
    let bullet = document.createElement("div");
    bullet.className = "bullet";

    bullet.style.cssText += "background-color: #324651 !important;";

    contactAppBullet.appendChild(bullet);
  }

  if (contactNumber < 4) {
    let input = document.createElement("input");

    input.className = `input input-${contactNumber}`;

    input.style.cssText +=
      "width: calc(100% / 4); padding: 8px 20px; border-radius: 6px; outline: none; background-color: transparent; border: 1px solid #fff; color: #fff;";

    contactForm.appendChild(input);
  }
}

contactSection.appendChild(contactMainTitle);
contactSection.appendChild(contactContainer);

main.appendChild(contactSection);

contactMainTitle.before(contactAppBullet);
contactMainTitle.after(contactAppBulletChild);

contactContainer.appendChild(contactForm);

contactForm.appendChild(textArea);
contactForm.appendChild(contactSub);

// Add Class To Element
contactMainTitle.className = "main-title";
contactMainTitle.textContent = "contact us";

contactAppBullet.className = "bullets";
contactSection.className = "contact";
contactAppBulletChild.className = "app-bullet-child";

contactContainer.className = "container";

contactForm.firstElementChild.placeholder = "Your Name";
contactForm.children.item(1).placeholder = "Your Mail";
contactForm.children.item(2).placeholder = "Subject";
textArea.placeholder = "Enter Message Here...";

contactForm.firstElementChild.type = "text";
contactForm.children.item(1).type = "email";
contactForm.children.item(2).type = "text";

contactSub.type = "submit";
contactSub.value = "send message";

contactSection.style.cssText +=
  "padding-top: 50px; position: relative; background-color: #324651;";

contactAppBullet.style.cssText += "z-index: 5;";

contactMainTitle.style.cssText += "color: #fff !important;";

contactContainer.style.cssText += "margin-top: 100px;";

contactForm.style.cssText +=
  "display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 20px";

textArea.style.cssText +=
  "resize: none; width: calc(75% + 124px) ;height: 100px; padding: 8px 20px; border-radius: 6px; outline: none; background-color: transparent; border: 1px solid #fff; color: #fff;";

contactSub.style.cssText +=
  "background-color: #fff; border: none; padding: 8px 20px; text-transform: uppercase; margin: 20px auto 0; display: flex; border-radius: 20px; font-weight: 600; color: #324651; font-size: 13px; cursor: pointer;";

// Start Contact Info

let contactInfo = document.createElement("div"),
  contactInfoContainer = document.createElement("div"),
  contactInfoTitle = document.createElement("h4"),
  contactInfoText = document.createElement("p"),
  contactInfoLinks = document.createElement("ul"),
  contactCopyRight = document.createElement("span");

for (let contactLinks = 1; contactLinks < 4; contactLinks++) {
  let contactLink = document.createElement("li");

  contactLink.innerHTML = `<a style = "color: #324651"><i></i></a>`;

  contactLink.style.cssText +=
    "width: 35px; height: 35px; background-color: #fff; color: #324651; border-radius: 50%; display: flex; align-items: center; justify-content: center;";

  contactLink.firstElementChild.style.cssText +=
    "width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;";

  contactLink.className = `link-${contactLinks}`;

  contactInfoLinks.appendChild(contactLink);
}

contactInfo.appendChild(contactInfoTitle);
contactInfo.appendChild(contactInfoText);
contactInfo.appendChild(contactInfoLinks);
contactInfo.appendChild(contactCopyRight);

contactSection.appendChild(contactInfo);

contactInfo.className = "info";

contactInfoTitle.textContent = "mohamedsaad63c@gmail.com";
contactInfoText.textContent = "01032334278";

document.querySelector(".contact .info .link-1 a").href =
  "https://www.facebook.com/profile.php?id=100046155277195";

document.querySelector(".contact .info .link-2 a").href =
  "http://wa.me/+0201032334278";

document.querySelector(".contact .info .link-3 a").href =
  "mailto:mohamedsaad63c@gmail.com";

document.querySelectorAll(".contact .info ul li a").forEach((el) => {
  el.target = "_blank";
});

document.querySelector(".contact .info .link-1 a i").className =
  "fa-brands fa-facebook-f";
document.querySelector(".contact .info .link-2 a i").className =
  "fa-brands fa-whatsapp";
document.querySelector(".contact .info .link-3 a i").className =
  "fa-brands fa-google-plus-g";

contactCopyRight.innerHTML = `© copyright 2013 <span>molly</span>. all rights reserved`;

contactInfo.style.cssText +=
  "padding-top: 50px; background-color: #182227; display: flex; align-items: center; justify-content: center; flex-direction: column; margin-top: 50px; color: #fff;";
contactInfoTitle.style.cssText += "font-weight: 300; margin: 0;";
contactInfoText.style.cssText += "font-weight: 300;";

contactInfoLinks.style.cssText +=
  "box-sizing: border-box; list-style: none; padding: 0px; margin: 20px 0; display: flex; gap: 20px;";

contactCopyRight.style.cssText +=
  "text-transform: capitalize; font-size: 15px; font-weight: 300;";

contactCopyRight.firstElementChild.style.color = "#FFE600";

// End Contact Info

function responsiveContact() {
  let mediaQuery = window.matchMedia("(max-width: 767px)");

  function ifMatchesChange(e) {
    if (e.matches) {
      contactMainTitle.style.cssText += "font-size: 60px;";

      document.querySelectorAll(".contact form .input").forEach((el) => {
        el.style.cssText += "width: 100%;";
      });

      textArea.style.cssText += "width: 100%";

      contactAppBullet.style.cssText += "top: 220px";

      contactAppBulletChild.style.cssText += "top: 227px";
    } else {
      contactMainTitle.style.cssText += "font-size: 70px;";

      document.querySelectorAll(".contact form .input").forEach((el) => {
        el.style.cssText += "width: calc(100% / 4);";

        textArea.style.cssText += "width: calc(75% + 124px);";

        contactAppBullet.style.cssText += "top: 150px";

        contactAppBulletChild.style.cssText += "top: 157px";
      });
    }
  }

  mediaQuery.addListener(ifMatchesChange);
  ifMatchesChange(mediaQuery);
}
// End Contact Us

// Start Effect

let topPage = document.createElement("div");

topPage.innerHTML = `<i class="fa-solid fa-angle-up"></i>`;

topPage.className = "icon-top";

topPage.style.cssText +=
  "transition: 0.5s; color: white; position: fixed; bottom: 20px; right: 20px; cursor: pointer; padding: 8px 10px; background: linear-gradient(to right, #1368cc 50%, #0075ff 50%) no-repeat scroll right bottom/210% 100% #0075ff; border-radius: 6px; opacity: 0;";

topPage.addEventListener("mouseover", () => {
  topPage.style.cssText += "background-position: left bottom;";
});

topPage.addEventListener("mouseleave", () => {
  topPage.style.cssText +=
    "color: white; position: fixed; bottom: 20px; right: 20px; cursor: pointer; padding: 8px 10px; background: linear-gradient(to right, #1368cc 50%, #0075ff 50%) no-repeat scroll right bottom/210% 100% #0075ff; border-radius: 6px;";
});

document.body.appendChild(topPage);

window.addEventListener("scroll", () => {
  this.scrollY >= 800
    ? (topPage.style.cssText += "opacity: 1; pointer-events: auto;")
    : (topPage.style.cssText += "opacity: 0; pointer-events: none;");

  topPage.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});

// End Code Page
