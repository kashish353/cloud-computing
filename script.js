// Display welcome message
function showMessage() {
    alert(
        "Welcome to CloudHub! Your cloud computing dashboard is ready."
    );
}

// Display information about a cloud service
function serviceInfo(service) {
    alert(
        service + " selected!\n\n" +
        "You can manage your " + service.toLowerCase() +
        " resources from this section."
    );
}

// Simulate changing CPU usage
function updateCPU() {
    const cpu = Math.floor(Math.random() * 40) + 30;

    document.getElementById("cpuUsage").textContent = cpu + "%";

    const cpuBar = document.querySelector(".cpu");
    cpuBar.style.width = cpu + "%";
}

// Update CPU usage every 3 seconds
setInterval(updateCPU, 3000);
