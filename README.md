![logo_readme](https://user-images.githubusercontent.com/36904152/108848146-62b27d00-75bf-11eb-9cad-dceaaa1c3101.png?raw=false)

# TP3 - Sr Cobranza (Cazabat-Sardon)
>Sistema de cobranza de socios.
Con este sistema se permite realizar el **_CRUD_** necesario sobre las tareas de creación de socios como de registrar un nuevo usuario.
Implementa **_Firebase_** como persistencia de datos. Sólo se realiza conexión mediante fetch no se implementa ninguna librería par su uso.

## Integrantes del trabajo final:
Daniel Cazabat y Jorge Sardón

---

## Links de interés:
>
>Link al repositorio: --> https://github.com/dcazabat/pjament.git
>
>Link a firebase: --> https://sr-cobranza-default-rtdb.firebaseio.com
>

# NOTAS:

>Se debe eliminar el archivo **__package-lock.json__** antes de instalar cualquier libreía


## Pasos para correr el proyecto:
---
1. Ejecutar la instalación de las dependeencias
    Se debe ejecutar el comnado **_npm install_** para descargar las dependencias necesarias para que funcione el proyecto.
```
Comando ==> npm install
```

---
2. Iniciar el servidor
    Con este paso nos permite ejecutar un servidor local que permite visualizar el proyecto e interactuar con el
```
Comando: ==> npm run serve
```


### Usuarios para el sistema:
>
> Usuario: admin
>
> Contraseña: admin
>


### Detalle técnico del proyecto:
---
>El poryecto esta diseñado en Vue utilizando :
>Vue Route para el enrutamiento, 
>Vuex como almacenamiento global de la información interna necesaria para trabajar,
>MD5 para la encriptación de la contraseña
>Vuelidate para validaciones de formularios y
>Bootstrap para los estilos del sitio
