document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.querySelector("#year");
    yearSpan.textContent = new Date().getFullYear();
})