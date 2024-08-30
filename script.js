document.querySelectorAll('.gif-container').forEach(container => {
    const img = container.querySelector('img');

    container.addEventListener('mouseenter', () => {
        img.src += "?autoplay=1";
    });

    container.addEventListener('mouseleave', () => {
        img.src = img.src.replace("?autoplay=1", "");
    });
});
