window.addEventListener("load", Year);
export default function Year(){
	let year = document.getElementById("year"), now = new Date(), yearNow = now.getFullYear();
	year.innerHTML = yearNow;
	//console.log(yearNow);
};
// The current year is retrieved from Date() method, this will be used in the footer of the PWA