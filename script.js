$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

var counter = document.getElementById("lik")
counter.addEventListener("click" , function(){
    window.location.href = "/singIn.html" ; 
})

$(function(){
    var docElem = $(document) ;
    
      var fadeElem = $(".fade-scroll") ; 
      
        docElem.on('scroll' , function(){
            var curScrollPos = docElem.scrollTop();
            
            fadeElem.each(function(){
                var $this = $(this)
                    elemOffsetTop = $this.offset().top; 
                    
                    if(curScrollPos > elemOffsetTop) $this.css('opacity' , 1 - (curScrollPos - elemOffsetTop)/800)
            })
        })
})
function show() {
	var btn = document.getElementById("login").innerHTML;
	if (btn == "Sign In") {
		document.querySelector(".reg").style.display = "flex";
		$(".reg").animate({opacity: '1'}, 1000);
        document.body.style.overflow = "hidden";
       
	}
	// else {
	// 	logout();
	// }
}

function attachSecretMessage(marker, secretMessage) {
  const infowindow = new google.maps.InfoWindow({
    content: secretMessage,
  });
  marker.addListener("click", () => {
    infowindow.open(marker.get("map"), marker);
  });
}
function initMap(){
  var options1 = {
    center: {lat: 48.0196 ,lng: 66.9237},
    zoom: 4
  }
  var map1 = new google.maps.Map(document.getElementById("map"), options1);

  var icon = {url: "https://icon-library.com/images/geolocation-icon-png/geolocation-icon-png-5.jpg" ,
              scaledSize: new google.maps.Size(20 , 20),
              origin: new google.maps.Point(0,0),
              anchor: new google.maps.Point(0 , 0)
            };
  var marker = new google.maps.Marker({
              position: {lat: 52.13265813754082, lng: 70.67941904129260 },   
              map: map1 ,
              icon: icon 

  });
  var marker1 = new google.maps.Marker({
    position: {lat: 44.576888745550785, lng: 76.77853551228152},  
    map: map1 ,
    icon: icon 

});
  var options = {
    center: {lat: 8.7832 ,lng: 34.5085},
    zoom: 3
  }
  var map = new google.maps.Map(document.getElementById("mapOfHelp"), options);

  var icon = {url: "https://www.flaticon.com/svg/static/icons/svg/616/616712.svg" ,
              scaledSize: new google.maps.Size(20 , 20),
              origin: new google.maps.Point(0,0),
              anchor: new google.maps.Point(0 , 0)
            };
  var marker = new google.maps.Marker({
              position: {lat: 9.9465, lng: 1.0232 },   
              map: map ,
              icon: icon 

  });
  var marker1 = new google.maps.Marker({
    position: {lat: 9.9456, lng: 9.6966},  
    map: map ,
    icon: icon 

});
var marker2 = new google.maps.Marker({
  position: {lat: 13.1339, lng: 27.8493},  
  map: map ,
  icon: icon 

});
var marker3 = new google.maps.Marker({
  position: {lat: 4.0383, lng: 21.7587},  
  map: map ,
  icon: icon 

});
var marker4 = new google.maps.Marker({
  position: {lat: 6.3690, lng: 34.8888},  
  map: map ,
  icon: icon 

});
var marker5 = new google.maps.Marker({
  position: {lat: -30.5595, lng: 22.9375},  
  map: map ,
  icon: icon 

});
var marker6 = new google.maps.Marker({
  position: {lat:6.8770, lng: 31.3070},  
  map: map ,
  icon: icon 

}); 
var marker7 = new google.maps.Marker({
  position: {lat:24.2155, lng: 12.8858},  
  map: map ,
  icon: icon 

});
var marker8 = new google.maps.Marker({
  position: {lat:22.3285, lng: 33.6849},  
  map: map ,
  icon: icon 

});

}
