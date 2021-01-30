// Value Counting Function
function cruiseBooking(travel, bookingValue){
    const TravelInput = document.getElementById(travel + "-Input");
    const TravelCount = parseInt(TravelInput.value);
    
    let newCount = 0;
     if(bookingValue == true){
         newCount  = TravelCount + 1;
     } else if (bookingValue == false && TravelCount > 0) {
          newCount = TravelCount - 1;
     }

     let totalCost = 0;
     if(travel == 'fristClass'){
        totalCost = newCount * 150;
     } else if (travel == 'economyClass'){
         totalCost = newCount * 100;
     }
     TravelInput.value = newCount;

    totalTravelCost()
}

// Total Travel Cost Counting Function
function totalTravelCost(){
   const fristClassInput = document.getElementById('fristClass-Input');
    const fristClassNumer = parseInt(fristClassInput.value);

    const economyClasssInput = document.getElementById('economyClass-Input');
    const economyClassNumber = parseInt(economyClasssInput.value);

    const subTotal = fristClassNumer * 150 + economyClassNumber * 100;
    document.getElementById('subTotal').innerText = '$ ' + subTotal;

    const vatOfTravel = subTotal / 10;
    document.getElementById('totalVat').innerText = '$ ' + vatOfTravel;

    const totalTravelCost = subTotal - vatOfTravel;
    document.getElementById('totalTravelCost').innerText = '$ ' + totalTravelCost;
   
    //Error or Success message Show
    document.getElementById('Book-Btn').addEventListener('click', function(){
        if(totalTravelCost == 0){
            document.getElementById('success-message').style.color = '#E15461';
            document.getElementById('success-message').innerHTML = 'Select Any Cruise Queen Package***';
        } else {
            document.getElementById('success-message').style.color = '#28A745';
            document.getElementById('success-message').innerHTML = "Your booking has been successfull added!";
        }

        
    })
}
