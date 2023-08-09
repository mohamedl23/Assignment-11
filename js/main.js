 
//  var weatherAll = []
var load = true
 async function apiWeather(city){
    // var link = await fetch("https://api.weatherapi.com/v1/search.json?key=ff11d699dcf04e3690f185800230408&q=cairo") ;
    var link = await fetch(`https://api.weatherapi.com/v1/current.json?key=ff11d699dcf04e3690f185800230408&q=${city}`)
     load = await link.json(); 
    
    // console.log(load.location.name)
    displayWeather()
   
}
apiWeather("cairo")
var typeInform = document.querySelector(".play")
// function goTocity(){
    typeInform.addEventListener("keyup" ,function(){
        // console.log(typeInform.value)
        apiWeather(typeInform.value)
    
    })


async function displayWeather(){
    var data =`
    <div class="card-footer  ">
      <div class="text-body-secondary d-flex justify-content-between"> Saturday <span class="">9 August</span></div>
       </div>
        <div class="card-body bg-dark p-5">
        <h5 class="card-title text-white-50">${load.location.name}</h5>
        <h1 class="card-text text-white">${load.current.temp_c} oC  <span><img src=${"https://"+load.current.condition.icon} class="w-25" alt=""> </span></h1>
         <h6 class="text-primary">${load.current.condition.text}</h6>
         <ul class="list-unstyled py-3 d-flex justify-content-around">
          <li class="text-dark-emphasis"><i class="fa-solid fa-umbrella"></i><span>20 %</span></li>
          <li class="text-dark-emphasis"><i class="fa-solid fa-wind"></i><span>18 Km/m</span></li>
          <li class="text-dark-emphasis"><i class="fa-solid fa-compass"></i><span>East</span></li>
           </ul>
           </div>
    
    
    
    `
    document.querySelector(".one").innerHTML=data

}


// }
// التحقق مما إذا كان المتصفح يدعم واجهة geolocation
if ("geolocation" in navigator) {
    // الحصول على الموقع الجغرافي للمستخدم
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log("خط العرض: " + latitude);
        console.log("خط الطول: " + longitude);

        // يمكنك استخدام الإحداثيات للقيام بالإجراءات التي تريدها هنا
    });
} else {
    console.log("المتصفح لا يدعم واجهة geolocation");
}



