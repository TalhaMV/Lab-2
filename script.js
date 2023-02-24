mapboxgl.accessToken = 'pk.eyJ1IjoidGFsaGF2IiwiYSI6ImNsZG0wdno1MDA0dHMzb2tiNDc5YnFzcm0ifQ.QrkOG_mZti52bYP2Usy-MA'

const map = new mapboxgl.Map({

    container: 'map',

    style: 'mapbox://styles/talhav/cle0a9fvt004d01qwzhe941ll',

    center: [-79.39830123888215, 43.664695891060376], 

    zoom: 15,

});
map.on('load', () => {

 

    //Add datasource from GeoJSON

    map.addSource('home', {

        type: 'geojson',

        data: 'https://raw.githubusercontent.com/TalhaMV/Lab-2/main/myhome.geojson'

        //'https://smith-lg.github.io/ggr472-wk6-demo/data/torontomusicvenues.geojson'

    });

 

    map.addLayer({

        'id': 'residence',

        'type': 'circle',

        'source': 'home',

        'paint': {

            'circle-radius': 5,

            'circle-color': 'red'

        }

    });

    map.addSource('college', {

        'type': 'vector',

        'url': 'mapbox://talhav.0d4na3al'

    });




    map.addLayer({

        'id': 'provterr-fill',

        'type': 'fill',

        'source': 'college',

        'paint': {

            'fill-color': '#7FFF00',

            'fill-opacity': 0.5,

            'fill-outline-color': 'purple'

        },

        'source-layer': 'uoftcolleges-5imo5h'

    });

 

 

});


