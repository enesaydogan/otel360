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
          "yaw": 0.48701185116998325,
          "pitch": -0.05403033313445249,
          "rotation": 0,
          "target": "2-banyo"
        },
        {
          "yaw": 0.11923256206304167,
          "pitch": -0.00870636801571223,
          "rotation": 0,
          "target": "3-oturma"
        },
        {
          "yaw": -0.14628909191334571,
          "pitch": -0.005412916122150335,
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
          "yaw": 1.5939847076788825,
          "pitch": 0.0742201638204012,
          "rotation": 0,
          "target": "2-banyo"
        },
        {
          "yaw": -3.01081549347081,
          "pitch": 0.06581613330502378,
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
          "yaw": 0.14066619484511023,
          "pitch": 0.040616108324398326,
          "rotation": 0,
          "target": "3-oturma"
        },
        {
          "yaw": -1.4727766507942661,
          "pitch": 0.039496199230812934,
          "rotation": 0,
          "target": "1-koridor"
        },
        {
          "yaw": -3.0795548839691413,
          "pitch": 0.03784947328403199,
          "rotation": 0,
          "target": "0-yatak"
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
          "yaw": -2.819144597438399,
          "pitch": 0.01749478119968728,
          "rotation": 0,
          "target": "1-koridor"
        },
        {
          "yaw": 3.0391340731585395,
          "pitch": -0.006765879772025585,
          "rotation": 0,
          "target": "0-yatak"
        },
        {
          "yaw": 2.885273802637853,
          "pitch": 0.009880355680685682,
          "rotation": 0,
          "target": "2-banyo"
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
