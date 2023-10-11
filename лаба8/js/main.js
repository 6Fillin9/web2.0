function AnimationTarget(el) {
    this.el = el;
    this.animate = function () {
      anime({
        targets: this.el,
        translateX: getRandomArbitrary(-400, 300),
        translateY: getRandomArbitrary(-200, 400),
        
        scale: getRandomArbitrary(0.8, 3),
        rotate: "1turn",
        borderRadius: getRandomArbitrary(0.8, 3),
        duration: 1000,
        easing: "easeInOutSine",
        backgroundColor: "#f05053",
        complete: function (anim) {
          console.log(el);
        },
      });
    };
  }
  
  const buttonAnimate = document.querySelector(".animate__button");
  const animate = document.querySelector(".animate");
  
  function createElem(parrent) {
    elem = document.createElement("div");
    elem.className = "animate__block";
    parrent.append(elem);
    return elem;
  }
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  buttonAnimate.addEventListener("click", () => {
    const elem = createElem(animate);
    let elemAnim = new AnimationTarget(elem);
    elemAnim.animate();
  });