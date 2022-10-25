import {showModal, navegacion, loadData, urlBase} from '../js/eventos';

loadData(urlBase);
document.querySelector('#respuesta').addEventListener('click', showModal);
document.querySelector('.botones').addEventListener('click', navegacion);


