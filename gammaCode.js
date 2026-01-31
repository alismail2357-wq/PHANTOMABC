//Key Pressed
function charPress(char, ctrlReq, callback) {
  document.addEventListener('keydown', (event) => {
    const pressedChar = event.key.toLowerCase();
    const targetChar = char.toLowerCase();

    if (ctrlReq) {
      if (event.ctrlKey && pressedChar === targetChar) {
        callback();
      }
    } else {
      if (!event.ctrlKey && pressedChar === targetChar) {
        callback();
      }
    }
  });
}


// Function to check if the time is within 2 minutes of now






charPress("shift",false,()=>{
  
let communes = document.getElementsByClassName('select2-chosen')
let communeValue=communes[1].innerText 
let theCase = document.querySelector('#address1')
theCase.value=communeValue

theCase.value = theCase.value.replace(/-/g, ' ');
theCase.value = theCase.value.replace(/'/g, ' ');
theCase.value = theCase.value.replace(/\//g, ' ');
theCase.value = theCase.value.replace(/é/g, 'e');




if (theCase.value === "Les Eucaliptus/ Cherarba") {
  theCase.value = "Les Eucaliptus";
}

if (theCase.value === "B E Bahri") {
  theCase.value = "Bordj El Bahri";
}

if (theCase.value === "O Fayet") {
  theCase.value = "Ouled Fayet";
}

if (theCase.value === "BIR KADEM R1 TEXRIANE R3") {
  theCase.value = "BIR KHADEM";
}

if (theCase.value === "Staoueli R2") {
  theCase.value = "Staoueli";
}

if (theCase.value === "Reghaia R1") {
  theCase.value = "Reghaia";
}

if (theCase.value === "Bologhine R1") {
  theCase.value = "Bologhine Ben Ziri";
}

if (theCase.value === "DOUERA R2") {
  theCase.value = "Douera";
}

if (theCase.value === "El Kennar") {
  theCase.value = "El Kennar Nouchfi";
}

if (theCase.value === "DRARIA R2") {
  theCase.value = "Draria";
}

if (theCase.value === "Alger Haute Casbah R1") {
  theCase.value = "Casbah";
}

if (theCase.value === "Dely ibrahim R2") {
  theCase.value = "Dely Ibrahim";
}

if (theCase.value === "Mohammadia R2") {
  theCase.value = "Mohammadia";
}


if (theCase.value === "KHRAISSIA R3") {
  theCase.value = "Khraissia";
}

if (theCase.value === "Bordj el Kiffan Faizi") {
  theCase.value = "Bordj El Kiffan";
}

if (theCase.value === "KOUBA RCE") {
  theCase.value = "Kouba";
}

if (theCase.value === "SAOULA R3") {
  theCase.value = "Saoula";
}

if (theCase.value === "BABA HASSEN R3") {
  theCase.value = "Baba Hassen";
}

if (theCase.value === "BACHDJARAH R1") {
  theCase.value = "BACHDJARAH";
}

if (theCase.value === "BENI MESSOUS R2") {
  theCase.value = "Beni Messous";
}

if (theCase.value === "Staoueli C ") {
  theCase.value = "Staoueli";
}

if (theCase.value === "AYN TAYA R1") {
  theCase.value = "Ayn Taya";
}

if (theCase.value === "HYDRA RHC") {
  theCase.value = "Hydra";
}

if (theCase.value === "EL ACHOUR R4") {
  theCase.value = "El Achour";
}

if (theCase.value === "OUED EL SEMAR R2") {
  theCase.value = "Oued El Semar";
}

if (theCase.value === "Alger Mohamed V") {
  theCase.value = "Mohammed Belouizdad";
}

if (theCase.value === "BARAKI BAR SI LAKHDAR R3") {
  theCase.value = "Baraki";
}

if (theCase.value === "ALGER SIDI M HAMED") {
  theCase.value = "SIDI MHAMED"; 
}

if (theCase.value === "Souidania R3") {
  theCase.value = "Souidania";
}

if (theCase.value === "Constantine El Gamas") {
  theCase.value = "El Gamas";
}

if (theCase.value === "Les Eucaliptus  Cherarba") {
  theCase.value = "Les Eucaliptus";
}

if (theCase.value === "Bir Ghabalou") {
  theCase.value = "Bir Ghbalou";
}



//CONSTANTINE 

if (theCase.value === "Constantine Wilaya" || theCase.value === "Constantine Wilaya" ) {
  theCase.value = "Les Eucaliptus";
}





})

    
      
 

    





  
  
 






  





 




