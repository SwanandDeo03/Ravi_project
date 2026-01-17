// Open and close side menu
document.getElementById('openMenu')?.addEventListener('click', () => {
    document.getElementById('sideMenu').style.left = '0';
});

document.getElementById('closeMenu')?.addEventListener('click', () => {
    document.getElementById('sideMenu').style.left = '-320px';
});

// Logout
function logout() {
   /* localStorage.removeItem('emp_user');*/
    /*location.replace("index.html");*/

    console.log("🚪 Logging out");

    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("isLoggedIn");

    window.location.replace("index.html");
}

// Go to Leave Application page
function leaveApplication() {
    location.replace("LeaveApplication.html");  // DO NOT REMOVE emp_user HERE
}

// Go to Leave Application page
function Dashboard() {
    location.replace("Home.html");  // DO NOT REMOVE emp_user HERE
}

function leaveReport() {
    location.replace("Leave_Report.html");  // DO NOT REMOVE emp_user HERE
}

function ExpensesVoucher() {
    location.replace("Expenses_Voucher.html");  // DO NOT REMOVE emp_user HERE
}
function lead() {
    location.replace("LeadGeneration.html");  // DO NOT REMOVE emp_user HERE
}
function leadReport() {
    location.replace("Lead_Report.html");  // DO NOT REMOVE emp_user HERE
}

function profile() {
    location.replace("Profile.html");  // DO NOT REMOVE emp_user HERE
}

function travel() {
    location.replace("Travel_Expenses.html");  // DO NOT REMOVE emp_user HERE
}

function travelReport() {
    location.replace("Travelling_Report.html");  // DO NOT REMOVE emp_user HERE
}


function service() {
    location.replace("Service_Enquiry.html");  // DO NOT REMOVE emp_user HERE
}

function serviceReport() {
    location.replace("Service_Report.html");  // DO NOT REMOVE emp_user HERE
}

