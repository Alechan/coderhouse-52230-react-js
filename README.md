# Proyecto final coderhouse-52230-react-js
## Resumen del sitio
El sitio pretende ofrecer la compra/venta de productos en distintas ciudades de Entre Ríos. En la página principal
se pueden ver los productos publicados a la venta y al hacer click en alguno de ellos, obtener más detalles y poder agregarlos al carrito.

Una vez que haya por lo menos un producto agregado al carrito, aparece el ícono arriba a la derecha en la barra de navegación
para poder dirigirnos al carrito. En éste, aparecen todos los ítems que agregamos para comprar y podemos efectuar la orden
de compra ingresando nuestro Nombre, Apellido, Teléfono e E-Mail. De ingresar datos válidos, se guardará la orden y se nos proveerá un "ID de orden" para identificarla.

## Implementación
El sitio está implementado principalmente utilizando React, con SASS para los estilos y archivos javascript puros
para funcionalidades no relacionadas con lo visual. Por ejemplo, las funciones para leer/escribir de nuestro almacenamiento están escritas en javascript puro.

El almacenamiento mencionado es Firestore, de Google, que contiene las siguientes colecciones
- Items: los ítems publicados en el sitio
- Cities: las ciudades con items publicados
- Orders: las órdenes efectuadas por los clientes


### Bibliotecas públicas utilizadas
Para facilitar el desarrollo del sitio, se utilizaron las siguientes bibliotecas
- react-bootstrap: utilizada para reducir el esfuerzo necesario para crear componentes básicos como Cards, Forms, Links, etc
- react-router-dom: utilizada para redireccionar al usuario a otras páginas sin resultar en una recarga del browser
- firebase: utilizada para leer/escribir desde el almacenamiento Firestore de Firebase


Además, en etapas anteriores del desarrollo se utilizaron las siguientes bibliotecas para mockear el almacenamiento
- concurrently: utilizada para poder correr concurrentemente el mockserver al mismo tiempo que la app de react
- json-server: utilizada para levantar un servidor con las rutas precargadas de /items y /cities

Ambas no son más utilizadas pero pueden servir si en algún momento se separa el ambiente de producción (que accede al Firestore real) del ambiente de desarrollo (que utilizaría de vuelta el mockserver como en la etapa anterior del desarrollo.)