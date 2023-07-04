function json_to_html() {
	let json = json_;
	let grid_html = "<div class='container col-xs-4 p-1 my-4 bg-dark'>";
	let id = 0;
	for (let i = 0; i < json[1][0].length; i++) {
		grid_html += "<div class='row p-3'>";
		for (let j = 0; j < json[1][0][i]; j++) {
			grid_html += "<div class='col-sm-" + json[1][2][id] + "'>";
			grid_html += "<nav class='navbar navbar-light text-left bg-light'>";
			grid_html += "<div class='container-fluid'>";
			grid_html += "<div class='container-fluid' type='button' data-bs-toggle='collapse' data-bs-target='#navbar" + id + "'>";
			grid_html += "<a class='navbar-brand' href='#'>" + json[1][1][id] + "</a></div>";
			grid_html += "<div class='collapse navbar-collapse' id='";
			grid_html += "navbar" + id + "'><ul class='navbar-nav'>";
			for (let k = 0; k < json[2][id].length; k++) {
				grid_html += "<li class='nav-item'><a class='nav-link' href='";
				grid_html += json[2][id][k][1];
				grid_html += "' target='_blank'>";
				grid_html += json[2][id][k][0];
				grid_html += "</a></li>";
			}
			grid_html += "</div></div></nav></div>";
			id++;
		}
		grid_html += "</div>";
	}
	grid_html += "</div>";
	return grid_html;
}
let grid_html = json_to_html();
