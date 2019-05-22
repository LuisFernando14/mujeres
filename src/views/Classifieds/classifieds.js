import './classifieds.css'
// import Places from "google-places-web";
const $ = require('jquery')

export default {
    name: 'Classifieds',
    components: {},
    mounted() {
        this.autocomplete = new google.maps.places.Autocomplete(
            (this.$refs.autocomplete),
            {types: ['geocode']}
        );
        this.autocomplete.addListener('place_changed', () => {
            let place = this.autocomplete.getPlace();
            let ac = place.address_components;
            let lat = place.geometry.location.lat();
            let lon = place.geometry.location.lng();
            let city = ac[0]['long_name'];
            let state = ac[1]['short_name'];
            let country = ac[2]['short_name'];

            console.log(`The user picked ${city} with the coordinates ${lat}, ${lon}`);
            console.log(place);
            // console.log(this.autocomplete.getRegionWithCountry());
            // console.log(city);
            // console.log(state);
            // console.log(country);
        });
    },
    data() {
        return {
            sortType: 'dSrPdTjT5DDFX5g4P',
            subCat: '',
            searchTerm: 'Hola',
            categories: [
                { value: 'dSrPdTjT5DDFX5g4P', text: 'Maquinaria e implementos', },
                { value: '6myFQhzMEpS94dNSA', text: 'Partes de maquinaria e implementos'},
                { value: 'BS6fZWX92HqHqwgXA', text: 'Equipamiento' },
                { value: 'wdwpvber4QZi8dwKd', text: 'Transporte'},
                { value: 'QTYffMmMkEPPspJWz', text: 'Campos y empaques'},
                { value: 'SXEBvnu66pE9FxNs6', text: 'Insumos'},
                { value: 'vt5sza4RwzvSBas8s', text: 'Servicios'},
            ],
            subcategories: [
                { value: 'dSrPdTjT5DDFX5g4P', text: 'Campos', },
                { value: '6myFQhzMEpS94dNSA', text: 'Empaques'},
                { value: 'BS6fZWX92HqHqwgXA', text: 'Huertas' },
                { value: 'wdwpvber4QZi8dwKd', text: 'Motores'},
                { value: 'QTYffMmMkEPPspJWz', text: 'Tanques'},
                { value: 'SXEBvnu66pE9FxNs6', text: 'Bombas'},
                { value: 'vt5sza4RwzvSBas8s', text: 'Riego'},
            ]
        }
    },
    computed: {},
    methods: {
        hazAlgo () {
            console.log('haciendoa lgo')
        },
        setCat(catKey) {
            console.log(catKey)
        },
        setSub(subKey) {
            console.log(subKey)
        },
        showOne() {
            $('.menu').removeClass("menu-show");
            $('.menu-Mobil ').addClass("menu-show-mobil");

        }
        
    }
}

