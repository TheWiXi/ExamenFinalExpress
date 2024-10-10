## Diseño de aplicación de comida saludable

Este proyecto consiste en el desarrollo de una aplicación web de comida saludable. La plataforma estará diseñada para proporcionar a los usuarios acceso fácil y rápido a una variedad de opciones alimenticias saludables. Los usuarios podrán buscar comidas, filtrar por categorías, acceder a información nutricional detallada y calificar los alimentos que consumen. La aplicación ofrecerá una interfaz atractiva y fácil de usar, permitiendo a los usuarios disfrutar de una experiencia personalizada al explorar y seleccionar sus comidas saludables preferidas.

## Características Principales

* **Inicio de Sesión:** Los usuarios podrán acceder a la aplicación utilizando sus credenciales previamente registradas. Además, se podrá descargar el proyecto anterior de login y usarlo en esta sesión, lo que facilitará la integración de la funcionalidad de autenticación y permitirá a los usuarios acceder rápidamente a sus cuentas.
* Búsqueda y Filtro de Comidas: Los usuarios podrán buscar cualquier comida utilizando un botón de búsqueda. Además, habrá botones de categorías que, al seleccionarlos, buscarán automáticamente las comidas dentro de esa categoría (vegetales, proteínas, etc.), facilitando así la navegación y el acceso a opciones saludables.
* Información Nutricional: Cada comida incluirá detalles sobre calorías, ingredientes y otros datos nutricionales. Además, habrá un botón "Read More" en el diseño que abrirá un modal, mostrando información nutricional detallada sobre la comida seleccionada, mejorando así la experiencia del usuario.
  Sistema de Valoración: Los usuarios pueden calificar las comidas, y estas valoraciones se guardarán en la base de datos. Se calculará un promedio de las calificaciones para cada comida y se mostrará en el diseño de la aplicación, proporcionando a los usuarios una referencia clara sobre la calidad de cada opción.
* Favoritos: Al seleccionar una comida como favorita, esta se guardará en la base de datos del usuario, permitiendo un acceso rápido a sus opciones preferidas en futuras visitas. Esta funcionalidad también permitirá a la aplicación conocer qué comidas son más populares entre los usuarios.
  Pedidos y Precios: Los usuarios podrán realizar pedidos de comidas directamente a través de la aplicación. Cada comida tendrá un precio asignado, lo que permitirá a los usuarios conocer el costo total de su pedido antes de confirmarlo.
* Interfaz de Usuario Atractiva: Un diseño intuitivo y amigable que mejora la experiencia del usuario en la navegación y selección de alimentos.

Resultado esperado

Estructura de Datos
Usuarios

```
usuarioID: ID único del usuario (int)
nombre: Nombre del usuario (string)
email: Correo electrónico del usuario (string)
contraseña: Contraseña encriptada (string)
favoritos: Lista de IDs de comidas favoritas (array de int)
{
  "usuarioID": 1,
  "nombre": "Juan Pérez",
  "email": "juan.perez@example.com",
  "contraseña": "contraseña_encriptada",
  "favoritos": [1, 2, 3] // IDs de comidas favoritas
}
```

Comidas

```
comidaID: ID único de la comida (int)
nombre: Nombre de la comida (string)
categoría: Categoría de la comida (string) — e.g., "vegetales", "proteínas"
calorías: Número de calorías por porción (int)
ingredientes: Lista de ingredientes (array de string)
valoraciones: Lista de calificaciones recibidas (array de int)
promedioValoración: Promedio de las valoraciones (float)
{
  "comidaID": 1,
  "nombre": "Ensalada César",
  "categoría": "ensaladas",
  "calorías": 200,
  "ingredientes": ["lechuga", "pollo", "queso parmesano", "aderezo César"],
  "valoraciones": [5, 4, 3], // Calificaciones recibidas
  "promedioValoración": 4.0 // Promedio de las valoraciones
}
```

Valoraciones

```
valoraciónID: ID único de la valoración (int)
comidaID: ID de la comida valorada (int)
usuarioID: ID del usuario que realizó la valoración (int)
calificación: Calificación dada por el usuario (int) — rango de 1 a 5
{
  "valoraciónID": 1,
  "comidaID": 1,
  "usuarioID": 1,
  "calificación": 5 // Calificación dada por el usuario (1-5)
}
```

Pedidos

```
pedidoID: Un identificador único para el pedido específico, que se utiliza para distinguir un pedido de otro en la base de datos.
usuarioID: Representa al usuario que ha realizado el pedido. Este ID se refiere a un usuario registrado en el sistema.
comidas: Es una lista de los artículos seleccionados en el pedido. Cada comida incluye:
comidaID: Un identificador único para la comida seleccionada.
cantidad: La cantidad de unidades de esa comida que el usuario ha agregado al pedido.
total: El costo total del pedido, que se calcula multiplicando el precio de cada comida por su cantidad y sumando los resultados.
fecha: El momento en el que se realiza el pedido, en formato de fecha y hora estándar, para un registro temporal preciso.
{
 "pedidoID": 1,
 "usuarioID": 1,
 "comidas": [
  {
     "comidaID": 1,
     "cantidad": 2
  },
  {
     "comidaID": 2,
     "cantidad": 1
  }
 ],
 "total": 26.97, // Total del pedido calculado a partir de los precios
 "fecha": "2024-09-27T12:00:00Z" // Fecha y hora del pedido
}
```

Tecnologías y Herramientas
MongoDB: Para la gestión de la base de datos, permitiendo almacenamiento y consulta de datos de forma eficiente.
Back-end: Node.js con Express.js para la creación del servidor y gestión de rutas.
API: Cada API tendrá dos versiones:
1.0.0: La primera versión estará destinada para el uso del front-end.
2.0.0: Esta versión será utilizada para realizar pruebas en Thunder Client y contará con el middleware express-rate-limit para limitar la tasa de solicitudes y mejorar la seguridad.
Node.js: Entorno de ejecución para ejecutar el servidor backend.
Front-end:
Figma: https://www.figma.com/community/file/1298981166642440553
Recurso: https://drive.google.com/drive/folders/1dzkUMZU2hMwSQHRlHBdkQb4t1-AH8i9A?usp=sharing
Opción 1: React o Vue.js para construir una interfaz de usuario interactiva y dinámica.
Opción 2: Desarrollo puro utilizando HTML, CSS y JavaScript para una implementación más sencilla.
Arquitectura del Proyecto: Se pueden elegir entre dos opciones:
MVC (Modelo-Vista-Controlador): Para separar la lógica de negocio de la interfaz de usuario.
Arquitectura Hexagonal: Para crear una aplicación que sea más fácil de probar y mantener, separando los componentes en diferentes capas.
GitHub: Para la gestión de versiones del código y colaboración en el desarrollo.
README: El archivo README incluirá documentación sobre cómo clonar el proyecto, cómo instalar las dependencias y la documentación de la API de la versión 2.0.0 solamente.

Se debe entregar un repositorio en GitHub privado (compartido a las cuentas que el Trainer indique) junto con el hash del commit que será calificado.


# Documentación API 

## Base URL

```
http://localhost:3000/api/v1
```

Para la versión 2 (con rate limiting), usa:

```
http://localhost:3000/api/v2
```

## Autenticación

La mayoría de los endpoints requieren un token JWT. Incluye el token en el header de la siguiente manera:

```
Authorization: Bearer <tu_token_jwt>
```

---

## Endpoints de Usuarios

### 1. Registro de Usuario

- **URL**: `/users/register`
- **Método**: `POST`
- **Auth requerida**: No
- **Datos requeridos**:

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

- **Ejemplo de solicitud**:

```bash
POST http://localhost:3000/api/v1/users/register \
  Header: "Content-Type: application/json" \
  Body: '{
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "password": "password123"
  }'
```

- **Respuesta exitosa**:

```json
{
  "_id": "user_id",
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "token": "jwt_token"
}
```

### 2. Inicio de Sesión

- **URL**: `/users/login`
- **Método**: `POST`
- **Auth requerida**: No
- **Datos requeridos**:

```json
{
  "email": "string",
  "password": "string"
}
```

- **Ejemplo de solicitud**:

```bash
 POST http://localhost:3000/api/v1/users/login \
  Header: "Content-Type: application/json" \
  Body: '{
    "email": "juan@example.com",
    "password": "password123"
  }'
```

- **Respuesta exitosa**:

```json
{
  "_id": "user_id",
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "token": "jwt_token"
}
```

---

## Endpoints de Comidas

### 1. Crear Nueva Comida

- **URL**: `/foods`
- **Método**: `POST`
- **Auth requerida**: Sí
- **Datos requeridos**:

```json
{
  "name": "string",
  "category": "string",
  "calories": "number",
  "ingredients": ["string"],
  "price": "number"
}
```

- **Ejemplo de solicitud**:

```bash
 POST http://localhost:3000/api/v1/foods \
  Header: "Content-Type: application/json" \
  Header: "Authorization: Bearer <tu_token_jwt>" \
  Body: '{
    "name": "Ensalada César",
    "category": "ensaladas",
    "calories": 350,
    "ingredients": ["lechuga", "pollo", "crutones", "queso parmesano"],
    "price": 12.99
  }'
```

- **Respuesta exitosa**:

```json
{
  "_id": "food_id",
  "name": "Ensalada César",
  "category": "ensaladas",
  "calories": 350,
  "ingredients": ["lechuga", "pollo", "crutones", "queso parmesano"],
  "price": 12.99,
  "averageRating": 0
}
```

### 2. Obtener Todas las Comidas

- **URL**: `/foods`
- **Método**: `GET`
- **Auth requerida**: No
- **Parámetros de consulta opcionales**:
  - `category`: Filtrar por categoría
- **Ejemplo de solicitud**:

```bash
# Todas las comidas
curl http://localhost:3000/api/v1/foods

# Filtrar por categoría
curl http://localhost:3000/api/v1/foods?category=ensaladas
```

- **Respuesta exitosa**:

```json
[
  {
    "_id": "food_id",
    "name": "Ensalada César",
    "category": "ensaladas",
    "calories": 350,
    "ingredients": ["lechuga", "pollo", "crutones", "queso parmesano"],
    "price": 12.99,
    "averageRating": 4.5
  },
  // ... más comidas
]
```

### 3. Obtener Comida por ID

- **URL**: `/foods/:id`
- **Método**: `GET`
- **Auth requerida**: No
- **Ejemplo de solicitud**:

```bash
curl http://localhost:3000/api/v1/foods/food_id
```

- **Respuesta exitosa**:

```json
{
  "_id": "food_id",
  "name": "Ensalada César",
  "category": "ensaladas",
  "calories": 350,
  "ingredients": ["lechuga", "pollo", "crutones", "queso parmesano"],
  "price": 12.99,
  "averageRating": 4.5
}
```

---

## Endpoints de Valoraciones

### 1. Crear Nueva Valoración

- **URL**: `/ratings`
- **Método**: `POST`
- **Auth requerida**: Sí
- **Datos requeridos**:

```json
{
  "foodId": "string",
  "rating": "number"
}
```

- **Ejemplo de solicitud**:

```bash
 POST http://localhost:3000/api/v1/ratings \
  Header: "Content-Type: application/json" \
  Header: "Authorization: Bearer <tu_token_jwt>" \
  Body: '{
    "foodId": "food_id",
    "rating": 5
  }'
```

- **Respuesta exitosa**:

```json
{
  "_id": "rating_id",
  "foodId": "food_id",
  "userId": "user_id",
  "rating": 5
}
```

---

## Endpoints de Pedidos

### 1. Crear Nuevo Pedido

- **URL**: `/orders`
- **Método**: `POST`
- **Auth requerida**: Sí
- **Datos requeridos**:

```json
{
  "items": [
    {
      "foodId": "string",
      "quantity": "number"
    }
  ]
}
```

- **Ejemplo de solicitud**:

```bash
 POST http://localhost:3000/api/v1/orders \
  Header: "Content-Type: application/json" \
  Header: "Authorization: Bearer <tu_token_jwt>" \
  Body: '{
    "items": [
      {
        "foodId": "food_id",
        "quantity": 2
      },
      {
        "foodId": "food_id_2",
        "quantity": 1
      }
    ]
  }'
```

- **Respuesta exitosa**:

```json
{
  "_id": "order_id",
  "userId": "user_id",
  "items": [
    {
      "foodId": "food_id",
      "quantity": 2
    },
    {
      "foodId": "food_id_2",
      "quantity": 1
    }
  ],
  "total": 42.97
}
```

### 2. Obtener Pedidos del Usuario

- **URL**: `/orders/my-orders`
- **Método**: `GET`
- **Auth requerida**: Sí
- **Ejemplo de solicitud**:

```bash
curl http://localhost:3000/api/v1/orders/my-orders \
  Header: "Authorization: Bearer <tu_token_jwt>"
```

- **Respuesta exitosa**:

```json
[
  {
    "_id": "order_id",
    "userId": "user_id",
    "items": [
      {
        "foodId": {
          "_id": "food_id",
          "name": "Ensalada César",
          "price": 12.99
        },
        "quantity": 2
      }
    ],
    "total": 25.98
  },
  // ... más pedidos
]
```

## Códigos de Error Comunes

- 400 Bad Request - Datos inválidos en la solicitud
- 401 Unauthorized - Token no proporcionado o inválido
- 404 Not Found - Recurso no encontrado
- 500 Internal Server Error - Error del servidor

## Notas Adicionales

1. Todos los endpoints de la versión 2 (v2) tienen un límite de tasa de 100 solicitudes por 15 minutos por IP.
2. Los IDs en los ejemplos son representativos. En la práctica, MongoDB generará IDs únicos.
3. Asegúrate de guardar el token JWT cuando inicies sesión o te registres, lo necesitarás para las solicitudes autenticadas.
