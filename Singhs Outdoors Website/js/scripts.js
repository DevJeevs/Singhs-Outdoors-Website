menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');  
  menuToggler.textContent = menuToggler.textContent === '×' ? "≡" : '×';   
  document.getElementById("ul").style.opacity = document.getElementById("ul").style.opacity === '1' ? "0" : '1';
});

function initMap() {
  // Map Options
  var options = {
    zoom: 8,
    center: { lat: 54.2, lng: -2.06 },
  };

  //New Map
  var map = new google.maps.Map(document.getElementById("map"), options);

  /*
  const image = "images/LogoGrey.png";
  //Add Marker
  var marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    position: { lat: 54.1398, lng: -2.2094 },
    map: map,
    //icon: image,
  });

  var infoWindow = new google.maps.InfoWindow({
      content: '<h1>Fountains Fell</h1>'
  });

  marker.addListener('click', function(){
      infoWindow.open(map, marker);
  });
  */

  //Array of markers
  var markers = [
    {
      coords: { lat: 54.1398, lng: -2.2094 },
      content: "<h1>Fountains Fell</h1>",
    },
    {
      coords: { lat: 54.2, lng: -2.06 },
      content: "<h1>Buckden Pike</h1>",
    },
    {
      coords: { lat: 54.552, lng: -3.104 },
      content: "<h1>High Seat</h1>",
    },
  ];

  //Loop through markers
  for (var i = 0; i < markers.length; i++) {
    //Add Marker to map
    addMarker(markers[i]);
  }

  //Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: props.coords,
      map: map,
      //icon: image,
    });

    //check content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
}


//Gallery 

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);


/*// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
  
}
*/