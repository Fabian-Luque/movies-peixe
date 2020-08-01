# Instrucciones instalación proyecto sin docker

## DEMO : https://fabian-luque.github.io/

## Para realizar la instalacion del proyecto se deben cumplir los siguientes requisitos en la maquina.

* Node.js 12.18.2
* Angular CLI

## Pasos instalación

* Clonar proyecto 
* cd Project_name
* Editar .env con la key para usar **endpoint de http://omdbapi.com/** 
* ```npm install```
* ```ng serve -o```

# Instrucciones instalación proyecto con **docker**


## Para realizar la instalacion del proyecto se deben cumplir los siguientes requisitos en la maquina.

* Docker


## Pasos instalación

* Clonar proyecto 
* cd Project_name
* Editar .env con la key para usar **endpoint de http://omdbapi.com/** 
* ```docker build -t peixe:prod .```
* Esperar un momento, docker esta ejecutando tareas
* ```docker run -p 80:80 peixe:prod```
