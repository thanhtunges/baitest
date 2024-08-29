// script.js

document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const welcomePopup = document.getElementById("welcomePopup");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const closePopup = document.getElementById("closePopup");

    // Khóa nút đăng nhập khi chưa nhập user/pass
    function toggleLoginButton() {
        loginButton.disabled = !usernameInput.value || !passwordInput.value;
    }

    usernameInput.addEventListener("input", toggleLoginButton);
    passwordInput.addEventListener("input", toggleLoginButton);

    // Icon eye để ẩn hiện mật khẩu
    togglePassword.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        this.textContent = type === "password" ? "👁️" : "👁";
    });

    // Xử lý form khi login
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value;

        // Lưu thông tin đăng nhập vào local storage
        localStorage.setItem("username", username);

        // Hiển thị popup chào mừng
        welcomeMessage.textContent = `Xin chào: ${username}`;
        welcomePopup.classList.remove("hidden");
    });

    // Đóng popup
    closePopup.addEventListener("click", function () {
        welcomePopup.classList.add("hidden");
    });

    // Focus vào ô username khi trang được load
    usernameInput.focus();
});
