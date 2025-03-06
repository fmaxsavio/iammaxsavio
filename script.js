document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".fade-in").style.opacity = "1";
});

function exploreMore() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
