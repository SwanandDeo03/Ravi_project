document.addEventListener("deviceready", function () {

    const permissions = cordova.plugins.permissions;

    let needed = [
        permissions.ACCESS_FINE_LOCATION,
        permissions.ACCESS_COARSE_LOCATION,
        permissions.ACCESS_BACKGROUND_LOCATION,
        permissions.CAMERA
    ];

    permissions.requestPermissions(needed, function (status) {
        if (!status.hasPermission) {
            alert("Please allow GPS & Camera Permissions");
        }
    }, function () {
        alert("Permission Error");
    });

    document.getElementById('signin').addEventListener('click', async function () {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            alert("Enter username and password");
            return;
        }

        try {
            const API = "https://Empapp.kaizensoftware.in/api/auth/login";

            const response = await fetch(API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                const err = await response.json().catch(() => ({}));
                alert(err.message || 'Login failed');
                return;
            }

            const data = await response.json();
            localStorage.setItem("emp_user", JSON.stringify(data));
            window.location.href = "Home.html";

        } catch (e) {
            alert("Network Error");
        }
    });

});