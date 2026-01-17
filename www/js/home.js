document.addEventListener("DOMContentLoaded", function () {

    const user = JSON.parse(localStorage.getItem("emp_user"));
    if (!user) { window.location.href = "index.html"; }

    document.getElementById("empName").innerText = user.emp_name;
    document.getElementById("empId").innerText = user.emp_id;
    document.getElementById("designation").innerText = user.designation;

    const API = "https://Empapp.kaizensoftware.in/api/Dashboard/checkin";

    async function sendCheckIn(coord, location) {

        let body = {
            emp_id: user.emp_id,
            emp_name: user.emp_name,
            job_profile: user.designation,
            coord: coord,
            location: location,
            date: new Date().toISOString(),
            Check_in: "10:00:00",
            Check_out: "18:00:00"
        };

        const res = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        return await res.json();
    }

    document.getElementById("btnCheckIn").addEventListener("click", function () {

        navigator.geolocation.getCurrentPosition(async pos => {

            let coords = pos.coords.latitude + "," + pos.coords.longitude;

            let geoUrl =
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords}&key=AIzaSyDGKxaSvDeDdDao8M0bNs944Es5zpo8G2I`;

            let geo = await fetch(geoUrl).then(r => r.json());
            let loc = geo.results?.[0]?.formatted_address ?? "NA";

            let result = await sendCheckIn(coords, loc);

            alert(result.message);
            document.getElementById("empName").innerText =  user.emp_name;
            document.getElementById("empId").innerText =  user.emp_id;
            document.getElementById("showCheckIn").innerText = result.time;
            document.getElementById("btnCheckIn").style.display = "none";
            document.getElementById("btnCheckOut").style.display = "block";

        }, err => alert("GPS Error: " + err.message));
    });

});
