# Unidad4-JavaScript
Repositorio de la e-actividad 4 de Frontend I

----------------------------------------------------Participantes-------------------------------------------

•Paola Valentina Marcano Salas (C.I: 30.975.611) 

•Crisangelly Del Valle Hernández Fernández (C.I: 30.954.251)

•Moisés Alfonso Terán Rivas (C.I: 30.601.063)

•José Simón García Castellanos (C.I: 30.786.086)


Este proyecto fue realizado con fines educativos sobre la materia Front end 1, para aplicar al máximo el potencial de CSS, HTML, JavaScript y React en una aplicación responsive y con un diseño basado en los principios de UX y UI enfocado en la funcionalidad de servir como un buscador de usuarios utilizando la API de GitHub.

-------------------------------------------------Instrucciones de uso--------------------------------------

Para descargar el repositorio sigue los siguientes pasos para que puedas visualizar su funcionamiento:

1- Descomprime la carpeta que contiene el proyecto, o clona el repositorio usando el comando git clone seguido de la url del mismo.

2- Abre en el editor de código de tu preferencia, la carpeta e inicia tu terminal con:
npm install (este comando instala los paquetes y dependencias necesarias utilizadas en el proyecto).
Dentro de ellas están: express, express-generator, cors, vite, webpack y nodemon.

3- Inicia el proyecto con el siguiente comando:

  npm run dev

  también puedes iniciarlo en el modo producción con:

  npm run build  

  y verlo con:

  npm run preview 
  
----------------------------------------------Descripción del Proyecto--------------------------------------

La alicación es un buscador de usuarios que consume la api de github:

  https://docs.github.com/es/rest
  
Al buscar por nombre de usuario, devuelve la consulta que coincide con el parámetro a buscar o los 3 que más se 
le acerquen, mostrando los siguientes datos de los usuarios:

  -foto del usuario.
  -su nombre de usuario en GitHub. 
	-su nombre 
  -la empresa en la que trabaja (si la tiene).
	-cantidad de repositorios públicos que ha creado.
  -enlace hacia la cuenta del usuario de gitHub.

Además cuenta con la opción para cambiar el modo oscuro/claro y por defecto toma la configuración de la computadora. 
Una pantalla de carga con un loader tipo spinner.
Uso de debounce en la funcionalidad del buscador.
Interfaz responsive.


--------------------------------------------Dependencias utilizadas---------------------------------------

-Api REST de GitHub
-React
-Javascript
-HTML y CSS
-Axios (para la conexión a la api)
-React-icons (para los íconos del botón de tema claro y oscuro)
-React-router-dom (para las rutas de la página)
