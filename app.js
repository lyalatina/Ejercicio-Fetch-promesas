window.onload = () => {
  const btncats = document.getElementById('cats');
  const btndogs = document.getElementById('dogs');
  const btnpajaros = document.getElementById('pajaros');

  btncats.addEventListener('click', () => {
    obtenerGatos();
  })

  btndogs.addEventListener('click', () => {
    obtenerPerros();
  })

  btnpajaros.addEventListener('click', () => {
    obtenerPajaros();
  })



  const loading = document.getElementById('loader');



}

function obtenerGatos() {
  // llama id loader apareza en bloque
  loader.style.display = 'block';

  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=2&urls=true&httpsUrls=true`) //Recibe la URL donde se va a hacer la consulta
    .then((response) => { //Este then es de la promesa del fetch
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de gatitos");
      }
    }).then((catesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()

      // se esconde el loader
      loader.style.display = 'none';

      const cateReceptorDiv = document.getElementById("cateReceptor");
      for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
        const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        cateImg.src = catesJson[cateIndex];
        cateReceptorDiv.appendChild(cateImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });
}

function obtenerPerros() {
  // llama id loader apareza en bloque
  loader.style.display = 'block';
  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=2&urls=true&httpsUrls=true`)//Recibe la URL donde se va a hacer la consulta
    .then((response) => { //Este then es de la promesa del fetch
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de gatitos");
      }
    }).then((catesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()

      // se esconde el loader
      loader.style.display = 'none';

      const cateReceptorDiv = document.getElementById("cateReceptor");
      for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
        const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        cateImg.src = catesJson[cateIndex];
        cateReceptorDiv.appendChild(cateImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });

}

function obtenerPajaros() {
  // Fetch retorna una promesa
  // llama id loader apareza en bloque
  loader.style.display = 'block';

  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/birds?count=2&urls=true&httpsUrls=true`)//Recibe la URL donde se va a hacer la consulta
    .then((response) => { //Este then es de la promesa del fetch
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de gatitos");
      }
    }).then((catesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()

      // se esconde el loader
      loader.style.display = 'none';

      const cateReceptorDiv = document.getElementById("cateReceptor");
      for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
        const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        cateImg.src = catesJson[cateIndex];
        cateReceptorDiv.appendChild(cateImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });
}
