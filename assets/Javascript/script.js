let emailbutton = document.getElementById("email")
let copiednotify = document.getElementById("copied")

emailbutton.addEventListener("click", () => {
    navigator.clipboard.writeText("sebastianlample@gmail.com");
    copiednotify.style.opacity = 1;

    setTimeout(() => {
        copiednotify.style.opacity = 0;
    }, 2000)
})  