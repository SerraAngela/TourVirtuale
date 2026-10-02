var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrata_plesso_nuovo",
      "name": "Entrata_plesso_nuovo",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.21195532086166224,
        "pitch": 0.23046780876863515,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.8757886727514119,
          "pitch": 0.12560009963980612,
          "rotation": 12.566370614359176,
          "target": "1-piano_terra_lato_lab_chimica"
        },
        {
          "yaw": -2.74181990863314,
          "pitch": 0.09709541631453966,
          "rotation": 0,
          "target": "2-pianoterra_centrale"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-piano_terra_lato_lab_chimica",
      "name": "Piano_terra_lato_lab_chimica",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.675245134693272,
        "pitch": 0.13798862340888185,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 1.4045379906714555,
          "pitch": 0.2571654572402835,
          "rotation": 0,
          "target": "0-entrata_plesso_nuovo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pianoterra_centrale",
      "name": "PianoTerra_centrale",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.645910946355876,
        "pitch": -0.017089946148443502,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 1.261740660450231,
          "pitch": 0.0712338713023346,
          "rotation": 0,
          "target": "0-entrata_plesso_nuovo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Iti \"A Monaco\"",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
