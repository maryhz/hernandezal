# El modelo de caja y sus partes
#### Mary Hernandez Alanis ####
#### 18100186
---
El ***modelo de caja*** es la manera en que se representan todos los elementos html en una página. Cada elemento genera una caja, el comportamiento de esa caja depende de su clasificación: si es de línea o de bloque.

A todas las cajas se les puede aplicar las siguientes propiedades: **width, height, padding, margin, border, background.** Lo particular de este concepto es que por defecto el width se refiere al ancho del contenido de un elemento (no al ancho total, de borde a borde). 

En el gráfico se muestra cómo se comporta cada una de las propiedades:

![Propiedades](https://www.laurachuburu.com.ar/img/tutoriales/css/modelo-de-caja.png)

- **El borde (border)**, en negro, es el límite que separa el interior del exterior del elemento.
- **El márgen (margin)**, en naranja, es la parte exterior del elemento, por fuera del borde.
- **El relleno (padding)**, en verde, es la parte interior del elemento, entre el contenido y el borde.
- **El contenido**, en azul, es la parte interior del elemento, excluyendo el relleno.

![Partes](https://lenguajecss.com/css/modelo-de-cajas/que-es/modelo-de-cajas.png)
  
El relleno y el margen son transparentes, por lo que en el espacio ocupado por el relleno se muestra el color o imagen de fondo (si están definidos) y en el espacio ocupado por el margen se muestra el color o imagen de fondo de su elemento padre (si están definidos). Si ningún elemento padre tiene definido un color o imagen de fondo, se muestra el color o imagen de fondo de la propia página (si están definidos).

Si una caja define tanto un color como una imagen de fondo, la imagen tiene más prioridad y es la que se visualiza. No obstante, si la imagen de fondo no cubre totalmente la caja del elemento o si la imagen tiene zonas transparentes, también se visualiza el color de fondo. Combinando imagenes transparentes y colores de fondo se pueden lograr efectos gráficos muy interesantes.

#### Dimensiones (ancho y alto)
Para dar tamaños específicos a los diferentes elementos de un documento HTML, se necesita asignarles valores a las propiedades width (ancho) y height (alto):

| Propiedad          | Valor     | Significado                      |
|--------------------|-----------|----------------------------------|
| width              | Auto/Size | Tamaño de ancho de un elemento.  |
| height             | Auto/Size | Tamaño de alto de un elemento.   |

En el caso de indicar el valor auto a dichas propiedades, el navegador se encargará de darle el tamaño apropiado, dependiendo de su contenido. Hay que tener en cuenta que este valor es el que tienen por defecto estas propiedades. De no indicar un valor concreto, width y height tienen establecido el valor auto.

> *Es importante recalcar que el tamaño automático dado a un elemento depende del tipo de elemento (bloque, en línea...).*

Hay que ser muy conscientes de que, sin indicar valores de ancho y alto para una caja, el elemento generalmente toma el tamaño que debe respecto a su contenido, mientras que si se indica un ancho y alto concretos, se esta obligando mediante CSS a tener un aspecto concreto.

Otra forma de lidiar con lo anterior, es utilizar las propiedades hermanas de width: por un lado, min-width y max-width y por otro, sus equivalentes de height: min-height y max-height.

| Propiedad          | Valor     | Significado                      |
|--------------------|-----------|----------------------------------|
| max-width          | None/Size | Ancho máximo que puede ocupar un elemento. |
| min-width          | 0/Size    | Ancho mínimo que puede ocupar un elemento. |
| max-height         | None/Size | Alto máximo que puede ocupar un elemento.  |
| min-height         | 0/Size    | Alto mínimo que puede ocupar un elemento.  |

Con estas propiedades, en lugar de establecer un tamaño fijo, se establece unos rangos máximos y mínimos, donde el ancho o alto podría variar entre ciertos valores.

#### Zonas de un elemento
En CSS existen ciertas palabras clave para hacer referencia a una zona u orientación concreta sobre un elemento:

![Zonas de un elementos](https://lenguajecss.com/css/modelo-de-cajas/que-es/positions.png)
  
- **Top:** Se refiere a la parte superior del elemento.
- **Left:** Se refiere a la parte izquierda del elemento.
- **Right:** Se refiere a la parte derecha del elemento.
- **Bottom:** Se refiere a la parte inferior del elemento.
- **Center:** En algunos casos se puede especificar el valor center para referirse a la posición central entre los extremos horizontales o verticales.


### Referencias
[Modelo de cajas](https://lenguajecss.com/css/modelo-de-cajas/que-es/)
[Modelo de cajas en CSS](https://www.laurachuburu.com.ar/tutoriales/modelo-de-caja.php)

