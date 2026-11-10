const themeToggle = document.querySelector("#theme-toggle");
themeToggle.checked = localStorage.getItem("portfolio-theme") === "light";

themeToggle.addEventListener("change", () => {
    let theme = "dark";
    if (themeToggle.checked) {
        theme = "light";
    }
    localStorage.setItem("portfolio-theme", theme);
});

gsap.registerPlugin(ScrollTrigger);

const animations = gsap.matchMedia();

/* Asked Copilot to add animations for the tagline, tagline image, about section, and work experience section from the gsap library */
animations.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from(".tagline", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".tagline-image", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power2.out"
    });

    gsap.from("#about h2, #about p", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            once: true
        }
    });

    gsap.from("#work-experience article", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#work-experience",
            start: "top 80%",
            once: true
        }
    });
});