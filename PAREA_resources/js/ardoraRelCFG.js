//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=80; scoreInc=10; scoreDec=10
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Arial, Helvetica, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="MUY BIEN ...LO LOGRASTE."; messageTime=""; messageError="INTENTALO DE NUEVO, TU PUEDES."; messageErrorG="INTENTALO DE NUEVO, TU PUEDES."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UEFSRUE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Bandera de la República Dominicana.</p>","<p>Es conocido por sus coloridos disfraces y máscaras, que a menudo representan figuras históricas, personajes mitológicos, o sátiras. de la vida cotidiana.</p>","<p>Son los Padres de la Patria.</p>","<p>Es la patrona espiritual del pueblo dominicano y se celebra cada 21 de enero.</p>","<p>Plato tipico de la República Dominicana.</p>","<p>Es baile nacional de la  República  Dominicana..</p>","<p>El Merengue Dominicano, utiliza principalmente 3 instrumentos fundamentales.</p>","<p>El deporte más practicado en la República Dominicana.</p>"];
var iL=["","","","","","","",""];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["","","","","","","",""]; ansRL=["NQ==","Mg==","MA==","Ng==","NA==","Nw==","Mw==","MQ=="];
var iR=["<div  align='center'><img alt='' src='PAREA_resources/media/Imagen_de_WhatsApp_2025-07-07_a_las_15.52.56_380668d1.jpg'></div>","<div  align='center'><img alt='' src='PAREA_resources/media/Imagen_de_WhatsApp_2025-07-07_a_las_17.31.32_0aa5512a.jpg'></div>","<div  align='center'><img alt='' src='PAREA_resources/media/Imagen_de_WhatsApp_2025-07-07_a_las_15.52.56_31a2d421.jpg'></div>","<div  align='center'><img alt='' src='PAREA_resources/media/Imagen_de_WhatsApp_2025-07-07_a_las_17.12.57_259d7cee.jpg'></div>","<div  align='center'><img alt='' src='PAREA_resources/media/Imagen_de_WhatsApp_2025-07-07_a_las_15.53.11_e773da1f.jpg'></div>","<div  align='center'><img alt='' src='PAREA_resources/media/Imagen_de_WhatsApp_2025-07-07_a_las_15.52.55_55c82aaf.jpg'></div>","<div  align='center'><img alt='' src='PAREA_resources/media/Imagen_de_WhatsApp_2025-07-07_a_las_15.53.11_3ca14644.jpg'></div>","<div  align='center'><img alt='' src='PAREA_resources/media/Imagen_de_WhatsApp_2025-07-07_a_las_17.11.51_89f7c20e.jpg'></div>"];
var auR=[3,8,2,7,5,1,4,6];
