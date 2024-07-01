
function tagline () {
    const closeTagline = document.getElementById('closeTagline');
    const tagline = document.querySelector('.tagline');

    closeTagline.onclick = function () {
        tagline.remove();
    };
}

export default tagline;