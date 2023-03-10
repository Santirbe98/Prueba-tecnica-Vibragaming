# Prueba-tecnica-Vibragaming
<p align="center">
<img src="https://vibragaming.com/wp-content/uploads/2022/09/logo-vibra-blanco-01.png" width="300" alt="VibrGamingLogo"/>
</p>


## Introduccion

Esta API se utiliza para mostar usuarios en base a un archivo CSV que se puede cambiar, las tablas se tendria que definir en el orden siguiente: id, name, surname, email, gender, username, city. Una vez creado el arhivo la aplicacion es capaz de leerlo remplazando el archivo en /files.

## Instalacion

Para la instalacion lo primero es posicionarse con la terminal en la ubicacion de donde se encuentre el archivo, una vez encontrado, vamos a utilizar el comando
```bash
$ npm install
```
para instalar todas las dependencias del proyecto, una vez terminado el proceso si queremos visualizar la aplicacion tendremos que escribir el comando 
```bash
$ npm run dev
```

## Instrucciones de uso

Para visualizar nuestros usuarios en formato json, debemos iniciar el proyecto y posicionarnos en nuestro host local en la ruta **/search** (usualmente localhost:3001/search) podremos ver todos los usuarios ordenados por **_id_**.

### Visualizacion de datos
Para especificar los filtros lo haremos con query params **/search?name={name}&city={city}&quantity={quantity}**, por ejemplo:

> **localhost:3001/search?name=santiago&city=santafe&quantity=8**

En el ejemplo anterior la aplicacion va a leer el archivo cvs y va a arrojar por pantalla todos los santiago que existen en la ciudad de santafe, como se especifico la cantidad (quantity) solo va a mostrar los primeros 8 resultados

## Tecnologias usadas

- Express js
- Node js
- Cvstojson
- Jest
