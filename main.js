
 
// Reference to interactive elements 

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
promo = document.getElementById('promocode');
validate = document.getElementById('validate');
roomingbookbtn = document.getElementById('roombook');
theForm = document.getElementById('bookingform');
FirstName = document.getElementById('FnAdv'); 
LastName = document.getElementById('LnAdv'); 
adventureDate = document.getElementById('AdvDate'); 
ADvNationality = document.getElementById('AdvNationality'); 
AdventureAdults = document.getElementById('NumofAdultsAdventure');
AdventureKids = document.getElementById('NumofKidsAdventure');
Contactnumber = document.getElementById('ContactNo');
Email = document.getElementById('EmailAdv');
diving = document.getElementById('Diving');
output3 = document.getElementById('CurrentAdventureBooking');
output4 = document.getElementById('CurrentCostofAdvBooking');
withguide = document.getElementById('guidecheck');
adventurebtn = document.getElementById('adventurebook');
adventureForm = document.getElementById('AdventureForm');
favoritebtn = document.getElementById('favoriteBtn');

//Adding Event listeners
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
promo.addEventListener('change', changeText);
validate.addEventListener('click', changeText);
roomingbookbtn.addEventListener('click', roombook);
favoritebtn.addEventListener('click',favorite);


FirstName.addEventListener('change', adventure);
LastName.addEventListener('change', adventure);
adventureDate.addEventListener('change', adventure);
ADvNationality.addEventListener('change', adventure);
AdventureAdults.addEventListener('change', adventure);
AdventureKids.addEventListener('change', adventure);
Contactnumber.addEventListener('change', adventure);
Email.addEventListener('change', adventure);
diving.addEventListener('change', adventure);
withguide.addEventListener('change', adventure);

//btn1.addEventListener('click', changeText);
withguide.addEventListener('click', changeText);

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
  minDate();
}

function minDate (){
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  if(month < 10){
    month = "0" + month;
  }
  let day = today.getDate();
  if ( day < 10){
    day = '0' + day;
  }
  console.log(day);
  const currentdate = `${year}-${month}-${day}`;
  document.getElementById("checkIn").min = currentdate;
  document.getElementById("checkOut").min = currentdate;
  document.getElementById("AdvDate").min = currentdate;
  
}

let overallBookings = [];

function roombook(event){
  if (theForm.checkValidity()){
    event.preventDefault();


    overallBookings.push({
      fullName: `${Fname.value} ${Lname.value}`,
      checkIn: checkin.value,
      checkout: checkout.value,
      contactNumber: contact.value,
      email: mail.value,
      nationality: Nationality.value,
      NumberofAdults: NumberofAdults.value,
      NumberofChildrenabove5: NumberofChildrenabove5.value,
      NumberofChildrenbelow5: NumberofChildrenbelow5.value,
      Singleroom: SingleRoom.value,
      ExtraBed: etBed.value,
    });
   
    swal("Success! :)", "You have Booked Successfully", "success");
    theForm.reset();

    displayOverallBookings();
  }
}

function displayOverallBookings(){
  let overallBookingsHTML = "<ul>";

  overallBookings.forEach((booking, index) => {
    overallBookingsHTML += `<li><strong>Booking ${index + 1}</strong><br>Full Name: ${booking.fullName}<br> Check In : ${booking.checkIn}<br> Check Out : ${booking.checkout}<br>
    Contact number : ${booking.contactNumber}<br>Email : ${booking.email}<br>Nationality : ${booking.nationality}<br>Number of Adults : ${booking.NumberofAdults}<br>
    Number of Children Above 5 : ${booking.NumberofChildrenabove5}<br>Number of Children below 5: ${booking.NumberofChildrenbelow5}<br>Single Room: ${booking.Singleroom}<br>
    Extra Bed: ${booking.ExtraBed}</il>`;
  });1

  overallBookingsHTML += "</ul>";

  document.getElementById('output6').innerHTML = overallBookingsHTML;

  ouput.innerHTML="";
  output2.innerHTML = "";
}
init(); 

 

function favorite (page){
  var favorites = [];
  let NumofRooms = parseInt(SingleRoom.value) + parseInt(DoubleRoom.value) + parseInt(TripleRoom.value);
  let jsonfavorite = {"Full Name":`${Fname.value}${Lname.value}`,
  "checkIn": checkin.value,
  "checkout": checkout.value,
  "contactNumber": contact.value,
  "email": mail.value,
  "nationality": Nationality.value,
  "NumberofAdults": NumberofAdults.value,
  "NumberofChildrenabove5": NumberofChildrenabove5.value,
  "NumberofChildrenbelow5": NumberofChildrenbelow5.value,
  "Singleroom": SingleRoom.value,
  "Doubleroom": DoubleRoom.value,
  "Tripleroom": TripleRoom.value,
  "ExtraBed": etBed.value,
  "Numberofrooms": NumofRooms,};

if(theForm.checkValidity()){//If function used for the Sweet alert
  page.preventDefault();
  swal("Success! :)", "This Booking is Added to Favorite", "success");
}
else{
 console.log(NumofRooms.value);
}

  favorites.push(jsonfavorite);

  localStorage.removeItem(favorites);

  localStorage.setItem("Favorite Booking",JSON.stringify(favorites));
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
    let promotionCode = (promo.value.toLowerCase());
    let procode = (promotion.value);
    let numberofrooms = parseInt(single) + parseInt(double) + parseInt(triple);

    function promotion(){
      if(promotionCode == "promo123"){

        let basecost = (single*25000)+(double*35000)+(triple*40000)+(childabove5*5000)+(ExtraBed*8000);
        let discount = 5/100;
        return basecost-(basecost * discount);
      }
      else{
        return (single*25000)+(double*35000)+(triple*40000)+(childabove5*5000)+(ExtraBed*8000);
      }
    }
    

  ouput.innerHTML = `Name :  <strong>${fullName}</strong> <strong>${lastName}</strong> <br> check in Date : <strong>${Cin}</strong> <br> check out date : <strong>${Cout}</strong>
  <br>Contact Number: <strong>${contactNumber}</strong> <br> Email : <strong>${email}</strong> <br>Number of Adults : <strong>${adults}</strong>
  <br>Number of Children below 5 years old: <strong>${childbelow5}</strong> <br>Number of Children above 5 years old : <strong>${childabove5}</strong>
  <br>Nationality: <strong>${nation}</strong> <br>Number of Single Room(s): <strong>${single}</strong> <br>Number of Double Room(s): <strong>${double}</strong>
  <br>Number of Triple Room(s): <strong>${triple}</strong><br>Total Number of Rooms:<strong>${numberofrooms}</strong><br>Extra Bed(s): <strong>${ExtraBed}`;


  output2.innerHTML = `Cost of Single Room(s) : <strong>LKR.${single*25000}</strong><br>Cost of Double Room(s) : <strong>LKR.${double*35000}</strong>
  <br>Cost of Triple Room(s) : <strong>LKR.${triple*40000}</strong><br>Kids above 5 years age : <strong>LKR.${childabove5*5000}</strong> extra for Meal(s)<br>
  Extra Bed : <strong>LKR.${ExtraBed*8000}</strong><br><br> Total Cost : <strong>LKR.${promotion()}`

   
}

// Fucntion for adventure booking 
function adventure (){
  let fullname = (FirstName.value);
  let lastname = (LastName.value);
  let ADVdate = (adventureDate.value);
  let nationality = (ADvNationality.value);
  let adults = (AdventureAdults.value);
  let kids = (AdventureKids.value);
  let contact = (Contactnumber.value);
  let mail = (Email.value);
  let dive = (diving.value);
  let nationalityTL = (ADvNationality.value.toLowerCase());
  let guide = (withguide.checked);

  if (guide == true){
    Guide = "Yes";
    guidecostAdults = (adults*1000);
    guidecostKids = (kids*500);
  }
  else{
    Guide = "No";
    guidecostAdults = 0;
    guidecostKids = 0;
  }
  

  output3.innerHTML = `Name : <strong>${fullname} ${lastname}</strong><br>Date : <strong>${ADVdate}</strong>
  <br>Nationality : <strong>${nationality}</strong><br>Number of Adults: <strong>${adults}</strong><br>
  Number of Children : <strong>${kids}</strong><br>Contact Number : <strong>${contact}</strong><br>
  Email : <strong>${mail}</strong><br>Diving : <strong>${dive}hr</strong><br>Guide: <strong>${Guide}</strong>`

  if(dive.length > 0){
    if(nationalityTL == "sri lankan" || nationalityTL == "sri lanka" ){
      
      AdultCost =  (adults*dive*5000);
      ChildCost = (kids*dive*2000);
      output4.innerHTML = `Adult cost : LKR.${AdultCost}<br>Kid(s) Cost : LKR.${ChildCost}<br>Charges for guide from Adults: LKR.${guidecostAdults}<br>Charges for guide from Kids: LKR.${guidecostKids}<br> Total Cost : LKR.${AdultCost+ChildCost+guidecostAdults+guidecostKids} `
    }
    else if (nationalityTL != "sri lankan" || nationalityTL != "sri lanka"){
      AdultCost = adults*dive*10000;
      ChildCost = kids*dive*5000;
      output4.innerHTML = `Adult cost : LKR.${AdultCost}<br>Kid(s) Cost : LKR.${ChildCost}<br>Charges for guide from Adults: LKR.${guidecostAdults} <br>Charges for guide from Kids: LKR.${guidecostKids} 
      <brTotal Cost : LKR.${AdultCost+ChildCost+guidecostAdults+guidecostKids}`
      
    }



}


let overallAdventureBooking = [];

function adventuremessage(web) {
  if (adventureForm.checkValidity()) {
    web.preventDefault();

    overallAdventureBooking.push({
      FullName: `${LastName.value} ${FirstName.value}`,
      nationality: `${ADvNationality.value}`,
      Date: `${adventureDate.value}`,
      Adults: `${AdventureAdults.value}`,
      kids: `${AdventureKids.value}`,
      Email: `${Email.value}`,
      diving: `${diving.value}`,
    });

    adventureForm.reset();

    displayadventure();

    output3.innerHTML = "";
    output4.innerHTML = "";
  }
}

adventurebtn.addEventListener('click',adventuremessage);

function displayadventure() {
  let adventureDetails = overallAdventureBooking.map((booking, index) => {
    return `Adventure Booking ${index + 1}\n` +
      `Full Name: ${booking.FullName}\n` +
      `Nationality: ${booking.nationality}\n` +
      `Date: ${booking.Date}\n` +
      `Adults: ${booking.Adults}\n` +
      `Children: ${booking.kids}\n` +
      `Email: ${booking.Email}\n` +
      `Diving: ${booking.diving}hr`;
      
  });

  adventureDetails.push("Thank You for booking an adventure with us!");

  swal(adventureDetails.join('\n\n'));
}

function checkloyalty (){
  //numberofrooms = SingleRoom + DoubleRoom + TripleRoom;

}


}
