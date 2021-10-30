import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations = [
    {
      city: "Karachi",
      address: "Plot Number C/21 Landhi C Area, Karachi, Sindh",
      background: 'assets/location_karachi_bg.jpg',
      coords: {
        latitude: 24.843744,
        longitude: 67.198691,
      }
    },
    {
      city: "Pakpattan",
      address: "Abadi Jhughiyan Kundan LaL, Pakpattan, Punjab",
      background: 'assets/location_pakpattan_bg.jpg',
      coords: {
        latitude: 30.344721262825235,
        longitude: 73.40368348568946,
      }
    },
    {
      city: "Jhang",
      address: "78VF+9JX, Chaudry Colony Sadar, Jhang, Punjab",
      background: 'assets/location_jhang_bg.jpg',
      coords: {
        latitude: 31.293498246877967,
        longitude: 72.3241247958066,
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openLocationInGoogleMap(location: any) {
    window.open(`https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`, '_blank')
  }
}
