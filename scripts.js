// Side panel functions
function openPanel() {
    document.getElementById("sidePanel").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}

function closePanel() {
    document.getElementById("sidePanel").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
}

// Function to generate PDFs
function generatePDFs() {
    alert("Generating PDFs for Diet and Exercise...");
    downloadPDF("Diet.pdf");
    downloadPDF("Exercise.pdf");
}

function downloadPDF(filename) {
    const link = document.createElement("a");
    link.href = "#";
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to reveal the next day's checkbox
function revealNextDay(day) {
    const nextDay = day + 1;
    if (nextDay <= 30) {
        const nextCheckbox = document.createElement("label");
        nextCheckbox.innerHTML = `<input type="checkbox" id="day${nextDay}" onclick="revealNextDay(${nextDay})"> Day ${nextDay}`;
        document.getElementById("trackingSection").appendChild(nextCheckbox);
    }
    document.getElementById(`day${day}`).disabled = true;
}
