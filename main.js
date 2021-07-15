const textListener = document.querySelector("#translator-input");
textListener.addEventListener("input", submit);

// lets create helper functions
const helper = document.querySelector("#helpMe");
helper.addEventListener("click", showHelpers);
function showHelpers() {
	const showEncodeHelper = document.querySelector("#encode-help");
	const showTranslateHelper = document.querySelector("#translate-help");
	const showMadlibHelper = document.querySelector("#madlib-help");
	const showSearchHelper = document.querySelector("#search-help");
	const showRandomHelper = document.querySelector("#random-help");

	if (showEncodeHelper.style.display === "none") {
		showEncodeHelper.style.display = "block";
		showEncodeHelper.innerText =
			"This option changes each letter that you type into an emoji that starts with that letter.";
		showTranslateHelper.style.display = "block";
		showTranslateHelper.innerText =
			"This option turns the word you type into a matching emoji.";
		showMadlibHelper.style.display = "block";
		showMadlibHelper.innerText =
			"This option tries to find an emoji that matches your words.";
		showSearchHelper.style.display = "block";
		showSearchHelper.innerText =
			"This option will search through all the emojis and list out any that match your input.";
		showRandomHelper.style.display = "block";
		showRandomHelper.innerText =
			"This option will randomly do any of the above options.";
	} else {
		showEncodeHelper.style.display = "none";
		showTranslateHelper.style.display = "none";
		showMadlibHelper.style.display = "none";
		showSearchHelper.style.display = "none";
		showRandomHelper.style.display = "none";
	}
}
function submit() {
	const inputBox = document.querySelector("#translator-input");
	const result = document.querySelector("#results");
	const checkboxes = document.querySelectorAll("input[type=radio]:checked");
	inputBoxValue = inputBox.value;

	for (let i = 0; i < checkboxes.length; i++) {
		let checkbox = checkboxes[i];
		if (checkbox.value === "encode") {
			result.innerText = encode(inputBoxValue);
		}
		if (checkbox.value === "madlib") {
			result.innerText = madlib(inputBoxValue);
		}
		if (checkbox.value === "translate") {
			result.innerText = translate(inputBoxValue);
		}
		if (checkbox.value === "search") {
			let searchValue = search(inputBoxValue);
			result.innerHTML = [];
			if (searchValue.length === 0) {
				result.innerText = "No feelings were hurt in the making of this app.";
			}
			for (let j = 0; j < searchValue.length; j++) {
				const searchOutput = document.createElement("p");
				searchOutput.innerText = searchValue[j].symbol;
				result.appendChild(searchOutput);
			}
		}
		if (checkbox.value === "random") {
			let randomSelect = Math.ceil(Math.random() * 4);
			if (randomSelect === 1) {
				result.innerText = encode(inputBoxValue);
			}
			if (randomSelect === 2) {
				result.innerText = madlib(inputBoxValue);
			}
			if (randomSelect === 3) {
				result.innerText = translate(inputBoxValue);
			}
			if (randomSelect === 4) {
				let searchValue = search(inputBoxValue);
				result.innerHTML = [];
				if (searchValue.length === 0) {
					result.innerText = "No feelings were hurt in the making of this app.";
				}
				for (let j = 0; j < searchValue.length; j++) {
					const searchOutput = document.createElement("p");
					searchOutput.innerText = searchValue[j].symbol;
					result.appendChild(searchOutput);
				}
			}
		}
	}
}
