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
