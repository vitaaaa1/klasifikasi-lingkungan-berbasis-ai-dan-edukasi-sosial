function login() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("homePage").classList.remove("hidden");
}

function logout() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("logoutPage").classList.remove("hidden");
}

function backToLogin() {
    document.getElementById("logoutPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

function previewImage(event) {
    const image = document.getElementById("imagePreview");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = "block";
}
