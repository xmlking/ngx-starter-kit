import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nxtk-google-maps-widget',
  templateUrl: './google-maps-widget.component.html'
})
export class GoogleMapsWidgetComponent implements OnInit {
  @Input('height') height = '450px';
  @Input('lat') lat = 40.73061;
  @Input('lng') lng = -73.935242;
  @Input('styles')
  styles = [
    {
      featureType: 'water',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'simplified'
        },
        {
          invert_lightness: false
        },
        {
          color: '#004963'
        },
        {
          weight: 8
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          invert_lightness: false
        },
        {
          color: '#b7ebeb'
        },
        {
          saturation: -53
        },
        {
          lightness: 2
        }
      ]
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'on'
        },
        {
          invert_lightness: false
        },
        {
          hue: '#767878'
        },
        {
          saturation: -93
        },
        {
          lightness: 56
        }
      ]
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'on'
        },
        {
          color: '#b8dbe0'
        },
        {
          saturation: -7
        },
        {
          lightness: 33
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified'
        },
        {
          saturation: -1
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#d1e6d7'
        }
      ]
    },
    {
      featureType: 'poi.sports_complex',
      elementType: 'all',
      stylers: [
        {
          saturation: -100
        },
        {
          lightness: 61
        }
      ]
    },
    {
      featureType: 'poi.school',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        },
        {
          saturation: -100
        },
        {
          lightness: 80
        }
      ]
    },
    {
      featureType: 'poi.place_of_worship',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'simplified'
        },
        {
          color: '#d74340'
        },
        {
          saturation: -32
        }
      ]
    },
    {
      featureType: 'transit.line',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'transit.station.rail',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d74340'
        }
      ]
    },
    {
      featureType: 'transit.station.rail',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'simplified'
        },
        {
          lightness: 0
        },
        {
          gamma: 2.05
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          lightness: 100
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          saturation: -100
        },
        {
          lightness: 78
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          visibility: 'on'
        },
        {
          color: '#000000'
        },
        {
          lightness: 40
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.stroke',
      stylers: [
        {
          saturation: -100
        },
        {
          lightness: 54
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'on'
        },
        {
          saturation: -100
        },
        {
          lightness: 28
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
