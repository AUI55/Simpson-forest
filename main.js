 
 
 
Fname = document.getElementById('firstName');
Lname = document.getElementById('lastName');
btn1 = document.getElementById('Hellobtn');
out1 = document.getElementById('totalCost');
etBed = document.getElementById('extraBed');
ouput = document.getElementById('CurrentBookingDetails');
checkin = document.getElementById('checkIn');
checkout = document.getElementById('checkOut');
mail = document.getElementById('Mail');
contact = document.getElementById('Contact');
Nationality = document.getElementById('nationality');
SingleRoom = document.getElementById('singleRoom');
DoubleRoom = document.getElementById('doubleRoom');
TripleRoom = document.getElementById('tripleRoom');
NumberofAdults = document.getElementById('no.Adults');
NumberofChildrenbelow5 = document.getElementById('no.Child_less5');
NumberofChildrenabove5 = document.getElementById('no.Child_above5');
output2 = document.getElementById('RoomDetailsofCB');

FirstName = document.getElementById('FnAdv'); 
LastName = document.getElementById('LnAdv'); 
Date = document.getElementById('AdvDate'); 
ADvNationality = document.getElementById('AdvNationality'); 
AdventureAdults = document.getElementById('NumofAdultsAdventure');
AdventureKids = document.getElementById('NumofKidsAdventure');
Contactnumber = document.getElementById('ContactNo');
Email = document.getElementById('EmailAdv');
diving = document.getElementById('Diving');
output3 = document.getElementById('CurrentAdventureBooking');
output4 = document.getElementById('CurrentCostofAdvBooking');
withguide = document.getElementById('guidecheck');








window.addEventListener('load', init);
Fname.addEventListener('change', changeText);
Lname.addEventListener('change', changeText);
checkin.addEventListener('change',changeText)
checkout.addEventListener('change',changeText)
mail.addEventListener('change',changeText)
contact.addEventListener('change',changeText)
NumberofAdults.addEventListener('change',changeText)
NumberofChildrenabove5.addEventListener('change',changeText)
NumberofChildrenbelow5.addEventListener('change',changeText)
SingleRoom.addEventListener('change',changeText);
DoubleRoom.addEventListener('change', changeText);
TripleRoom.addEventListener('change', changeText);
Nationality.addEventListener('change', changeText);
etBed.addEventListener('change', changeText);






FirstName.addEventListener('change', adventure);
LastName.addEventListener('change', adventure);
Date.addEventListener('change', adventure);
ADvNationality.addEventListener('change', adventure);
AdventureAdults.addEventListener('change', adventure);
AdventureKids.addEventListener('change', adventure);
Contactnumber.addEventListener('change', adventure);
Email.addEventListener('change', adventure);
diving.addEventListener('change', adventure);
withguide.addEventListener('change', adventure);



function init(){
  SingleRoom.value = 0;
  DoubleRoom.value = 0;
  TripleRoom.value = 0;
  NumberofAdults.value = 0;
  NumberofChildrenabove5.value = 0;
  NumberofChildrenbelow5.value = 0;
  AdventureAdults.value = 0;
  AdventureKids.value = 0;
  diving.value = 0;
}


function changeText(){


    let fullName = (Fname.value);
    let lastName = (Lname.value);
    let Cin = (checkin.value);
    let Cout = (checkout.value);
    let email = (mail.value);
    let contactNumber = (contact.value);
    let nation = (Nationality.value);
    let single = (SingleRoom.value);
    let double = (DoubleRoom.value);
    let triple = (TripleRoom.value);
    let ExtraBed = (etBed.value);
    let adults = (NumberofAdults.value);
    let childbelow5 = (NumberofChildrenbelow5.value);
    let childabove5 = (NumberofChildrenabove5.value);

  ouput.innerHTML = `Name :  <strong>${fullName}</strong> <strong>${lastName}</strong> <br> check in Date : <strong>${Cin}</strong> <br> check out date : <strong>${Cout}</strong>
  <br>Contact Number: <strong>${contactNumber}</strong> <br> Email : <strong>${email}</strong> <br>Number of Adults : <strong>${adults}</strong>
  <br>Number of Children below 5 years old: <strong>${childbelow5}</strong> <br>Number of Children above 5 years old : <strong>${childabove5}</strong>
  <br>Nationality: <strong>${nation}</strong> <br>Number of Single Room(s): <strong>${single}</strong> <br>Number of Double Room(s): <strong>${double}</strong>
  <br>Number of Triple Room(s): <strong>${triple}</strong><br>Extra Bed(s): <strong>${ExtraBed}`;


  output2.innerHTML = `Cost of Single Room(s) : <strong>LKR.${single*25000}</strong><br>Cost of Double Room(s) : <strong>LKR.${double*35000}</strong>
  <br>Cost of Triple Room(s) : <strong>LKR.${triple*40000}</strong><br>Kids above 5 years age : <strong>LKR.${childabove5*5000}</strong> extra for Meal(s)<br>
  Extra Bed : <strong>LKR.${ExtraBed*8000}</strong><br><br> Total Cost : <strong>LKR.${(single*25000)+(double*35000)+(triple*40000)+(childabove5*5000)+(ExtraBed*8000)}`

   
}


function adventure (){
  let fullname = (FirstName.value);
  let lastname = (LastName.value);
  let date = (Date.value);
  let nationality = (ADvNationality.value);
  let adults = (AdventureAdults.value);
  let kids = (AdventureKids.value);
  let contact = (Contactnumber.value);
  let mail = (Email.value);
  let dive = (diving.value);
  let nationalityTL = (ADvNationality.value.toLowerCase());
  let guide = (withguide.value);

  if (guide == true){
    Guide = "Yes";
  }
  else{
    Guide = "No";
  }


  output3.innerHTML = `Name : <strong>${fullname} ${lastname}</strong><br>Date : <strong>${date}</strong>
  <br>Nationality : <strong>${nationality}</strong><br>Number of Adults: <strong>${adults}</strong><br>
  Number of Children : <strong>${kids}</strong><br>Contact Number : <strong>${contact}</strong><br>
  Email : <strong>${mail}</strong><br>Diving : <strong>${dive}hr</strong><br>Guide: <strong>${Guide}</strong>`

  if(dive.length > 0){
    if(nationalityTL == "sri lankan" || nationalityTL == "sri lanka" ){
      AdultCost =  adults*dive*5000;
      ChildCost = kids*dive*2000;
      output4.innerHTML = `Adult cost : LKR.${AdultCost}<br>Kid(s) Cost : LKR.${ChildCost}<br> Total Cost : LKR.${AdultCost+ChildCost} `
    }
    else if (nationalityTL != "sri lankan" || nationalityTL != "sri lanka"){
      AdultCost = adults*dive*10000;
      ChildCost = kids*dive*5000;
      output4.innerHTML = `Adult cost : LKR.${AdultCost}<br>Kid(s) Cost : LKR.${ChildCost} <br> Total Cost : LKR.${AdultCost+ChildCost}`
      
    }



}

function AdventureCost (){
  let dive = (diving.value);

  let adults = (AdventureAdults.value);
  let kids = (AdventureKids.value);
  


 
 }
 





}
