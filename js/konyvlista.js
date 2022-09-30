function listazas() {
		/*
		for (i=0; i<konyvek.length; i++)
		document.write(""+
    "<div class='konyv'>"+
			"<img src='img/"+konyvek[i].kep+"'>"+
			"<h1>"+konyvek[i].iro+"</h1>"+
			"<h2>"+konyvek[i].cim+"</h2>"+
			"<h3>"+konyvek[i].kiado+", "+konyvek[i].kiadas+"</h3>"+
			"<div class='elvalaszto'></div>"+
			"<p>"+konyvek[i].leiras+"</p>"+
    "</div>")
		*/
		
		for (k of konyvek)
		document.write(""+
    "<div class='konyv'>"+
			"<div>"+
				"<img src='img/"+k.kep+"'>"+
				"<h1>"+k.iro+"</h1>"+
				"<h2>"+k.cim+"</h2>"+
				"<h3>"+k.kiado+", "+k.kiadas+"</h3>"+
			"</div>"+
			"<p>"+k.leiras+"</p>"+
    "</div>")
}