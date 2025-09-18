var APP_DATA = {
  "scenes": [
    {
      "id": "0-yatak",
      "name": "Yatak",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.49650986264271957,
          "pitch": 0.016238088590359467,
          "rotation": 0,
          "target": "2-banyo"
        },
        {
          "yaw": 0.12857496658370593,
          "pitch": 0.03255253742121411,
          "rotation": 0,
          "target": "3-oturma"
        },
        {
          "yaw": -0.3374326072862388,
          "pitch": 0.019007727067227975,
          "rotation": 0,
          "target": "1-koridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-koridor",
      "name": "Koridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-oturma"
        },
        {
          "yaw": 1.5859131343726034,
          "pitch": 0.107037186540758,
          "rotation": 0,
          "target": "2-banyo"
        },
        {
          "yaw": 3.0698565836985905,
          "pitch": 0.12515117195534842,
          "rotation": 0,
          "target": "0-yatak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-banyo",
      "name": "Banyo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.121714916169881,
          "pitch": 0.022553683687942083,
          "rotation": 0,
          "target": "0-yatak"
        },
        {
          "yaw": 0.02251680214899565,
          "pitch": -0.047402797030219546,
          "rotation": 0,
          "target": "3-oturma"
        },
        {
          "yaw": -1.5497676046677764,
          "pitch": 0.1504852054062713,
          "rotation": 0,
          "target": "1-koridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-oturma",
      "name": "Oturma",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6257759130818776,
          "pitch": -0.06645110016895117,
          "rotation": 0,
          "target": "2-banyo"
        },
        {
          "yaw": 3.118717514390453,
          "pitch": 0.10500042263986131,
          "rotation": 0,
          "target": "0-yatak"
        },
        {
          "yaw": -2.9422819655324375,
          "pitch": 0.12476113400123268,
          "rotation": 0,
          "target": "1-koridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
