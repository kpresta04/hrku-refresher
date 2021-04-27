const fetch = require("node-fetch");

async function refresh() {
	const delay = Math.floor(Math.random() * 10) + 100000;
	console.log({ delay });

	const data = await fetch(
		"https://serene-reaches-03817.herokuapp.com/auth/refresh"
	);

	console.log(data);

	setTimeout(refresh, delay);
}

refresh();
