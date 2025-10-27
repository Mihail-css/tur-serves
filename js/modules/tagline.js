
    const closeTagLineBtn = document.querySelector('.tagline__close');
    const tagLine = document.querySelector('.tagline');

    closeTagLineBtn.onclick = function () {
        tagLine.remove();
    };

