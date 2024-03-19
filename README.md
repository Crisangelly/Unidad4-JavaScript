# Unidad4-JavaScript
Repositorio de la e-actividad 4 de Frontend I

La aplicación es un buscador de usuarios que consume la api rest de github, al buscar por nombre de usuario devuelve la consulta que coincide con el parámetro a buscar o los 3 que más se le acerquen, mostrando los siguientes datos de los usuarios:

* Foto del usuario.
* Su nombre de usuario en GitHub. 
* Su nombre. 
* La empresa en la que trabaja (si la tiene).
* Cantidad de repositorios públicos que ha creado.
* Enlace hacia su cuenta de gitHub.

Además cuenta con las opciones de: 

* Cambiar el modo oscuro/claro y por defecto toma la configuración de la computadora. 
* Una pantalla de carga con un loader tipo spinner.
* Uso de debounce en la funcionalidad del buscador.
* Interfaz responsive.


## Instrucciones

Para instalar y probar este proyecto, tenga en cuenta lo siguiente:

### Requisitos

*	Un navegador web
*	Node.js con npm
*	Conexión a internet (para acceder al servido de la API REST)
* Archivo .env con los secretos para conectarse a la API. 
  La estrutura del .env es la siguiente:
  VITE_URL_API= url_api 
  VITE_SECRET= token

### Instalación

Una vez descargada y descomprimida la carpeta del repositorio, o tenerlo clonado, abra una terminal en la ruta de dicha carpeta, en esa misma carpeta coloque el archivo .env y ejecute el siguiente comando para instalar las dependencias necesarias para su funcionamiento:

```
npm install
```

Luego se puede ejecutar como desarrollo o producción

### Caso del modo desarrollo

ejecutar la aplicación con el comando:

```
npm run dev
```

e ir a la ruta con el puerto asignado para ver la página, esta ruta se puede ver por consola


### Caso del modo producción 

crear la carpeta dist con el comando:

```
npm run build
```

ejecutar la aplicación en la carpeta dist con el comando:

```
npm run preview
```

e ir a la ruta con el puerto asignado para ver la página, esta ruta se puede ver por consola



## Construido con:

* [Figma](https://www.figma.com/file/wc2IHYJbS9nWfw3E7FGDcE/Buscador?type=design&node-id=0-1&mode=design&t=1Xe9Gl4nyiUSVXJB-0) - Para el prototipado web
* [Node.js](https://nodejs.org/en) - Dependencias
* [API REST para GitHub](https://docs.github.com/es/rest) - Api de consultas del buscador
* [Vite](https://vitejs.dev/) - Usado para crear componentes y empaquetar


## Autores

* **José Simón García Castellanos** - *(C.I: 30.786.086)* - [DarthNeo03](https://github.com/DarthNeo03)
* **Moisés Alfonso Terán Rivas** - *(C.I: 30.601.063)* - [teranMoises](https://github.com/teranMoises)
* **Paola Valentina Marcano Salas** - *(C.I: 30.975.611)* - [PaolaMarcano](https://github.com/PaolaMarcano)
* **Crisangelly Del Valle Hernández Fernández** - *(C.I: 30.954.251)* - [PaolaMarcano](https://github.com/PaolaMarcano)

## Desarrollado para:

Universidad Valle del Momboy

Prof. Ing. Freddy Ramírez
