document.getElementById("showShort").addEventListener("click", () => {
  hideSection("long", "showLong");
  hideSection("contact", "showContact");
  hideSection("blog", "showBlog");
  showSelection("short", "showShort");
})

document.getElementById("showLong").addEventListener("click", () => {
  hideSection("short", "showShort");
  hideSection("contact", "showContact");
  hideSection("blog", "showBlog");
  showSelection("long", "showLong");
})

document.getElementById("showContact").addEventListener("click", () => {
  hideSection("long", "showLong");
  hideSection("short", "showShort");
  hideSection("blog", "showBlog");
  showSelection("contact", "showContact");
})

document.getElementById("showBlog").addEventListener("click", () => {
  hideSection("contact", "showContact");
  hideSection("short", "showShort");
  hideSection("long", "showLong");
  showSelection("blog", "showBlog");
})

let clickCount = 0;
document.getElementById("wizard").addEventListener("click", () => {
  if (document.body.classList.contains("theme-dark")) { return; }

  clickCount = clickCount + 1;
  setTimeout(() => { clickCount = 0; }, 400);

  if (clickCount !== 2) { return; }

  if (window.location.hostname) {
    gtag('event', 'click-wizard');
  }
  document.body.classList.add("theme-dark");
  const container = document.querySelector(".sparticles-container");
  new Sparticles(container, { count: 100, shape: "star" });
})

function randomImages() {
  document.querySelector('.image-container img').classList.remove('hidden')

  let timeoutHandle = undefined;
  const imageList = Array.from(document.querySelectorAll('.image-container img')).sort(() => Math.random() - 0.5);
  let counter = 0;

  const showImage = (index) => {
    document.querySelector('.image-container img:not(.hidden)').classList.add('hidden')
    imageList[index].classList.remove('hidden')
  }

  timeoutHandle = setInterval(() => {
    showImage(++counter % imageList.length)
  }, 5000);
}
randomImages()


///////////

function showSelection(textID, buttonID) {
  document.getElementById(textID).classList.remove("hidden");
  document.querySelector(`#${buttonID}`).classList.add('active');
}

function hideSection(textID, buttonID) {
  document.getElementById(textID).classList.add("hidden");
  document.querySelector(`#${buttonID}`).classList.remove('active');
}
