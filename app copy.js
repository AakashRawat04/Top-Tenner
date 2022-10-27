// https://rapidapi.com/neoscrap-net/api/google-search72/

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "",
		"X-RapidAPI-Host": "",
	},
};

async function getAllResults(query) {
	const url = `https://google-search72.p.rapidapi.com/search?query=${query}&gl=us&lr=en&num=10&start=1`;
	console.log("get all results page.");
	await fetch(url, options)
		.then((res) => res.json())
		.then((responseList) => {
			console.log(responseList);

			//all results section
			const results_section = document.querySelector(".results-section");

			responseList["items"].forEach((item) => {
				const heading = item.title;

				//main div result_element --> everything inside result_element
				const result_element = document.createElement("div");
				result_element.classList.add(
					..."mt-10 hover:shadow-xl border-2 rounded-md border-transparent p-5 bg-purple-700 transition ease-in-out delay-75 hover:-translate-y-0 hover:scale-110 duration-200 hover:shadow-cyan-500/20".split(
						" "
					)
				);

				//heading of the result element
				const result_heading = document.createElement("span");
				result_heading.classList.add(
					..."heading text-xl font-bold hover:underline hover:text-blue-400 hover:cursor-pointer".split(
						" "
					)
				);

				//a tag for heading
				const heading_link = document.createElement("a");
				heading_link.setAttribute("href", `${item.link}`);
				heading_link.textContent = heading;

				//injecting anchor tag in span
				result_heading.appendChild(heading_link);

				//injecting final heading in result element
				result_element.appendChild(result_heading);

				//adding hr break line
				const hr = document.createElement("hr");
				hr.classList.add(..."border border-cyan-400 my-2".split(" "));
				result_element.appendChild(hr);

				//discription
				const discruption = document.createElement("div");
				discruption.classList.add(..."p-1 text-black".split(" "));
				discruption.textContent = item.snippet;
				result_element.appendChild(discruption);

				//adding the final div to the main div
				results_section.appendChild(result_element);
			});
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

const params = new URLSearchParams(window.location.search);
const query = params.get("search");
if (query) {
	console.log("query is not null here");
	getAllResults(query);
}
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value&name=ash"

const search_button = document.getElementById("search_button");
const input_field = document.getElementById("search_field");
search_button.addEventListener("click", () => {
	if (input_field.value.trim()) {
		window.location.search = `?search=${input_field.value.trim()}`;
	}
});

const tryMe = (...numbers) => console.log(numbers);

const prevObj = { a: 5, b: "Hello" };

const newObj = { ...prevObj, b: "Hello overidden" };

console.log("abcabcdba".split("a"));
