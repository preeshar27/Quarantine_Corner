var request = require("request")
request('https://corona.lmao.ninja/v2/historical/Canada?lastdays=1', function(err, res, body){

	var obj = JSON.parse(body);
	var ca_de = obj.timeline.deaths;
	var ca_ca = obj.timeline.cases;
	var key = Object.keys(ca_de)[0];
	document.getElementById("ca_d").innerHTML = "Cases: ".concat(" ", ca_ca[key]).concat(" Deaths: ", ca_de[key])
	
	// set document element for canada deaths and cases to _d[key] and _c[key] values;
}
);

function getProv(prov, id_d){
	// prov is province in lower case
	// id_d is death id of prov
	// id_c is cases id of prov

request('https://corona.lmao.ninja/v2/historical/Canada?lastdays=1', function(err, res, body){
var obj = JSON.parse(body);
var id_de;
var id_ca;

if (obj.province.indexOf(prov)>=0){
	var link = 'https://corona.lmao.ninja/v2/historical/Canada/'.concat(prov).concat('?lastdays=1')
	request(link , function(err, res, body){
		var data = JSON.parse(body)
		id_de = data.timeline.deaths
		id_ca = data.timeline.cases
		var key = Object.keys(id_de)[0];
		document.getElementById(id_d).innerHTML = "Cases: ".concat(" ", id_ca[key]).concat(" Deaths:", id_de[key])

	}
	)
}

	// set document element to the id_de[key] and id_ca[key] values;

			
}
)
}


getProv("alberta", "ab_d")
getProv("british columbia", "bc_d")
getProv("manitoba", "mb_d")
getProv("new brunswick", "nb_d")
getProv("newfoundland and labrador", "nl_d")
getProv("newfoundland and labrador", "nl_d2")
getProv("nova scotia", "ns_d")
getProv("ontario", "on_d")
getProv("ontario", "on_d2")
getProv("prince edward island", "pe_d")
getProv("quebec", "qc_d")
getProv("quebec", "qc_d2")
getProv("saskatchewan", "sk_d")
getProv("northwest territories", "nt_d")
getProv("yukon", "yt_d")

