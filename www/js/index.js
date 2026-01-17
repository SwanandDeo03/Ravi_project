document.getElementById('signin').addEventListener('click', async function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Enter username and password');
        return;
    }

    try {
        const API = "https://Empapp.kaizensoftware.in/api/auth/login";

        const res = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }

        localStorage.setItem("emp_user", JSON.stringify(data));
        window.location.href = "Home.html";

    } catch (e) {
        alert("Network Error");
    }
});
