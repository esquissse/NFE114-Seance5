document.addEventListener("DOMContentLoaded", function() {
   document.getElementById('submit').addEventListener('click', convertir,false);
}, false);

function convertir(event) {
  var francs = document.getElementById('francs').value;
  var euros = document.getElementById('euros').value;
  if ( verif() == true ) {
    // On déclenche l'appel ajax
    var req=getxhr();
    req.open("POST","php/convertisseur.php",true);
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    req.onreadystatechange=function() {
      if(req.readyState==4) {
        if(req.status==200) {
          // alert("voici la réponse : "+req.responseText);
          var reponse = req.responseText.split('=');
          if (reponse[0] == 'francs')
            document.getElementById('francs').value= arrondir(reponse[1]);
          else
            document.getElementById('euros').value= arrondir(reponse[1]);
        }
      }
    };
  var envoi = "francs="+francs+"&euros="+euros;
  req.send(envoi);
  } else {
    alert ("BAZINGA !\nVous ne pouvez convertir qu'une seule valeur à la fois !");
  }
  event.preventDefault();
}

// Cette fonction vérifie qu'un seul et un seul des 2 champs est rempli
function verif() {
  var francs = document.getElementById('francs').value;
  var euros = document.getElementById('euros').value;
  var result = 0;

  francs.length == 0 ? "" : result++;
  euros.length == 0 ? "" : result++;

  if ( result > 0 && result < 2) {
    return true;
  } else {
    return false;
  }
}

function getxhr() {
  if(window.XMLHttpRequest)
    xhr=new XMLHttpRequest();
  else if(window.ActiveXObject) {
    try {
      xhr=new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  return xhr;
}

function arrondir(chiffre) {
  if (chiffre.toFixed) {
    return chiffre.toFixed(2);
  } else {
    return Math.round(chiffre*100)/100;
  }
}