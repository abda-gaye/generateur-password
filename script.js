let passwordoutput = document.getElementById("passwordoutput")
let tableauminuscule = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
let tableaumajuscule = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
let tableaunumero = [1,2,3,4,5,6,7,8,9,0];
let tableausymbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];
function generateur() {
    let tabtotal = [].concat( 
        lowercase.checked ? tableauminuscule : [], 
        uppercase.checked ? tableaumajuscule : [],
        numbers.checked ? tableaunumero : [],
        symbols.checked ? tableausymbole : []);
        let lenPass = parseInt(document.getElementById('longueur').value)
        let password = ''
        if (tabtotal<1 && lenPass<15) {
            alert("tu dois au moins choisir un  caractere")
            alert('Le minimum est de 15 caractères');
        }
        else if (tabtotal.length>=1 && lenPass< 15) {
   
            alert('Le minimum est de 12 caractères');
            
            
          }
          ///// si l'utilisateur saisi aucun critère
  
   else if (tabtotal.length<1 && lenPass< 15) {
	alert('Tu dois séléctionner au moins un critère');
   
    
  }
  
   
  else if (tabtotal.length<1 && lenPass>= 12) {
   
	alert('Tu dois séléctionner au moins un critère');
   
    
  }
  
          else {

            for (i = 0; i < lenPass; i++) {
              password+= tabtotal[Math.floor(Math.random() * tabtotal.length)]; 

            }
         passwordoutput.value = password; 
        
        }
      
}
function copie(){
	 
    if (document.getElementById('passwordoutput').value==0) {
        
        alert('Case vide , il n y a rien à copier')
    }
    else {
passwordoutput.select();
 document.execCommand('copy');
 alert('Copié')
}
}
