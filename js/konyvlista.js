function egyKonyv(i){
	let k=konyvek[i];
	document.getElementById("konyvinfo").innerHTML=""+
    "<div class='konyv'>"+
			"<div>"+
				"<img src='img/"+k.kep+"'>"+
				"<h1>"+k.iro+"</h1>"+
				"<h2>"+k.cim+"</h2>"+
				"<h3>"+k.kiado+", "+k.kiadas+"</h3>"+
			"</div>"+
			"<p>"+k.leiras+"</p>"+
    "</div>"
}

function index(x1,x2) {
	if (x1+x2<0) return konyvek.length-1;
	else if (x1+x2>=konyvek.length) return (x1+x2)-konyvek.length;
	else return x1+x2;
}

function kepdb() {
	let kepszel=120;
	let keretszel=700;
	if (screen.width>keretszel) return parseInt(keretszel/kepszel-1);
	else return parseInt(screen.width/kepszel-2);
}

function mozgas(mennyit){
	aktKonyv=index(aktKonyv,mennyit);
	let kI=aktKonyv;
	let kiKepek="";
	for (i=0; i<kepdb(); i++) {
		kI=index(aktKonyv,i);
		kiKepek+="<img onclick='egyKonyv("+kI+")' class='slide-kep' id='' src='img/"+konyvek[kI].kep+"'>";
	}
	document.getElementById("kepek").innerHTML=kiKepek;
}















