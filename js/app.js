window.addEventListener("hashchange", router);

let main = document.getElementById('main');

function fetchCharacters() {
    return fetch("https://rickandmortyapi.com/api/character")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Hubo un error al acceder a la API');
                }
                return response.json();
            })
            .then(data => {
                return data.results;
            })
            .catch(error => {
                console.error('Hubo un error en el fetch:', error);
                return [];
            });
}

async function router() {
    
    const path = window.location.hash.slice(1) || "/";

    if (path == "/") {

        main.innerHTML = '';

        let characters = await fetchCharacters();

        let homeDiv = document.createElement('div');
        homeDiv.id = 'home'
        main.appendChild(homeDiv);

        let homeTitle = document.createElement('h1');
        homeTitle.innerText = "Bienvenidos al test de Edmundo Alvarez";
        homeDiv.appendChild(homeTitle);

        let homeSection = document.createElement('section');
        homeSection.id = 'homeSection';
        homeDiv.appendChild(homeSection);

        let homeTitle2 = document.createElement('h2');
        homeTitle2.innerText = "Lista de personajes de Rick & Morty";
        homeSection.appendChild(homeTitle2);

        let divSectionHome = document.createElement('div');
        divSectionHome.id = 'divSectionHome';
        homeSection.appendChild(divSectionHome);

        let productos = document.createElement('div');
        productos.className = 'productos';
        divSectionHome.appendChild(productos);
   
        characters.forEach(character => {

            let producto = document.createElement('div');
                producto.className = 'producto';
                productos.appendChild(producto);

            let picture = document.createElement('picture');
                producto.appendChild(picture);
            let img = document.createElement('img');
                img.src = character.image;
                picture.appendChild(img);

            let nombre = document.createElement('h3');
                nombre.innerText = character.name;
                producto.appendChild(nombre);
        });
        
    }

    else if (path == "/about-me") {

        main.innerHTML = '';

        let aboutDiv = document.createElement('div');
        aboutDiv.id = 'about-us'
        main.appendChild(aboutDiv);

        let aboutTitle = document.createElement('h1');
        aboutTitle.innerText = "Bienvenidos al test de Edmundo Alvarez";
        aboutDiv.appendChild(aboutTitle);

        let aboutSection = document.createElement('section');
        aboutSection.id = 'aboutSection';
        aboutDiv.appendChild(aboutSection);

        let aboutTitle2 = document.createElement('h2');
        aboutTitle2.innerText = "Sobre mi y la página";
        aboutSection.appendChild(aboutTitle2);

        let p1 = document.createElement('p');
            p1.innerText = `Hola!, soy Edmundo Alvarez, desarrollador web. Bienvenidos a mi demostración interactiva creada como parte de un test para mostrar mis habilidades en el desarrollo de aplicaciones web usando JavaScript vainilla. Esta aplicación es una Single Page Application (SPA) que utiliza datos dinámicos de la serie "Rick and Morty", accedidos a través de una API pública.`
            aboutSection.appendChild(p1);

        let p2 = document.createElement("p");
            p2.innerText = "El propósito de este proyecto es demostrar mi capacidad para trabajar con APIs en tiempo real, realizar llamadas asíncronas con fetch, y manejar respuestas para generar contenido dinámico en la página. Esta habilidad es crucial para el desarrollo moderno de aplicaciones web, donde la interactividad y la carga eficiente de datos son fundamentales."
            aboutSection.appendChild(p2);

        let p3 = document.createElement("p");
            p3.innerText = "Además, esta aplicación también demuestra mi capacidad para diseñar y crear una experiencia de usuario atractiva y fácil de usar. La aplicación cuenta con una navegación simple y clara, así como una presentación visual atractiva de los datos de la API."
            aboutSection.appendChild(p3);

        let p4 = document.createElement("p");
            p4.innerText = "Gracias por visitar mi demostración. Si desea ponerse en contacto conmigo para discutir oportunidades de trabajo o colaboración, no dude en enviarme un mensaje a través de mi perfil de LinkedIn o mi correo electrónico."
            aboutSection.appendChild(p4);

        let ul = document.createElement('ul');
            aboutSection.appendChild(ul);
        
        let li1 = document.createElement('li');
            ul.appendChild(li1);
        
        let a1 = document.createElement('a');
            a1.href = "https://www.linkedin.com/in/edmundoalvarez/";
            a1.target = "_blank";
            a1.innerText = "LinkedIn";
            li1.appendChild(a1);

        let li2 = document.createElement('li');
            ul.appendChild(li2);

        let a2 = document.createElement('a');
            a2.href = "mailto:edmundoalvarezok@gmail.com";
            a2.target = "_blank";
            a2.innerText = "Gmail";
            li2.appendChild(a2);

        let li3 = document.createElement('li');
            ul.appendChild(li3);
        
        let a3 = document.createElement('a');
            a3.href = "https://github.com/edmundoalvarez"
            a3.target = "_blank";
            a3.innerText = "GitHub";
            li3.appendChild(a3);

        let li4 = document.createElement('li');
            ul.appendChild(li4);

        let a4 = document.createElement('a');
            a4.href = "https://edmundoalvarez.com.ar/";
            a4.target = "_blank";
            a4.innerText = "Porfolio";
            li4.appendChild(a4);
    }
}
router()
