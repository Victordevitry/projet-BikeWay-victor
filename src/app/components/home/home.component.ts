import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   
  /*
  function initAutocomplete() {


    const map = new google.maps.Map(document.getElementById("mapVeto"), {
        center: { lat: 48.856614, lng: 2.3522219 },
        zoom: 6,
        mapTypeId: "roadmap",
    });

    const input = document.getElementById("clientLocation");
    const searchBox = new google.maps.places.SearchBox(input);
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });


    let markers = [];

    // markers VETO
    var vetoBdd = window.vetoBdd;

    var isLoggedIn = window.isLoggedIn;

    vetoBdd.forEach(function (currVeto){
        console.log(currVeto);
        var addressVeto = currVeto.adress+', '+currVeto.city+', France';//Don't work
        var currGeocode=geocode({ address: addressVeto},currVeto.lastname,currVeto.firstname,currVeto.specialite,currVeto.adress,currVeto.city,currVeto.postalCode,currVeto.email,currVeto.phone,currVeto.id,isLoggedIn);

        // console.log(currGeocode);
    });





    // quand une adresse est rentrée
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        // Veto markers
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };
            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
        map.setZoom(14);
    });

    function geocode(request,lastname,firstname,specialite,adress,city,postal_code,email,phone,id,isLoggedIn) {
        let geocoder = new google.maps.Geocoder();

        geocoder.geocode(request).then((result) => {
            const { results } = result;

            var contentString =
                "<div style='font-family: new-order, sans-serif;font-size: 125%;color: #3aab6a'><b>Dr. "+lastname+" "+
                firstname+"</b></div><br>"+
                "<div style='font-family: new-order, sans-serif;color: black'><b>Spécialité : </b>"+specialite+"<br><br>"+
                "<b>Adresse : </b>"+adress+" "+city+"<br><br>"+
                "<b>Mail : </b>"+email+"<br><br>"+ //A supprimer
                "<b>Téléphone : </b>"+phone+"<br><br>";

            if(isLoggedIn){
                contentString+= "<a href='addRdv"+email+"'><input type='button' value='Prendre RDV' style='background-color: #00a4b3;" +
                    " font-family: new-order, sans-serif; font-size: 115%;color: white'></a>";
            }else {
                contentString+= "<p href=vetAccount' style='font-family: new-order, sans-serif; font-size: 115%;color: #00a4b3'>Veuillez vous connecter pour prendre RDV</p>"
            }

            // MARKER
            const marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                }

            });

            // FENETRE INFO
            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 200,
            });

            marker.addListener('click', function () {
                infowindow.open(marker.get('map'), marker);
            });


            return results;
        })
            .catch((e) => {
                alert("Geocode was not successful for the following reason: " + e);
            });
    }

}





  */
}
