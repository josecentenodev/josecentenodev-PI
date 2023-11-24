# 🚗 **DRIVERS** | Proyecto Individual de Centeno Jose Antonio

## **📌 DESCRIPCIÓN**

-  Single Page Application hecha con: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  

## **📋 SOBRE LA API DRIVERS...**

En este proyecto la API de Drivers **corre localmente desde tu computadora**. 

Para lograr que esta API funcione, luego de instalar dependencias correspondientes, deberás dirigirte desde tu terminal a la back y ejecutar el comando:

```bash
   npm start
```

Podrás ver el siguiente mensaje en tu terminal.

``` 
[0] 
[0] > back@1.0.0 server
[0] > nodemon index.js
[0] 
[1] 
[1] > back@1.0.0 api
[1] > echo 'Local API listening on PORT 5000' & json-server --watch api/db.json -p 5000 -q
[1] 
[1] 'Local API listening on PORT 5000' 
[0] [nodemon] 3.0.1
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,cjs,json
[0] [nodemon] starting `node index.js`
[0] Server listening on port 3001

```

Esto significa que la API ya está corriendo en tu computadora en el puerto 5000.

## **📖 ENUNCIADO GENERAL**

La idea de este proyecto es una aplicación web a partir de la API [**drivers**] en la que se puede:

-  Buscar corredores.
-  Visualizar la información de los corredores.
-  Filtrarlos.
-  Ordenarlos.
-  Dar de Alta (Crear) nuevo corredor.
<br />
<br />

# CONSTRUCCION DE PROYECTO: 
### Paso a paso de lo hecho hasta ahora
<br />

# Backend:
### Modelos y Base de Datos:

- Creación de modelos Driver y Team para representar pilotos y equipos.
- Configuración de la relación muchos a muchos entre Driver y Team.

### Controladores:

- Implementación de controladores para operaciones CRUD en pilotos.

### Rutas y Express:

- Configuración de rutas en Express para cada controlador.
- Uso de Sequelize para interactuar con la base de datos.

### Data Seeding:

- Implementación de funciones para realizar seeding de datos desde la API de F1 para pilotos y equipos.

### Testing con Jest:

Creación de pruebas unitarias para rutas.

# Frontend (Hasta ahora):

### Styled Components:

- Configuración e implementación de Styled Components para el diseño de componentes.
  
### Landing Page:

- Creación de una landing page con una imagen de fondo estilo Formula 1 y un botón de acceso.
  
### Efectos Visuales:

- Uso de filtros de CSS para aplicar un ligero blur a la imagen de fondo.
- Animación de clic en el botón para mejorar la experiencia del usuario.

---

<br />

## **📁 TEAMS DATA SEEDING**

### **🖱 Consulta a la Base de Datos**

- Antes de hacer el data seeding, consulta si hay registros existentes en la tabla "Teams". Puedes usar el modelo de Sequelize para esto.

#### Decisión de Data Seeding:

- Si no hay registros, procede con el data seeding desde la API. Si hay registros, no necesitas hacer nada.

#### Data Seeding desde la API:

- Iterar sobre los objetos de la API.

- Para cada equipo en la propiedad 'teams', sepáralos y verifica si ya existe un equipo con ese nombre en la base de datos antes de agregarlo.

#### Creación de Registros:

- Crea un registro para cada equipo que no existe en la base de datos.


<br />

**⚠️ IMPORTANTE**

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

