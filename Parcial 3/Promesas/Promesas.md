# Promises (Promesas) en Javascript
###### Mary Cruz Hernandez Alanis
###### 18100186
---

#### Definición
Una **Promise** (promesa) es un objeto que representa la terminación o el fracaso de una operación asíncrona.

Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan funciones callback, en lugar de pasar callbacks a una función.

Como su propio nombre indica, una promesa es algo que, en principio sw piensa que se cumplirá, pero en el futuro pueden ocurrir varias cosas:

![Promesas](https://lenguajejs.com/javascript/asincronia/promesas/promises.png)

- La promesa se cumple (promesa resuelta)
- La promesa no se cumple (promesa se rechaza)
- La promesa se queda en un estado incierto indefinidamente (promesa pendiente)

Con estas sencillas bases, se puede entender el funcionamiento de una promesa en Javascript. También se debe tener claro que existen dos partes importantes de las promesas: **como consumirlas (utilizar promesas)** y **como crearlas (preparar una función para que use promesas y se puedan consumir)**.

#### Promesas en Javascript 
Las **promesas** en Javascript se representan a través de un `object`, y cada promesa estará en un estado concreto: **pendiente, aceptada o rechazada**. Además, cada promesa tiene los siguientes métodos:

| Métodos             | Descripción    |
|-------------------|-------------|---------------|--------------|
| .then(`function`resolve)                     | Ejecuta la función **callback resolve** cuando la promesa se cumple.   |
| .catch(`function`reject)                     | Ejecuta la función **callback reject** cuando la promesa se rechaza.       |
| .then(`function`resolve,`function`reject)    | Método equivalente a las dos anteriores en el mismo **.then()**. |
| .finally(`function`end)                      | Ejecuta la función **callback end** tanto si se cumple como si se rechaza.  |


#### Terminología asociada a las Promesas
Existen muchos términos relacionados a lo que son Promesas en Javascript. A continuación se ve lo más básico.

Una promesa puede presentar los siguientes estados:

- **fulfilled** - La acción relacionada a la promesa se llevó a cabo con éxito
- **rejected** - La acción relacionada a la promesa falló
- **pending** - Aún no se ha determinado si la promesa fue fulfilled o rejected
- **settled** - Ya se ha determinado si la promesa fue fulfilled o rejected
  
También se suele usar el término **thenable**, para indicar que un objeto tiene disponible un método "then" (y que por tanto está relacionado con Promesas).


#### Consumir una promesa 
La forma general de consumir una promesa es utilizando el .then() con un sólo parámetro, puesto que muchas veces lo único que nos interesa es realizar una acción cuando la promesa se cumpla:

~~~
fetch("/robots.txt").then(function(response) {
  /* Código a realizar cuando se cumpla la promesa */
});
~~~

Lo que se ve en el ejemplo anterior es el uso de la función fetch(), la cuál devuelve una promesa que se cumple cuando obtiene respuesta de la petición realizada. De esta forma, se estaría preparando (de una forma legible) la forma de actuar de nuestro código a la respuesta de la petición realizada, todo ello de forma asíncrona.

Es posible hacer uso del método .catch() para actuar cuando se rechaza una promesa:

~~~
fetch("/robots.txt")
  .then(function(response) {
    /* Código a realizar cuando se cumpla la promesa */
  })
  .catch(function(error) {
    /* Código a realizar cuando se rechaza la promesa */
  });
~~~

Se pueden encadenar varios .then() si se siguen generando promesas y se devuelven con un return:

~~~
fetch("/robots.txt")
  .then(response => {
    return response.text(); // Devuelve una promesa
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => { /* Código a realizar cuando se rechaza la promesa */ });
~~~


:heavy_exclamation_mark: No hay que olvidar indicar el return para poder encadenar las siguientes promesas con .then(). Tras un .catch() también es posible encadenar .then() para continuar procesando promesas.

Usando **arrow functions** se puede mejorar aún más la legibilidad de este código, recordando que cuando sólo se tiene una sentencia en el cuerpo de la arrow function hay un return implícito:

~~~
fetch("/robots.txt")
  .then(response => response.text())
  .then(data => console.log(data))
  .finally(() => console.log("Terminado."))
  .catch(error => console.error(data));
~~~

Al ejemplo anterior se añadido el método **.finally()** para añadir una función callback que se ejecutará tanto si la promesa se cumple o se rechaza, lo que ahorrará tener que repetir la función en el .then() como en el .catch().

#### Asincronía con promesas
Lo primero que muestra el ejemplo es crear un nuevo objeto  que «envuelve» toda la función de la tarea doTask().

Al new Promise() se le pasa por parámetro una función con dos callbacks, el primero resolve el que se utilizará cuando se cumpla la promesa, y el segundo reject cuando se rechace:

~~~
/* Implementación con promesas */
const doTask = (iterations) => new Promise((resolve, reject) => {
  const numbers = [];
  for (let i = 0; i < iterations; i++) {
    const number = 1 + Math.floor(Math.random() * 6);
    numbers.push(number);
    if (number === 6) {
      reject({
        error: true,
        message: "Se ha sacado un 6"
      });
    }
  }
  resolve({
    error: false,
    value: numbers
  });
});
~~~

Se trata de una implementación muy similar a los callbacks que se vió en el apartado anterior, pero utilizan una `promise` nativa para poder luego consumirla cómodamente:

~~~
doTask(10)
  .then(result => console.log("Tiradas correctas: ", result.value))
  .catch(err => console.error("Ha ocurrido algo: ", err.message));
~~~

Si se imagina el caso de que cada lanzamiento del dado (la parte donde genera el número aleatorio) fuera un proceso más costoso que tardara un tiempo considerable, quizás de esa forma se vea más clara la necesidad de una tarea asíncrona, controlada con promesas.