if (document.URL.match('\.*object_data_id=\.*') != null) {

	document.querySelector("div.headerBody").style.visibility = "hidden";
	document.querySelector("div.headerBody").style.height = 0;
	document.querySelector("div.top-menu").style.visibility = "hidden";
	document.querySelector("div.top-menu").style.height = 0;
	document.querySelector("div.portlet-side-menu").style.visibility = "hidden";
	document.querySelector("div.content-right").style.marginTop = "-90px";

	var cc = 0;
	var elem1;
	var elem2;

	var check1 = setInterval(function() {
		elem1 = document.getElementById("sw_r_enc");
		if (elem1 != null || cc > 100) {
			clearInterval(check1);
			console.log("sw_r_enc exists",cc);
		} else {
			console.log("sw_r_enc doesn't exist",cc);
			cc = cc + 1
		}
	}, 100); // check every 100ms
	setTimeout(() => { if (r_enc.style.display == "none") { sw_r_enc.click(); } }, 500);
	

	var check2 = setInterval(function() {
		elem2 = document.getElementById("sw_s_notes");
		if (elem2 != null || cc > 100) {
			clearInterval(check2);
			console.log("sw_s_notes exists",cc);
		} else {
			console.log("sw_s_notes doesn't exist",cc);
			cc = cc + 1
		}
	}, 100); // check every 100ms
	setTimeout(() => { if (s_notes.style.display == "none") { sw_s_notes.click(); } }, 500);

}