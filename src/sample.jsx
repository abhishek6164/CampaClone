".can",
      { rotate: -10, y: -100, opacity: 0 },
      {
        rotate: 0,
        y: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power4.out",
        delay: 0.5,
      }
    );

    gsap.to(".can", {
      rotate: 1,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });