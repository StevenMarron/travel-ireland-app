window.addEventListener("load", Year);
export default function Year(){
	let year = document.getElementById("year"), now = new Date(), yearNow = now.getFullYear();
	year.innerHTML = yearNow;
	//console.log(yearNow);
};