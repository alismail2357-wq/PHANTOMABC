function checkTimeWithinNMinutes(timingString, n) {
  // Format expected: 'DD-MM-YYYY HH:mm'
  const parts = timingString.trim().split(' ');
  if (parts.length !== 2) return false;

  const [datePart, timePart] = parts;
  const [day, month, year] = datePart.split('-').map(Number);
  const [hours, minutes] = timePart.split(':').map(Number);

  // Create Date object (month is 0-indexed)
  const inputDate = new Date(year, month - 1, day, hours, minutes);
  if (isNaN(inputDate.getTime())) return false;

  const now = new Date();
  const diffMs = Math.abs(now - inputDate);
  const diffMinutes = diffMs / (1000 * 60);

  return diffMinutes <= n;
}


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
function checkTime2Minutes(timingString) {
  // Format expected: 'DD-MM-YYYY HH:mm'
  const parts = timingString.trim().split(' ');
  if (parts.length !== 2) return false;

  const [datePart, timePart] = parts;
  const [day, month, year] = datePart.split('-').map(Number);
  const [hours, minutes] = timePart.split(':').map(Number);

  // Create a JS Date object (month is 0-indexed)
  const inputDate = new Date(year, month - 1, day, hours, minutes);

  if (isNaN(inputDate.getTime())) return false;

  const now = new Date();
  const diffMs = Math.abs(now - inputDate);
  const diffMinutes = diffMs / 1000 / 60;

  return diffMinutes <= 2;
}

//noooooooooooooooow

// Function to check time
function checkTime(timingString) {
  // Format expected: 'DD-MM-YYYY HH:mm'
  const parts = timingString.trim().split(' ');
  if (parts.length !== 2) return false;

  const [datePart, timePart] = parts;
  const [day, month, year] = datePart.split('-').map(Number);
  const [hours, minutes] = timePart.split(':').map(Number);

  // Create a JS Date object (month is 0-indexed)
  const inputDate = new Date(year, month - 1, day, hours, minutes);

  if (isNaN(inputDate.getTime())) return false;

  const now = new Date();
  const diffMs = Math.abs(now - inputDate);
  const diffMinutes = diffMs / 1000 / 60;

  // Check if the difference is 3 minutes or more
  return diffMinutes >= 3;
}


//Checking all Boxes First




     charPress("s",false,()=>{
  
      const taskList = document.getElementsByClassName("ui-widget-content jqgrow ui-row-ltr")
  for (task of taskList){
  let timingString=task.children[13].innerText
    if(checkTimeWithinNMinutes(timingString, 4)==true) {
         task.children[0].click()
  }
}

    const claimBtn = document.querySelector("#claimTask")
    claimBtn.click()
     setTimeout(()=>{
        const confirm = document.querySelector("body > div.bootbox.modal.fade.bootbox-confirm.in > div > div > div.modal-footer > button.btn.btn-primary")
  confirm.click()
  setTimeout(()=>{
      const ok = document.querySelector("body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button")
      ok.click()
      setTimeout(()=>{
          const success=document.querySelector("body > div.bootbox.modal.fade.bootbox-alert.in > div > div > div.modal-footer > button")
          success.click()
      },150)
  },150)
  },150)

})



 



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
  theCase.value = "BIR KADEM";
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
  theCase.value = "Bordj El Kifan";
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
  theCase.value = "SIDI M HAMED";
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


//CONSTANTINE 

if (theCase.value === "Constantine Wilaya" || theCase.value === "Constantine Wilaya" ) {
  theCase.value = "Les Eucaliptus";
}





})

    
      
 

    





  
  
 






  





 

