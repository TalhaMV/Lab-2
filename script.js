mapboxgl.accessToken = 'pk.eyJ1IjoidGFsaGF2IiwiYSI6ImNsZG0wdno1MDA0dHMzb2tiNDc5YnFzcm0ifQ.QrkOG_mZti52bYP2Usy-MA'

const map = new mapboxgl.Map({

    container: 'map',

    style: 'mapbox://styles/talhav/cle0a9fvt004d01qwzhe941ll',

    center: [-79.39, 43.65],

    zoom: 3,

});
map.on('load', () => {

 

    //Add datasource from GeoJSON

    map.addSource('toronto-mus', {

        type: 'geojson',

        data: 'https://raw.githubusercontent.com/smith-lg/ggr472-wk6-demo/main/data/torontomusicvenues.geojson'

        //'https://smith-lg.github.io/ggr472-wk6-demo/data/torontomusicvenues.geojson'

    });

 

    map.addLayer({

        'id': 'toronto-mus-pnts',

        'type': 'circle',

        'source': 'toronto-mus',

        'paint': {

            'circle-radius': 5,

            'circle-color': 'blue'

        }

    });

    map.addSource('canada-provterr', {

        'type': 'vector',

        'url': 'mapbox://lgsmith.843obi8n'

    });




    map.addLayer({

        'id': 'provterr-fill',

        'type': 'fill',

        'source': 'canada-provterr',

        'paint': {

            'fill-color': '#627BC1',

            'fill-opacity': 0.5,

            'fill-outline-color': 'white'

        },

        'source-layer': 'can-provterr2021-9crjaq'

    });

 

 

});


