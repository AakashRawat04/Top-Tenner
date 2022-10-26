const fetch = require("node-fetch");

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "ea6c510851msh7d4d310eddd33b1p1ffccajsnbc14787d50ae",
		"X-RapidAPI-Host": "google-search-2.p.rapidapi.com",
	},
};

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));

async function getAllResults(query) {
	const url = `https://google-search-2.p.rapidapi.com/organicResults?query=${query}&num=10&gl=us&hl=en&page=0&nfpr=0&device=desktop`;
	console.log("get all results page.");
	fetch(url, options)
		.then((res) => res.json())
		.then((json) => {
			for (i = 0; i < json.organic_results.length; i++) {
				const heading = json.organic_results[i].title;

				//all results section
				const results_section =
					document.getElementsByClassName("results-section");

				//main div result_element --> everything inside result_element
				const result_element = document.createElement("div");
				result_element.classList.add(
					"mt-10 hover:shadow-xl border-2 rounded-md border-transparent p-5 bg-purple-700 transition ease-in-out delay-75 hover:-translate-y-0 hover:scale-110 duration-200 hover:shadow-cyan-500/20"
				);

				//heading of the result element
				const result_heading = document.createElement("span");
				result_heading.classList.add(
					"heading text-xl font-bold hover:underline hover:text-blue-400 hover:cursor-pointer"
				);

				//a tag for heading
				const heading_link = document.getElementById("heading");
				heading_link.setAttribute("href", `${json.organic_results[i].link}`);

				//injecting anchor tag in span
				result_heading.appendChild(heading_link);

				//injecting final heading in result element
				result_element.appendChild(result_heading);

				//adding hr break line
				const hr = document.createElement("hr");
				hr.classList.add("border border-cyan-400 my-2");
				result_element.appendChild(hr);

				//discruption
				const discruption = document.createElement("div");
				discruption.classList.add("p-1 text-black");
				result_element.appendChild(discruption);

				//adding the final div to the main div
				results_section.appendChild(result_element);
			}
		})
		.catch((err) => console.error("error:" + err));
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
