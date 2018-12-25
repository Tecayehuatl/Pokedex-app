import FormContainer from './js/components/container/FormContainer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.scss' 
import api from '../api/index.js'

api.getPokemons((result)=> {
    console.log(result)
});