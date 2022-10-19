const options = {
	method: "POST",
	url: "google-search-5.p.rapidapi.com",
	headers: {
		"content-type": "application/json",
		"X-RapidAPI-Key": `ea6c510851msh7d4d310eddd33b1p1ffccajsnbc14787d50ae`,
		"X-RapidAPI-Host": "google-search-5.p.rapidapi.com",
	},
	data: '{"query":"hello world","gl":"US","hl":"en_US","device":"desktop","duration":"","autocorrect":1,"page":1,"uule":"this is secret","pages":2}',
};

async function getAllResults() {
	console.log("get all results page.");
}

async function getNews() {
	console.log("get news page.");
}

async function getImages() {
	console.log("get images page.");
}

async function getVideos() {
	console.log("get videos page.");
}

const allResults = document.getElementById("allResults");
allResults.addEventListener("click", getAllResults);

const newsResults = document.getElementById("newsResults");
newsResults.addEventListener("click", getNews);

const imageResults = document.getElementById("imageResults");
imageResults.addEventListener("click", getImages);

const videoResults = document.getElementById("videoResults");
videoResults.addEventListener("click", getVideos);
