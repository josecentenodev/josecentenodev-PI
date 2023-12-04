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

-  Buscar, crear, editar y eliminar corredores (aquellos pertenecientes a la base de datos).
-  Visualizar la información de los corredores.
-  Filtrarlos.
-  Ordenarlos.

<br />
<br />

# CONSTRUCCION DE PROYECTO: 
<br />

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


### Styled Components:

- Configuración e implementación de Styled Components para el diseño de componentes.
  
### Landing Page:

- Creación de una landing page con una imagen de fondo estilo Formula 1 y un botón de acceso.
  
### Formulario:

- Formulario reutilizable para crear y editar conductores de Formula 1 (desarrollo de ruta y controlador PUT).

- Logica para el almacenamiento de imagenes en Backend y visualizacion de la imagen cargada en el formulario. 

- Validacion y visualizacion de errores con Javascript.

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

