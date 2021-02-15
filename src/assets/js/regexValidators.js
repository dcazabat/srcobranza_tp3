const regexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const regexPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
const regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
const regexLowerCase = /^[a-z-0-9]{8,16}$/


export  {
    regexMail,
    regexPhone,
    regexPass,
    regexLowerCase

}

/**
 * Especificación de regexPass
 * -La contraseña debe tener al entre 8 y 16 caracteres
 * -Al menos un dígito
 * -Al menos una minúscula y al menos una mayúscula.
   -Puede tener otros símbolos.
    Ejemplos:
        w3Unpocodet0d0
        w3Unpo<code>t0d0
 */

 /**
  * Especificación de regexPhone
  * el prefijo internacional (54) 
  * el prefijo internacional para celulares (9) 
  * el prefijo de acceso a interurbanas (0) 
  * el prefijo local para celulares (15) 
  * Es obligatorio: el código de área (11, 2xx, 2xxx, 3xx, 3xxx, 6xx y 8xx) 
  * (no toma como válido un número local sin código de área como 4444-0000)
  */
 /**
  * Especificación de regexLowerCase
  * Debe ser ingresado en minúscula
  * Puede contener números
  * Debe tener un largo de entre 8 y 16 caracteres
  */