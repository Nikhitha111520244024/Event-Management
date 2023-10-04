// JavaScript for event management
const eventForm = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

eventForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventLocation = document.getElementById("eventLocation").value;
    const eventDescription = document.getElementById("eventDescription").value;

    const eventItem = document.createElement("li");
    eventItem.innerHTML = `
        <strong>${eventName}</strong><br>
        Date: ${eventDate}<br>
        Location: ${eventLocation}<br>
        Description: ${eventDescription}
    `;

    eventList.appendChild(eventItem);

    eventForm.reset();
});
