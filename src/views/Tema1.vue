<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Modelado multidimensional

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos

    p.mb-5 El modelado multidimensional, consiste en una técnica de diseño de bases de datos que responde a las necesidades analíticas que impone la tecnología <i>Data Warehousing</i>. Se logra un diseño más cercano a la visión del usuario final de una consulta empresarial y la información es fácil de encuestar y navegar. Además, permite obtener mayor velocidad de recuperación de las consultas, en comparación con el modelo Entidad-Relación. Por otra parte, asegura un orden implícito y permite el almacenamiento y análisis histórico de la información, mediante la inserción de los datos por intervalos de tiempo. 

    p.mb-5 A continuación, se explican los conceptos que se trabajan en un modelado multidimensional. 

    .tarjeta.tarjeta--azul1.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h4 ¿Qué es una base de datos multidimensional?
            p Un modelo multidimensional o BDMR, dentro del entorno de las bases de datos, es un sistema de 
              em software 
              |creado para el almacenamiento y la reconstrucción eficiente de miles de datos que se encuentran relacionados, almacenados, revisados y estudiados desde diferentes perspectivas (conocidas con el nombre de dimensiones). Para lograr comprender mejor la definición del modelo multidimensional se deben conocer tres conceptos: cubo, medida y dimensión.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-1.png', alt='Manos en computador portátil')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h4 ¿Qué es un cubo?
            p Es el modelo de datos multidimensional que soporta el manejo de una robusta cantidad de datos. Este modelo ve los datos como “cubo” y permite que sean modelados y visualizados en múltiples dimensiones; de esta forma, surge la instancia de modelo multidimensional conocido también como hipercubo, cubo OLAP o base de datos OLAP (
              em On-Line Analytical Processing
              |) y suele crearse a partir de bases de datos relacionales existentes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-2.svg', alt='Cubo')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h4 ¿Qué es dimensión o dimensiones?
            p Son empleadas para escoger y agregar datos dentro del nivel deseado. Como los datos se pueden apreciar dentro de un cubo, este permite que se manejen diversos números de dimensiones.
            p Un cubo puede tener 64 dimensiones donde cada celda tiene un valor y este valor de cada celda es la intersección de las dimensiones. Sin embargo, un cubo puede tener entre 4 y 12 dimensiones y sostiene una panorámica de 2 a 3 dimensiones al mismo tiempo. Ejemplo: el tiempo, la localización, los clientes, proveedores, etc.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-3.png', alt='Cubo')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h4 Miembros
            p.mb-4 Son los nombres que identifican una posición dentro de la dimensión.
              br
              |Por ejemplo, dentro de la dimensión tiempo: un mes, un trimestre o un año; dentro de la dimensión localización: ciudad, región o país.
            h4 Jerarquías
            p Es la forma en que se organizan los miembros de las dimensiones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-4.png', alt='Jerarquías')
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            h4 ¿Qué es medida?
            p Es un dato numérico asociado a los hechos, es decir, a lo que realmente se mide. La medida, también llamada hecho, es un dato numérico que representa una actividad. Ejemplos: volumen de las ventas, precio de un producto, el número de transacciones efectuadas, el porcentaje de ganancia, etc. 
            p Las medidas pueden ser de tres clases:
            ul.lista-ul--color
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Aditivas que pueden ser combinadas a lo largo de una dimensión. Ejemplo: ventas totales del producto, localización, y el tiempo.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Semiaditivas que No pueden ser combinadas a lo largo de una o más dimensiones. Ejemplo: el resumen del inventario a través de productos, pero sumando los niveles de inventario a través del tiempo no tiene sentido.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 No Aditivas que No pueden ser combinadas a lo largo de cualquier dimensión.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img1-5.png', alt='Medida')

    h3.mb-5(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Características del modelo multidimensional

    .tarjeta.tarjeta--azul2.p-4.mb-5
      PasosB.color-primario
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El modelado multidimensional de datos puede ser trabajado desde un esquema relacional; es decir, las dimensiones del cubo son modeladas como relaciones de dimensiones. Los cubos son modelados como funciones del producto cartesiano sobre las dimensiones de las medidas de los datos. En general, la estructura básica de un DW para el modelo multidimensional está definida por dos elementos los esquemas y las tablas.
            ul.lista-ul--color
              li
                i.fas.fa-check.fa-xs
                p.mb-0 
                  b Expresividad: 
                  |deben tener los conceptos o bases necesarios para expresar claramente la realidad.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 
                  b Simplicidad: 
                  |deben ser sencillos para que los esquemas o representaciones gráficas sean fáciles de entender.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 
                  b Minimalidad: 
                  |cada concepto debe tener distinto significado.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 
                  b Formalidad: 
                  |todos los conceptos.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-6.svg', alt='Modelo multidimensional')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Tablas DW
            p Toda base de datos relacional se compone de tablas. En el modelado multidimensional existen dos tipos básicos de tablas:
            ul.lista-ul--color
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Tablas de hechos o 
                  em fact
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Tablas de dimensiones o 
                  em lock up
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-7.svg', alt='Tablas')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Tablas de hechos o 
              em fact
            p Es una tabla central dentro del esquema dimensional, donde se almacena la expresión numérica del negocio. Está compuesta por valores numéricos y aditivos; organizan los datos con base en un tema como ventas, ganancias, etc.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-8.svg', alt='Tabla de hechos')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Tablas de dimensiones o 
              em lock up
            p Tablas que se conectan entre sí y alimentan a la tabla 
              em fact
              |. Adicionalmente, guardan un conjunto de datos que están relacionados a una dimensión particular, no contienen hechos, en su lugar los datos son los elementos que determinan la estructura de las dimensiones. Representan todo lo que se quiere almacenar respecto a un tema concreto y pueden ser generadas de forma automática, o creadas manualmente.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-9.svg', alt='Conjunto de datos')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Esquemas o estructuras DW
            p Son la colección de tablas en el DW, pueden ser de diferentes tipos, pero existen dos categorías básicas que son los esquemas de estrellas y los esquemas 
              em snowflake.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img1-10.svg', alt='Tipos de datos')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Esquema de estrella o 
              em star
            p Su nombre se debe al hecho que al visualizar su diagrama tiene forma de una estrella. Es una gran tabla central unida con puntos radiales desde el centro (una o varias tablas 
              em fact
              |) hacia las puntas (tablas 
              em lock up 
              |y tienen sólo conexión a la tabla 
              em fact
              |).
          .col-md-4
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 1. 
              br
              em Esquema estrella 
            figure
              img(src='@/assets/curso/temas/tema1/img1-11.svg', alt='Esquema estrella')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Esquema de copo de nieve o 
              em snowflake
            p Tiene una estructura muy similar a la anterior; la diferencia radica en que la estructura de las tablas 
              em lock up 
              |están normalizadas y se pueden ser generadas tablas adicionales, lo que finalmente forma una estructura parecida a un copo de nieve.
            p Este tipo de esquema cuenta con dos ventajas principales que son la reducción de la redundancia y el ahorro de espacio en el almacenamiento.
          .col-md-4
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 2. 
              br
              em Esquema copo de nieve
            figure
              img(src='@/assets/curso/temas/tema1/img1-12.svg', alt='Esquema copo de nieve')

    h3.mb-5(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |¿Qué es un análisis multidimensional?

    .row.justify-content-center.mb-5
      .col-lg-4.mb-sm-4
        figure
          img(src='@/assets/curso/temas/tema1/img1-13.svg', alt='Análisis multidimensional')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris1")
          .row(titulo="En el mundo de la inteligencia empresarial (BI)")
            .col-md-12.mb-4.mb-md-0
              p Algunas de las herramientas más utilizadas en las organizaciones son las aplicaciones OLAP. Estas han sido creadas en función al modelado multidimensional, permitiendo así procesar un gran volumen de datos, en campos bien definidos y con un acceso inmediato a consultas para un posterior análisis. De esta forma, proporcionan un sistema confiable de procesos de datos que serán utilizados posteriormente para mejorar las operaciones productivas, tomar decisiones inteligentes y optimizar la competitividad.
          .row(titulo="El análisis multidimensional")
            .col-md-12.mb-4.mb-md-0
              p Es considerado como el proceso que divide los grupos de datos en dos categorías básicas: la dimensión de los datos y la medición de datos. Es muy importante para las organizaciones, porque es la base para la toma de decisiones y, por tanto, les permite una mayor ventaja sobre su competencia.
          .row(titulo="EL análisis multidimensional (OLAP)")
            .col-md-12.mb-4.mb-md-0
              p Es la manera intuitiva y lógica de estudiar los datos de la organización ordenados en dimensiones; es decir, las variables que permiten la medición jerarquizada y que forman el cubo multidimensional.
          .row(titulo="La información")
            .col-md-12.mb-4.mb-md-0
              p Es representada como matrices multidimensionales (cubo), también llamados cuadros de múltiples entradas. Su estructura básica es un hipercubo compuesto por dos elementos: el primero es un conjunto de dimensiones (nombre con un dominio asociado) y el segundo es una función que puede mapear las coordenadas formadas por valores de cada una de las dimensiones en tuplas o 
                em booleanos.

    h3.mb-5(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |Operaciones OLAP

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img1-14.svg', alt='Cubo')
      .col-lg-8(data-aos="fade-left")
        p OLAP comprende varias operaciones analíticas básicas como es el “<i>drill-down</i>” y el “<i>slicing and dicing</i>”. Las operaciones indican las diferentes formas en que se pueden ver las bases de datos; son los distintos puntos de vista, como, por ejemplo, las ventas de un tipo de producto en determinado país o región, los canales de ventas, o el tipo de producto.

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul1")
      .row.justify-content-center(titulo="<em>Drill down (roll down)</em>")
        .col-md-5.mb-4.mb-md-0
          p Permite ir desde un alto nivel de resumen, a un bajo nivel o de datos detallados. Es la separación y la especialización. Puede moverse en la dirección contraria y presentar automáticamente, datos detallados que abarcan datos consolidados. Por ejemplo, podría accederse fácilmente a las ventas por productos individuales o sus representantes, los cuales conforman las negociaciones totales de una región.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img1-15.svg', alt='Drill down')
      .row.justify-content-center(titulo="<em>Roll up (drill-up)</em>")
        .col-md-5.mb-4.mb-md-0
          p Es el manejo de datos de manera resumida. Permite escalar la jerarquía o reducir dimensiones. Generalización y agregación.
        .col-md-6
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 3. 
            br
            em Roll up
          figure
            img(src='@/assets/curso/temas/tema1/img1-16.svg', alt='Roll up')
      .row.justify-content-center(titulo="<em>Slicing</em> o <em>slice</em>")
        .col-md-5.mb-4.mb-md-0
          p Permite hacer corte o proyección. Es la selección de un grupo de celdas de la matriz multidimensional especificando un valor para una o más dimensiones.
        .col-md-6
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 4. 
            br
            em Slice
          figure
            img(src='@/assets/curso/temas/tema1/img1-17.svg', alt='Slice')
      .row.justify-content-center(titulo="<em>Pivot</em> (transpone)")
        .col-md-5.mb-4.mb-md-0
          p Permite girar el cubo. Rotarlo en algún sentido.
        .col-md-6
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 5. 
            br
            em Pivot
          figure
            img(src='@/assets/curso/temas/tema1/img1-18.svg', alt='Pivot')

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 ¿Por qué se debe utilizar?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-sm-2
        figure
          img(src='@/assets/curso/temas/tema1/img1-19.svg', alt='Configuración')
      .col-lg-11.col-sm-10
        p.mb-0 La llegada de la "cuarta revolución industrial" o también llamada "industria 4.0", expresa que las fábricas u organizaciones inteligentes con tecnologías automatizadas deben agilizar los procesos utilizando el 
          em big data 
          |u otros avances digitales. Esta revolución, como las anteriores, cambia el mundo de las organizaciones y permite que las empresas que puedan entenderla generen más valor añadido y las que no, pueden verse destinadas a desaparecer, por no haber conseguido tanta eficiencia en el manejo de los recursos.

    p.mb-5 El modelado multidimensional se rige por:

    .tarjeta.tarjeta--azul3.p-4(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            figure.mb-5
              img(src='@/assets/curso/temas/tema1/img1-20.svg', alt='Modelo multidimensional')
            ul.lista-ul--color
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Volumen de los datos, (recopilación) debe ser capaz de analizar grandes volúmenes, para que la cantidad no sea un obstáculo, sino una ventaja.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Variedad en el tipo de datos, conseguir que los datos pasen a ser datos estructurados para decidir cuáles pueden ser más útiles.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Velocidad del análisis, en los tiempos por gestión.
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            figure.mb-5
              img(src='@/assets/curso/temas/tema1/img1-21.png', alt='Base de datos multidimensional')
            p Las bases de datos multidimensionales se caracterizan por ser más versátiles que las relacionales a la hora de realizar consultas. Entre sus ventajas:
            ul.lista-ul--color
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Gran rendimiento y la posibilidad de establecer relaciones complejas.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Capacidad de trabajar con datos con un alto nivel de abstracción.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Crean la posibilidad de numerosas relaciones entre diversos hechos y dimensiones.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Poseen gran velocidad de procesamiento de información y restitución de los datos.
              li
                i.fas.fa-check.fa-xs
                p.mb-0 Consiguen trabajar con datos previos almacenados en bases de datos relacionales simples.
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            figure.mb-5
              img(src='@/assets/curso/temas/tema1/img1-22.png', alt='Modelado multidimensional')
            p Todas estas ventajas son importantes; sin embargo, la que más se resalta es la posibilidad de analizar los datos en tiempo real y obtener información muy útil.
            p Las aplicaciones del modelado multidimensional y las bases en general van evolucionando según las necesidades de las organizaciones, pero es importante también, poner en práctica la creatividad del usuario que define las estrategias.
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            figure.mb-5
              img(src='@/assets/curso/temas/tema1/img1-23.png', alt='Modelado multidimensional')
            p Actualmente, el modelado multidimensional, tiene muchas aplicaciones y conocerlo cada día más, ayuda a definirlo mejor y saber cuáles son sus variables, como, por ejemplo, el tiempo, entre ellas. Al momento de trabajar, se recogen y analizan grandes cantidades de datos, para tener mejor y mucha más información, en especial, sobre la audiencia, los consumidores o el público objetivo; pero no se pueden aplicar de una forma general y obtener conclusiones, sin tener en cuenta “el tiempo". Este gran volumen de información recogida, se marca en un punto determinado del tiempo, por lo que, con los datos establecidos en ese momento puntual y un muy buen análisis, se logran entender el pasado, el presente, o una proyección del futuro. 
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            figure.mb-5
              img(src='@/assets/curso/temas/tema1/img1-24.svg', alt='Modelo multidimensional')
            p El tiempo permite recoger y analizar cada vez mayor cantidad de datos en tiempo real y, también, activar procesos de mejora antes de su implementación en tiempo real, es decir, se pueden ver las consecuencias de las decisiones o si funciona o no una estrategia. Finalmente, se logra una predicción "del futuro" o tomar una previsión un poco certera sobre lo que puede ocurrir. Como en todo proceso de análisis de datos, los datos históricos ayudan a entender lo que pasará en el futuro.
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            figure.mb-5
              img(src='@/assets/curso/temas/tema1/img1-25.svg', alt='Modelo multidimensional')
            p Se debe pensar en qué se quiere saber sobre la organización del pasado, el presente y el futuro, usando el modelado multidimensional y el cómo ayudará toda esa información.

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3  Aplicación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p La definición para la aplicación se debe realizar desde tres puntos de vista: la arquitectura de la organización, el modelo de madurez y el nivel de gestión. Uniendo estos tres aspectos se logra conocer el impacto que causan los cambios dentro de las organizaciones para tomar acciones correctivas coherentes.
        p Para la realización de proyectos de modelado multidimensional en bodegas de datos es de gran importancia tener la información necesaria que permita soportar las decisiones en las organizaciones. A la hora de escoger cuáles serán los pasos para la aplicación de un modelado multidimensional, se deben tener en cuenta las siguientes recomendaciones para su implementación.
      .col-lg-5.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema1/img1-26.png', alt='Persona con computador portátil')

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-11.col-sm-8
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img1-27.svg', alt='Proyectos de modelado multidimensional')
          .tarjeta.color-acento-contenido.p-3(x="8%" y="86%" numero="")
            p.text-center Las dimensiones del DDW que sean acordes a las bases de datos, la información que se tiene y las preguntas que se quieren responder.
          .tarjeta.color-acento-contenido.p-3(x="27%" y="86%" numero="")
            p.text-center Decidir el grado de la tabla 
              em Fact 
              |en cada proceso de la organización. Ejemplo: Tipo de mercado, tipo de producto y el tiempo.
          .tarjeta.color-acento-contenido.p-3(x="45%" y="86%" numero="")
            p.text-center Seleccionar las dimensiones a través del grano como el tiempo, el mercado, el cliente o tipo de producto.
          .tarjeta.color-acento-contenido.p-3(x="64%" y="86%" numero="")
            p.text-center Un grano bien seleccionado determina la dimensionalidad primaria de la tabla 
              em Fact.
          .tarjeta.color-acento-contenido.p-3(x="83%" y="86%" numero="")
            p.text-center Elegir las mediciones del negocio para la tabla 
              em Fact
              |. Se deben establecer los 
              em items 
              |que quedarán determinados por la clave compuesta de la tabla 
              em Fact.
    p.mb-5 A continuación, en este video, conoceremos las estrategias de innovación digital para incorporar bodegas de datos en organizaciones: 
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="fade-right") En la aplicación de bases de datos, el análisis de todos los datos permite que una organización mejore, conociendo lo que ha ocurrido, a un nivel de detalle que no se escapa a simple vista.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-5.mb-sm-4
        figure
          img(src='@/assets/curso/temas/tema1/img1-28.png', alt='Manos en computador portátil')
      .col-lg-7
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="La aplicación de la tecnología bodegas de datos") Depende, siempre, de la situación en la que se encuentra la empresa y los recursos de los que dispone, tanto económicos como humanos. Aun así, todas las empresas pueden empezar a emplear estrategias relacionadas con el análisis de datos, que más adelante pueden ser escalables a otros volúmenes.
          p(numero="2" titulo="<em>Data Warehouse</em>") Las grandes empresas necesitan hacer un manejo cada vez más ágil de la información, para mantenerse competitivas en la industria. los data <i>warehouse</i>, sirven para predecir la cantidad de producto que se venderá a un determinado precio y, por consiguiente, producir la cantidad adecuada para una entrega "justo a tiempo". asimismo, la requerida para satisfacer la demanda del producto por las grandes cadenas minoristas, garantizando la entrega de inmensas cantidades "en consignación", que no son pagadas hasta que sean vendidas al consumidor final.
          p(numero="3" titulo="Ejemplo de <em>Data Warehouse</em>") Un ejemplo de empresa que usa bodegas de datos es 
            em Whirlpool
            |. Esta fábrica de electrodomésticos ubicada en Michigan, aplica su 
            em data warehouse
            |:
            br
            br
            |Para hacer un seguimiento directo de sus casi 15 millones de clientes y de sus más de 20 millones de aparatos instalados. Las mayores aplicaciones del sistema son para marketing, ventas, mantenimiento, garantía y diseño de productos. Permite mantener stock de partes más ajustados y mejorar las condiciones de negociación con los proveedores de las mismas. Si, por ejemplo, un determinado motor se identifica como poseedor de una tasa de falla superior, Whirlpool puede utilizar la información para hacer renegociaciones de garantía con el proveedor. (XDOCS, s.f., p.2).
          p(numero="4" titulo="Otros ejemplos de <em>Data Warehouse</em>") Son las empresas de carga y pasajeros que también utilizan 
            em data warehouses 
            |para almacenar y acceder a gran cantidad de datos de sus operaciones y sistemas de reservas tales como artículos, tiempos de entrega, equipamiento, capacidades, costos, ventas, márgenes, etc. Para identificar y programar actividades de 
            em marketing
            |, planificación de capacidad, monitoreo de utilidades, proyecciones y análisis de ventas y costos, programas de calidad y servicio a sus clientes.
          p(numero="5" titulo="Empresas que usan <em>Data Warehouse</em>") En las grandes empresas que aplican 
            em data warehouses 
            |se encuentran: 
            em Amazon, Coca Cola, Google, Nike, Facebook, Procter & Gamble, Walmart, Tesla, Microsoft 
            |y 
            em Walt Disney.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
