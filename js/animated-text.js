const text = document.querySelector(".second-text");

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Web Developer";
        }, 0);
        setTimeout(() => {
            text.textContent = "Graphics Designer";
        }, 4000);
        setTimeout(() => {
            text.textContent = "UX/UI Designer";
        }, 8000);
    }

    textLoad();
    setInterval(textLoad, 12000);