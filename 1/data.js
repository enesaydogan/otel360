var APP_DATA = {
  "scenes": [
    {
      "id": "0-yatak",
      "name": "YATAK",
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
        "yaw": 1.2605800058988308,
        "pitch": -0.022199057824497714,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5519773065468101,
          "pitch": 0.1089534655323181,
          "rotation": 0,
          "target": "2-banyo"
        },
        {
          "yaw": -0.22032142439543634,
          "pitch": 0.018757288119539695,
          "rotation": 0,
          "target": "1-kordor"
        },
        {
          "yaw": 0.24496241294752963,
          "pitch": 0.07903811994360055,
          "rotation": 0,
          "target": "3-oturma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kordor",
      "name": "KORİDOR",
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
        "yaw": 2.5352167490983337,
        "pitch": -0.0401042182967597,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.940921517885613,
          "pitch": -0.008784659633672476,
          "rotation": 0,
          "target": "0-yatak"
        },
        {
          "yaw": 1.4954292287128306,
          "pitch": 0.11167518137820664,
          "rotation": 0,
          "target": "2-banyo"
        },
        {
          "yaw": 0.13923376049280378,
          "pitch": 0.11167518137820664,
          "rotation": 0,
          "target": "3-oturma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-banyo",
      "name": "BANYO",
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
          "yaw": -1.4101456308789793,
          "pitch": 0.0987770696297332,
          "rotation": 0,
          "target": "1-kordor"
        },
        {
          "yaw": 3.118949162293328,
          "pitch": -0.05402579466726998,
          "rotation": 0,
          "target": "0-yatak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-oturma",
      "name": "OTURMA",
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
        "yaw": -1.62639800395484,
        "pitch": -0.0012412302401827446,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.801011492629655,
          "pitch": 0.16351364283585212,
          "rotation": 0,
          "target": "1-kordor"
        },
        {
          "yaw": 2.494336965781743,
          "pitch": 0.034732796689787904,
          "rotation": 0,
          "target": "2-banyo"
        },
        {
          "yaw": 3.0135900716173705,
          "pitch": 0.07767406421848477,
          "rotation": 0,
          "target": "0-yatak"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "OTEL DENEME",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
