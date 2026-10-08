function viewDetails(facility) {
    const details = {
        "Library": "Books, digital resources and study facilities.",
        "Computer Lab": "Modern computers and internet facilities.",
        "Classroom": "Smart classrooms with modern equipment.",
        "Sports": "Indoor and outdoor sports facilities."
    };

    document.getElementById("details").innerHTML =
        "<h2>" + facility + "</h2><p>" +
        details[facility] + "</p>";
}
function addAlert() {
    const message = document
        .getElementById("alertMessage")
        .value.trim();

    const type = document.getElementById("alertType").value;

    if (message === "") {
        alert("Please enter an alert message.");
        return;
    }

    const params = new URLSearchParams({
        message: message,
        type: type
    });

    window.location.href = "alert-details.html?" + params.toString();
}