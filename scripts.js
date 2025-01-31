function updateTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = `Current UTC Time: ${now.toISOString().split("T")[1].split(".")[0]}`;
}

updateTime();
