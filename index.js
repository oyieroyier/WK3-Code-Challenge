document.addEventListener("DOMContentLoaded", () => {
	fetch("http://localhost:3000/films/1")
		.then((response) => response.json())
		.then(renderOnPage);
});

function renderOnPage(data) {
	let pic = document.getElementById("picha");
	let body = document.getElementById("picture_display");

	let otherDetails = document.createElement("div");
	// otherDetails.id = "deets"

	let title = document.createElement("h3");
	let runtime = document.createElement("h4");
	let showtime = document.createElement("h4");
	let availableTickets = document.createElement("h5");

	pic.src = data.poster;
	title.textContent = data.title;
	runtime.textContent = `Runtime : ${data.runtime} minutes`;
	showtime.textContent = `Show Time: ${data.showtime}`;
	availableTickets.textContent = `Available Tickets: ${
		data.capacity - data.tickets_sold
	}`;

	body.appendChild(otherDetails);
	otherDetails.appendChild(title);
	otherDetails.appendChild(runtime);
	otherDetails.appendChild(showtime);
	otherDetails.appendChild(availableTickets);

	// Styling

	body.style.display = "block";

	title.style.border = "1px solid black";
	runtime.style.border = "1px solid black";
	showtime.style.border = "1px solid black";
	availableTickets.style.border = "1px solid black";

	title.style.padding = "10px";
	runtime.style.padding = "10px";
	showtime.style.padding = "10px";
	availableTickets.style.padding = "10px";

	title.style.margin = "20px";
	runtime.style.margin = "20px";
	showtime.style.margin = "20px";
	availableTickets.style.margin = "20px";

	title.style.maxWidth = "100%";
	runtime.style.maxWidth = "100%";
	showtime.style.maxWidth = "100%";
	availableTickets.style.maxWidth = "100%";

	title.style.textAlign = "center";
	runtime.style.textAlign = "center";
	showtime.style.textAlign = "center";
	availableTickets.style.textAlign = "center";

	title.style.borderRadius = "5px";
	runtime.style.borderRadius = "5px";
	showtime.style.borderRadius = "5px";
	availableTickets.style.borderRadius = "5px";

	title.style.background = "#000";
	runtime.style.background = "#000";
	showtime.style.background = "#000";
	availableTickets.style.background = "#000";

	otherDetails.style.background = "#333";
	otherDetails.style.color = "#6274a5";
	otherDetails.style.padding = "20px";
	otherDetails.style.borderRadius = "10px";
	otherDetails.style.fontFamily = "'Chivo Mono', monospace";
}
