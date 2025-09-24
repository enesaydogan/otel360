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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5409974532465842,
          "pitch": 0.0034662180746742877,
          "rotation": 0,
          "target": "1-banyo"
        },
        {
          "yaw": -0.05368714971434407,
          "pitch": 0.03681100685133565,
          "rotation": 0,
          "target": "3-oturma"
        },
        {
          "yaw": 0.22063286857823172,
          "pitch": 0.06231302087458701,
          "rotation": 0,
          "target": "2-kordor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-banyo",
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
          "yaw": -2.988671579427063,
          "pitch": 0.06928587482451931,
          "rotation": 0,
          "target": "0-yatak"
        },
        {
          "yaw": 2.009091141212627,
          "pitch": 0.05446534130349079,
          "rotation": 0,
          "target": "2-kordor"
        },
        {
          "yaw": 0.2324137413954439,
          "pitch": 0.06116415709269063,
          "rotation": 0,
          "target": "3-oturma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kordor",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.051823753163720454,
          "pitch": 0.07226484309975767,
          "rotation": 0,
          "target": "3-oturma"
        },
        {
          "yaw": -1.6934128548541452,
          "pitch": 0.21882345236326017,
          "rotation": 0,
          "target": "1-banyo"
        },
        {
          "yaw": -2.997415132961038,
          "pitch": 0.21882345236326017,
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
        "yaw": -2.657041180046841,
        "pitch": -0.016827520746623748,
        "fov": 1.5110357890709942
      },
      "linkHotspots": [
        {
          "yaw": -2.313971479559916,
          "pitch": -0.025510312081058473,
          "rotation": 0,
          "target": "1-banyo"
        },
        {
          "yaw": 2.6303614274669798,
          "pitch": 0.029857372256927306,
          "rotation": 0,
          "target": "2-kordor"
        },
        {
          "yaw": -2.9307525679002353,
          "pitch": 0.010963992147189572,
          "rotation": 0,
          "target": "0-yatak"
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
