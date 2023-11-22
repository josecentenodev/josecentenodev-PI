# 🚗 **DRIVERS** | Proyecto Individual de Centeno Jose Antonio

## **📌 DESCRIPCIÓN**

-  Single Page Application hecha con: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  

## **📋 SOBRE LA API DRIVERS...**

En este proyecto la API de Drivers **corre localmente desde tu computadora**. 

Para lograr que esta API funcione desde tu computadora deberás dirigirte, desde tu terminal, a la back y ejecutar el comando:

```bash
   npm start
```

Podrás ver el siguiente mensaje en tu terminal.

``` 
[0] 
[0] > server@1.0.0 server
[0] > nodemon index.js
[0] 
[1] 
[1] > server@1.0.0 api
[1] > echo 'Local API listening on PORT 5000' & json-server --watch api/db.json -p 5000 -q
[1] 
[1] 'Local API listening on PORT 5000' 
[0] [nodemon] 2.0.22
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node index.js`
[0] Server listening on port 3001

```

Esto significa que la API ya está corriendo en tu computadora en el puerto 5000.

## **📖 ENUNCIADO GENERAL**

La idea de este proyecto es construir una aplicación web a partir de la API [**drivers**] en la que se pueda:

-  Buscar corredores.
-  Visualizar la información de los corredores.
-  Filtrarlos.
-  Ordenarlos.
-  Dar de Alta (Crear) nuevo corredor.
⚠️ Para las funcionalidades de filtrado y ordenamiento NO se puede utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados.

**CONSTRUCCION DE PROYECTO**: 
### Paso a paso de lo hecho hasta ahora
<br />

- Configuración inicial: Creamos un servidor Express y configuramos middleware para manejar solicitudes CORS, analizar cuerpos JSON y registrar solicitudes en la consola.
  
- Integración con JSON Server: Conectamos la aplicación a una API externa simulada mediante JSON Server para proporcionar datos adicionales de corredores.
  
- Modelado de datos: Definimos el modelo "Driver" utilizando Sequelize para representar la estructura de los corredores de Fórmula 1.

- Trabajo con Sequelize y PostgreSQL: Implementamos funciones para interactuar con la base de datos PostgreSQL utilizando Sequelize, y escribimos pruebas para el modelo "Driver".

- Rutas y controladores: Establecimos rutas para obtener todos los corredores, obtener un corredor por ID, buscar corredores por nombre y crear nuevos corredores. Desarrollamos controladores correspondientes para manejar estas operaciones.
  
- Pruebas unitarias: Utilizamos supertest para escribir pruebas unitarias para las rutas de la API, verificando el código de estado, la estructura de las respuestas y otras condiciones.

- Manejo de errores: Mejoramos la gestión de errores en los controladores para devolver códigos de estado adecuados y mensajes significativos.

- Refactorización y ajustes: Realizamos ajustes en la estructura del código y refactorizamos funciones para mejorar la claridad y la eficiencia del código.

---

<br />

## **📁 DATA SEEDING**

### **🖱 Consulta a la Base de Datos**

- Antes de hacer el data seeding, consulta si hay registros existentes en la tabla "Teams". Puedes usar el modelo de Sequelize para esto.

#### Decisión de Data Seeding:

- Si no hay registros, procede con el data seeding desde la API. Si hay registros, no necesitas hacer nada.

#### Data Seeding desde la API:

- Iterar sobre los objetos de la API.

- Para cada equipo en la propiedad 'teams', sepáralos y verifica si ya existe un equipo con ese nombre en la base de datos antes de agregarlo.

#### Creación de Registros:

- Crea un registro para cada equipo que no existe en la base de datos.



### **🖱 BACK-END**

Para esta parte deberás construir un servidor utilizando **NodeJS** y **Express**. Tendrás que conectarlo con tu base de datos mediante **Sequelize**.

Tu servidor deberá contar con las siguientes rutas:

#### **📍 GET | /drivers**

-  Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.

 IMPORTANTE: Si un driver no tiene imagen, deberás colocarle una por defecto 🖼️

#### **📍 GET | /drivers/:idDriver**

-  Esta ruta obtiene el detalle de un driver específico. Es decir que devuelve un objeto con la información pedida en el detalle de un driver.
-  El driver es recibido por parámetro (ID).
-  Tiene que incluir los datos del/los team/s del driver al que está asociado.
-  Debe funcionar tanto para los drivers de la API como para los de la base de datos.

#### **📍 GET | /drivers/name?="..."**

-  Esta ruta debe obtener los primeros 15 drivers que se encuentren con la palabra recibida por query.
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el driver, debe mostrar un mensaje adecuado.
-  Debe buscar tanto los de la API como los de la base de datos.

#### **📍 POST | /drivers**

-  Esta ruta recibirá todos los datos necesarios para crear un driver y relacionarlo con sus teams solicitados.
-  Toda la información debe ser recibida por body.
-  Debe crear un driver en la base de datos, y este debe estar relacionado con sus teams indicados (al menos uno).

#### **📍 GET | /teams**

-  Obtiene un arreglo con todos los teams existentes de la API.
-  En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
-  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

<br />

---

<br />

### **🖱 FRONT-END**

Se debe desarrollar una aplicación utilizando **React** y **Redux** que contenga las siguientes vistas:

**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:

-  Alguna imagen de fondo representativa al proyecto.
-  Botón para ingresar a la **`home page`**.

<br />

**📍 HOME PAGE |** la página principal de tu SPA debe contener:

-  SearchBar: un input de búsqueda para encontrar drivers por nombre.
-  Sector en el que se vea un listado de cards con los drivers. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta **`GET /drivers`** y deberá mostrar su:
   -  Imagen.
   -  Nombre.
   -  Escuderías.
-  Cuando se le hace click a una Card deberá redirigir al detalle de ese driver específico.
-  Botones/Opciones para **filtrar** por team, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los drivers por orden alfabético y por fecha año de nacimiento.
-  Paginado: el listado de drivers se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 9 drivers por página.

**⚠️ IMPORTANTE**: se deben mostrar tanto los drivers traidos desde la API como así también los de la base de datos, pero **NO** está permitido almacenar en la base de datos los drivers de la API. **Solamente se pueden guardar aquellos creados desde el form**.


<br />

**📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de un corredor:

-  ID.
-  Nombre.
-  Apellido.
-  Nacionalidad.
-  Imagen.
-  Descripción.
-  Fecha de Nacimiento.
-  Escuderías.



**📍 FORM PAGE |**: en esta vista se encontrará el formulario para crear un nuevo driver.

Este formulario debe ser **controlado completamente con JavaScritp**. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:


-  Nombre.
-  Apellido.
-  Nacionalidad.
-  Imagen.
-  Fecha de Nacimiento.
-  Descripción.
-  Escuderías.
-  Posibilidad de seleccionar/agregar varias escuderías en simultáneo.
-  Botón para dar de alta (crear) el nuevo driver.

> [**IMPORTANTE**]: es requisito que el formulario de creación esté validado sólo con JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre del driver no pueda contener símbolos,etc.

<br />

---

<br />

### **🖱 TESTING**

Ten en cuenta que en esta instancia no es obligatorio el desarrollo de testing para tu aplicación. De igual manera, te desafiamos a que los hagas, ¡ya que suman puntos!

-  Al menos tener un componente del frontend con sus tests respectivos.
-  Al menos tener dos ruta del backend con sus tests respectivos.
-  Al menos tener un modelo de la base de datos con sus tests respectivos.



<br />

