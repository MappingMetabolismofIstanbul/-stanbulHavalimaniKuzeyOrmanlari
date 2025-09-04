var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Kuzey Ormanları: Ağaçlar, Tarım ve Mera Alanları, Fundalıklar, Kumullar / Northern Forests: Trees, Agricultural and Pasture Lands, Shrublands, Dunes',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 10,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '1.1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/nqvmBjys/MEF-AAP-027-BAP-PART-II-2025-07-30-13-25-34.png',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/5Xys06ps/MEF-AAP-027-BAP-PART-II-2025-07-30-13-30-42.png',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/G4s0PZPn/MEF-AAP-027-BAP-PART-II-2025-07-30-13-37-19.png',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 12,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/yFC8Ggfh/MEF-AAP-027-BAP-PART-II-2025-07-30-13-40-12.png',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 12,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/s9Hv2C52/MEF-AAP-027-BAP-PART-II-2025-07-30-13-43-29.png',
            description: '.',
            location: {
                center: [28.743,41.256],
                zoom: 12,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'centered',
            hidden: false,
            title: '3. Havalimanı Projesinde Toprağın Metabolik Dolaşımı: 2000 ve 2020 yılları arasında uydu fotoğraflarının çakıştırılması ile oluşturulan çalışmada, havalimanı proje alanı ve kuzeyindeki toprak hareketliliği incelendiğinde açık maden ocakları ve sulak alanlarda gerçekleşen “sürekli bir doldurma ve boşaltma” hamlesine rastlanır. Bir başka deyişle, kentin metabolizmasında betonun dolaşımı ile toprağın dolaşımı birbirine dolanıktır.',
            image: 'https://i.ibb.co/Fk26sn1M/simsiz-video-Clipchamp-ile-yap-ld-10.gif',
            description: 'Metabolic FLow of Soil Metabolic Flows of Soil in the Context of the 3rd Airport Project: In the visualization study created by overlaying satellite images from the years 2000 and 2020, an examination of the airport project area and the changes in soil movement and flow in the northern part of the area reveals a continuous pattern of filling and emptying in open-pit mines and wetlands. In other words, the flow of concrete and the flow of soil are entangled within the metabolism of the city.',
            location: {
                center: [28.743,41.256],
                zoom: 12,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/xPngHjF/MEF-AAP-027-BAP-PART-II-2025-08-10-10-35-31.png',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 12,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/wNNhgF69/MEF-AAP-027-BAP-PART-II-2025-07-30-13-58-58.png',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 12,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/d8zppC7/MEF-AAP-027-BAP-PART-II-2025-07-30-14-05-24.png',
            description: '',
            location: {
                center: [28.743,41.256],
                zoom: 12,
                pitch: 40,
                bearing: 0,
                speed: 1,
                curve: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
