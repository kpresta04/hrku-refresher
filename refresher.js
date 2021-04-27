const fetch = require("node-fetch");

function refresh() {
	const delay = Math.floor(Math.random() * 10) + 1000;
	console.log({ delay });
	setTimeout(refresh, delay);
}

refresh();
