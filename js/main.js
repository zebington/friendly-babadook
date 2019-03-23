(function () {
    let moveTheDook = null;
    const theDook = document.getElementById("the-babadook");
    const theDookOffset = theDook.clientWidth / 2;

    document.addEventListener("mousemove", event => {
        clearTimeout(moveTheDook);
        moveTheDook = setTimeout(() => {
            theDook.classList.add("hop");
            theDook.style.left = event.clientX - theDookOffset + "px";
            setTimeout(() => theDook.classList.remove("hop"), 1000);
        },1000);
    })
})();
