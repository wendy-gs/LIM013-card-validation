# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Especificaciones Técnicas](#3-especificaciones-técnicas)
* [4. Investigación UX](#4-investigación-ux)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.
<center>Gráfico N°1: Algoritmo de Luhn</center>

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumen del proyecto
Se desarrollo un página web de una tienda online de postres saludables, ya que en la actualidad hay un alta tendencia en buscar una alimentación saludable y no existe ninguna página web en Perú sobre ventas de estos productos y solo comercializa atraves de las plataformas de fb o instagram.

## 3. Especificaciones Técnicas
Para desarrollar el proyecto de validación de tarjeta se utilizo HTML, CSS y JavaScript como tecnologías.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Manipulación de strings.
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Declaración correcta de variables (const & let)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

## 4. Investigación UX

### Público objetivo
Nuestro público objetivo serán hombres y mujeres entre los 20 y 60 años de edad,
que practican alguna actividad física o  personas que se preocupan por una alimentación 
sana.

### Solución del problema/ necesidad
El sobrepeso y la obesidad son grandes males que afectan al Perú, según IPSOS en su estudio de ["Alimentación y vida
saludable en Lima"](https://www.ipsos.com/sites/default/files/ct/publication/documents/2019-10/vida_saludable.pdf) en el año 2019 dio como resultado el 47% tiene UN IMC adecuado, 29% tiene sobrepeso y 18% tiene obesidad.
Es por ello que la tendencia de buscar una alimentación saludable va creciendo y expandiéndose,
y cada vez más peruanos buscan consumir frutas, verduras, beber  agua y leer la información en las etiquetas de los empaques, por lo antes mencionado se da la propuesta de negocio “Postres Fit” con el fin de proponer mediante esta alternativa
nuevos hábitos saludables, agradables y de costos asequibles al consumidor.<br>

<center>Gráfico N°2: Alimentación saludable en Lima</center>

![gráfica Inei](https://i.ibb.co/rv1xjWS/inei.jpg)
<br><br>
<center>Gráfico N°3: Perfil Nutricional</center>

![gráfica Ipsos](https://i.ibb.co/51mM0wb/vida-saludable.png)

### Prototipo en papel
Se prototipo en base a una lluvia de ideas sobre negocios virtuales y de la cual se eligio sobre postres saludables.

<center>Gráfico N°4: Vista 1</center>

![gráfica de prototipo vista 1](https://i.ibb.co/njqVbtk/prototipo1.jpg)
En estas vista son de ingreso a la tienda online y seleccionar el botón de pagar, y nos abrira la siguiente vista donde se tendra que rrellenar el formulario con los datos de la tarjeta.
<br>
<center>Gráfico N°5: Vista 2</center>

![gráfica de prototipo vista 2](https://i.ibb.co/9tHBHSj/prototipo1-1.jpg)
En esta segunda vista nos muestra el mesaje si la tarjeta es correcta nos saldra el botón de seguir o de lo contrario saldra un mensaje de error.

### Prototipo en figma
Despues de hacer un feedback con mis compañeras lo plasme todo en un prototipo
en figma al ser un sofwtare de alta fidelidad se definio los colores que se usaria para la web

<center>Gráfico N°6: Prototipo Figma</center>

![gráfica figma](https://i.ibb.co/BqVZ2Dp/figma.png)

## 5. Interfaz Usuario(UI)
### Insertar número de tarjeta a validar:
Se creo un input donde se ingresara el número de tarjeta y se validará que solo se ingresa números no se permitira el ingreso de letras ni de simbolos especiales.

<center>Gráfico N°7: Vista Formulario</center>

![gráfica vista 1](https://i.ibb.co/DDN2sR2/formulario.png)

### Resultado inválido:
Si al ingresar un número de tarjeta inválido saldra un mensaje de error y se reseteara todos los campos del formulario.

<center>Gráfico N°8: Vista Error</center>

![gráfica vista 2](https://i.ibb.co/SJ5ZQG2/mensaje-error.png)

### Resultado válido:
Si el número de la tarjeta es válido saldra un mensaje de validación y se mostrara el número de la tarjeta enmascarada solo siendo visible los 4 últimos digitos y el nombre del titular que se ingreso.

<center>Gráfico N°9: Mensaje correcto</center>

![gráfica valida](https://i.ibb.co/YyLjgx8/valida.png)



