import './classifieds.css'
import Places from "google-places-web";

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
            searchTerm: 'Hola'
        }
    },
    computed: {
    },
    methods: {
        activatePlacesSearch() {
            // let input = '';
            let autocomplete = new google.maps.places.Autocomplete(this.searchTerm);
            console.log(autocomplete);
        },
    }
}

