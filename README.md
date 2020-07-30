# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
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

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumen del proyecto
Se desarrollo un página web de una tienda online de ventas de productos
de postres saludables, que el objetivo principal fue crear las vista de 
validación de la tarjeta utilizando el algoritmo  Luhn y enmascarando los
últimos 4 digitos de la tarjeta.

## 3. Objetivos de aprendizaje

Aprenderás a construir una aplicación web que interactuará
con lx usuarix final a través del navegador, utilizando HTML, CSS y JavaScript
como tecnologías.

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
Nuestro público objetivo serían hombres y mujeres entre los 20 y 60 años de edad,
que practican alguna actividad física o  personas que se preocupan por una alimentación 
sana.

### Solución del problema/ necesidad
Hoy por hoy la conciencia sobre alimentarse bien, cada vez es mayor, 
las personas ante la necesidad de comer de manera saludable, se muestran más
preocupadas en la seleccion de sus comidas y más  la hora de darse un gusto 
con algún postre ya que son estos son los alimentos que tiene un alto porcentaje de grasas
saturas, harinas refinadas, etc. Es por ello y viendo que no existe una tienda
online de ventas de postres saludables en Lima ya que solo se venden este tipo de 
productos por las plataformas de fb o instagram se decidio crear esta tienda online de 
Postres Fit.

### Prototipo en papel
Se muestra la idea de como sería nuestra online especificamente las vistas de la 
validación de las tarjetas.
![gráfica de prototipo vista 1](https://i.ibb.co/njqVbtk/prototipo1.jpg)
![gráfica de prototipo vista 2](https://i.ibb.co/9tHBHSj/prototipo1-1.jpg)

### Prototipo en figma
Despues de hacer un feedback con mis compañeras lo plasme todo en un prototipo
en figma al ser un sofwtare de alta fidelidad se definio los colores que se usaria para la web

![gráfica figma](https://i.ibb.co/BqVZ2Dp/figma.png)

### Vistas de la página
Vista Formulario: Aqui se debe llenar los datos de la tarjeta a validar.

![gráfica vista 1](https://i.ibb.co/YPjPZ44/vista1.png)

Vista de Error: Se muestra un mensaje de error y se pide que vuelva llenar con datos de una tarjeta válida.

![gráfica vista 2](https://i.ibb.co/yVDt357/vista2.png)

Vista Correcta: Se muestra el mensaje de que la tarjeta es válida y se enmascara los digitos de la tarjeta menos las ultimas 4.
![gráfica vista 3](https://i.ibb.co/2NhRHTf/vista3.png)

