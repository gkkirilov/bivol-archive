function getCountry(str, id){

	document.getElementById("smsrm_instructions_" + id).innerHTML='<img src="'+ smsrm_custom.smsrm_url +'/smsrm/images/smsrm-loader.gif" />';

	if (str==""){
		document.getElementById("smsrm_instructions_" + id).innerHTML="";
		return;
	} 
	if (window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
 
	xmlhttp.onreadystatechange=function(){
	
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("smsrm_instructions_" + id).innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "?country_prices="+str+"&id="+id,true);
	xmlhttp.send();
}