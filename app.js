function init() {
  const slides = document.querySelectorAll(".slide");
  const pages = document.querySelectorAll(".page");
  const backgrounds = [
    `radio.gradient(#2B3760, #0B1023)`,
    `radio.gradient(#4E3022, #161616)`,
    `radio.gradient(#4E4342, #0B1023)`
  ];

  //Tracker
  let current = 0;

  slides.forEach((slide, index) => {
    slide.addEventListener("click", function() {
      changeDot(this);
      nextSlide(index);
    });
  });

  function changeDot(dot) {
    slides.forEach(slide => {
      slide.classList.remove("active");
    });
    dot.classList.add("active");
  }

  function nextSlide(pageNumber) {
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    const nextLeft = nextPage.querySelector(".hero .model-left");
    const nextRight = nextPage.querySelector(".hero .model-right");
    const currentLeft = currentPage.querySelectorAll(".hero .model-left");
    const currentRight = currentPage.querySelectorAll(".hero .model-right");
    const nextText = nextPage.querySelector(".details");
    const portfolio = document.querySelector(".portfolio");

    const tl = new TimelineMax();

    tl.fromTo(currentLeft, 0.3, { y: "-10%" }, { y: "-100%" }).fromTo(
      currentRight,
      0.3,
      { y: "10%" },
      { y: "-100%" },
      "-=0.2"
    );
  }
}

init();
