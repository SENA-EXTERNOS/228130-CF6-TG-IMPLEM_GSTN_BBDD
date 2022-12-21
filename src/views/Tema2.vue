<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diseño Lógico y Físico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-sm-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img2-1.svg', alt='Almacén de datos')
      .col-lg-8(data-aos="fade-left")
        p Un almacén de datos es una herramienta comercial utilizada como una solución de TI que agrega datos de varias fuentes de entidades, archivos o sistemas comerciales, transforma los datos si es necesario y los consolida en un solo archivo. El objetivo de un almacén de datos es brindar a los usuarios la capacidad de analizar datos de una manera accesible e intuitiva para facilitar las decisiones comerciales, centralizar e interpretar los datos en beneficio del negocio. Un almacén de datos es una colección de datos extraídos y transformados que está físicamente separado de la fuente de datos.
        p El diseño lógico define la arquitectura de la red, mientras el diseño físico establece el detalle de los componentes y configuraciones.

    .tarjeta.tarjeta--azul4.p-4.mb-5
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center(titulo="Paso 1")
          .col-md-2.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img2-2.svg', alt='Persona con computador portátil y el mundo')
          .col-md-9
            h4 Diseño lógico
            p Se utiliza un modelo de datos lógicos para definir cómo se debe implementar un sistema, independientemente del sistema de gestión de bases de datos utilizado. Los arquitectos de datos y los analistas de negocios suelen ser los autores de modelos de datos lógicos. El objetivo del modelado de datos lógicos es crear mapas altamente técnicos de las estructuras y reglas de datos subyacentes debido a que los datos son estables a lo largo del tiempo, también lo es el modelo de datos lógicos. Esto conduce a una gran cantidad de reutilización de datos, al uso compartido de datos físicos y reduce el almacenamiento de datos innecesarios. Como resultado directo de la integración y aclaración de las reglas comerciales, los componentes del proceso de creación (diseño, codificación, prueba e implementación) se aceleran (TIBCO, s.f.).
        .row.justify-content-center(titulo="Paso 2")
          .col-md-2.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img2-3.svg', alt='Modelo de datos lógico')
          .col-md-9
            p Un modelo de datos lógico hace que sea más fácil y menos costoso detectar cambios, correcciones de errores o datos faltantes durante el ciclo de vida de desarrollo antes de la implementación. Las solicitudes de cambio del usuario se pueden mitigar siendo proactivo. Un modelo de datos lógico, en el que todos los procesos y reglas comerciales están conectados, se puede utilizar para el análisis de impacto. Los objetos del modelo de datos lógico contienen definiciones textuales en lenguaje empresarial, lo que facilita el mantenimiento y el acceso a la documentación del sistema (TIBCO, s.f.).
        .row.justify-content-center(titulo="Paso 3")
          .col-md-2.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img2-4.svg', alt='Diseño físico')
          .col-md-9
            h4 Diseño físico
            p En esta etapa se lleva el modelo lógico planteado a una base de datos, teniendo en cuenta las estrategias adecuadas para construir una bodega de datos, con las mejores prácticas de seguridad.
            p Al hacer un diseño físico, hay muchos aspectos que deben tenerse en cuenta y realizarse de la manera más eficiente posible. Determinar el tipo de base de datos que se está utilizando es una primera consideración, ya que cada una tiene sus propias características y el diseño físico debe estar orientado a producir un buen desempeño en el proceso. En última instancia, dados los futuros procesos de gestión del almacén de datos, el diseño físico inicial debe revisarse periódicamente para asegurar que se siguen satisfaciendo las necesidades del cliente.
        .row.justify-content-center(titulo="Paso 4")
          .col-md-2.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img2-5.svg', alt='Modelo físico')
          .col-md-9
            p Una vez que haya determinado qué hechos, dimensiones, métricas y atributos existen, también puede determinar qué claves externas deben incluirse en el modelo físico. En este paso, se debe considerar el tamaño adecuado de los atributos (como la longitud de la cadena). Es importante recordar que se debe crear la clave principal, la clave externa y los disparadores correctos (por ejemplo, para actualizar automáticamente la clave principal).

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Conceptos

    p.mb-5 A continuación, los conceptos que se abordan en el diseño.

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Bodega de datos" :icono="require('@/assets/curso/temas/tema2/img2-6.svg')")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            p También llamada 
              em data warehouse
              |, es un almacén de datos (
              em DW
              |), un sistema de almacenamiento digital que conecta y armoniza grandes cantidades de datos, de diferentes fuentes con el propósito de alimentar 
              em business intelligence (BI)
              |, informes y analíticas, dar soporte a los requisitos regulatorios de manera que las empresas puedan convertir sus datos en información estratégica y tomar decisiones inteligentes basadas en datos. La bodega de datos almacena datos actuales e históricos en un solo lugar y actúan como la única fuente de verdad para una organización.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-7.png', alt='Estante de servidores')
      .py-4.py-md-5(titulo="Base de datos multidimensional" :icono="require('@/assets/curso/temas/tema2/img2-6.svg')")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            p Esta es una matriz de dimensiones. Almacena y recupera eficientemente grandes cantidades de datos vinculados vistos y analizados desde múltiples ángulos. Ayuda a comprender mejor los datos y mejora el rendimiento de las consultas analíticas más complejas.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-8.svg', alt='Base de datos multidimensional')
      .py-4.py-md-5(titulo="OLAP (procesamiento analítico en línea)" :icono="require('@/assets/curso/temas/tema2/img2-6.svg')")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0
            p Se refiere a un método para organizar y consultar datos en una estructura multidimensional. A diferencia de los sistemas de datos relacionales, todas las consultas se pueden calcular previamente, lo que brinda a los usuarios comerciales una mayor agilidad y flexibilidad. La función principal de un sistema OLAP comienza con la unificación de una vista conceptual multidimensional. Esto permite el trabajo a partir de métricas comerciales y brinda a los usuarios sus propios esquemas de datos lógicos mientras mantiene una arquitectura de cliente/servidor de rendimiento consistente. Importante anotar que el rendimiento en la producción de informes no se degrada a medida que aumenta el número de dimensiones en el modelo. Estos también deben ser considerados. De igual manera, hay que tener en cuenta que la arquitectura cliente/servidor se basa en un sistema modular abierto que permite la interacción y la colaboración. Una definición de dimensión universal se refiere a las capacidades requeridas para que el sistema genere todo tipo de dimensiones y use características activas en múltiples dimensiones.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-9.svg', alt='Estante de servidores')

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2  Ubicación física

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-sm-4
        figure
          img(src='@/assets/curso/temas/tema2/img2-10.svg', alt='Estante de servidores')
      .col-lg-9
        p Un almacén de datos es un repositorio electrónico donde se centraliza toda la información de una empresa u organización. Puede almacenar datos históricos y de perfiles de usuarios, así como información reciente. Los datos en un almacén de datos deben almacenarse de forma segura, recuperarse y administrarse con facilidad y deben ser confiables. Las grandes organizaciones tienen estructuras organizativas internas complejas y diferentes datos que pueden residir en diferentes ubicaciones, diferentes sistemas operativos o diferentes esquemas. Por ejemplo, los datos de problemas de fabricación y los datos de quejas de los clientes pueden almacenarse en diferentes sistemas de bases de datos. Por otra parte, se pueden supervisar los datos de fuentes externas, como las listas de correo que se utilizan para publicitar los productos y los puntajes crediticios de los clientes proporcionados por las agencias de crédito para determinar la solvencia de los clientes.
        p.mb-0 Para fines educativos se retoma a una de las mejores empresas del mundo como base para darle claridad a este apartado, en este caso se destacará a 
          em Google 
          |por su increíble centro de datos global.

    .tarjeta.tarjeta--azul2.p-4.mb-5
      PasosB.color-primario
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p 
              em Google 
              |afirma que tiene centros de datos por todo el mundo para que sus productos funcionen de manera ininterrumpida. En la actualidad se presume que 
              em Google 
              |cuenta con una red de 36 centros de datos, 19 ubicados en Estados Unidos, 13 en Europa, 2 en China, 1 en Japón y 1 en Latinoamérica, específicamente en Brasil. La red de 
              em Google 
              |sigue ampliándose año tras año, en el 2006 invirtió 1.900 millones de dólares en la construcción de nuevos centros de datos, cifra que aumentó significativamente en 2007 llegando a 2.400 millones de dólares invertidos con el mismos fin; se debe tener en cuenta que ese gasto o esa inversión no queda en esa cifra debido a que esos centros de datos albergan en su interior miles de servidores y estos a su vez presentan consumo de energía bastante elevada; por lo que 
              em Google 
              |cuenta con un área de innovación que tiene como objetivo buscar la eficiencia en su proceso, es decir, reducir costos en cuanto al consumo, mantener un eficiente servicio y óptimas condiciones en sus centros de datos, enfocados en la energía renovable y sostenible (Abadía digital, 2009).
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-11.png', alt='Carretera')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p La energía eólica y solar están actualmente en auge en todo el mundo, pero los días soleados y las horas de brisa no siempre se alinean con la demanda de energía de una comunidad. Las baterías a gran escala en los centros de datos pueden abordar este problema acumulando energía renovable cuando es abundante y descargándola cuando se necesita. Las baterías también pueden ayudar a equilibrar otros tipos de variabilidad en las redes eléctricas, lo que permite operaciones más rentables y eficientes. 
              em Google 
              |en asociación con ELIA, el operador del sistema de transmisión local en Bélgica, adelantan un proyecto modelo de cómo los centros de datos pueden convertirse en anclas para las redes eléctricas libres de carbono. Cabe resaltar que 
              em Google 
              |fue la primera empresa importante en convertirse en carbono neutral en 2007 y fue la primera empresa importante en igualar el uso de energía con energía 100 % renovable en 2017. 
              em Google 
              |opera la nube global más limpia de la industria y es la empresa corporativa más grande del mundo como comprador de energía renovable (
              em Google
              |, s.f.).
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-12.png', alt='Molinos de viento')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p 
              em Google 
              |es una empresa con una gran visión; tanto así, que es la primera empresa en comprometerse a operar con energía libre de carbono las 24 horas del día, los 7 días de la semana, en todos sus centros de datos. Esto es mucho más desafiante que el enfoque que tenía de combinar el uso de energía tradicional con energía renovable y está trabajando para lograrlo para el año 2030. Gracias a las tendencias en tecnología y las políticas gubernamentales adecuadas, la promesa de energía limpia las 24 horas del día, los 7 días de la semana pronto estará al alcance de la mano (Revista Semana, 2020).
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-13.png', alt='Google')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Para cumplir la meta, 
              em Google 
              |invertirá en enfoques que le permitan obtener energía libre de carbono de manera confiable en todos los lugares, en todo momento del día. De igual forma, buscan soluciones y/o métodos para emparejar fuentes de energía eólica y solar, y aumentar el uso de almacenamiento de energía en baterías. Se enfoca en aplicar IA (inteligencia artificial) para optimizar su demanda y pronóstico de electricidad e, igualmente, afirma que todos estos esfuerzos pueden acelerar la disponibilidad de energía limpia en comunidades de todo el mundo (Ámbito, 14 de septiembre de 2020).
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-14.png', alt='Molinos de viento')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p En párrafos anteriores se describe la innovación y la sostenibilidad que caracteriza a 
              em Google 
              |y todos sus retos, no solo para tener centros de datos eficientes sino para la sostenibilidad y avance tecnológico a nivel mundial; en los próximos párrafos se sintetiza toda la tecnología y métodos de seguridad que tiene 
              em Google 
              |para sus centros de datos y toda su información.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-15.png', alt='Persona con tablet')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p 
              em Google 
              |se toma la seguridad de sus datos muy en serio, tanto así que garantiza la seguridad de todos los datos de los usuarios, mediante numerosas funciones de seguridad, creando servidores personalizados específicamente para sus centros de datos. El equipo de seguridad de la empresa trabaja las 24 horas del día en todo el mundo, lo que convierte a estas instalaciones en el lugar más seguro para almacenar datos, también cuenta con medidas de continuidad de la actividad empresarial y de recuperación tras fallos (
              em Google
              |, s.f.).
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-16.png', alt='Persona con tablet')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Por ejemplo, en caso de incendio u otra interrupción del servicio, los datos se transfieren automáticamente a otro centro de datos para que los usuarios puedan continuar trabajando sin interrupciones. Cuenta con generadores de respaldo de emergencia para mantener los centros de datos alimentados en caso de un corte de energía. Por último, 
              em Google 
              |posee centros de operaciones de seguridad regionales y locales que cubren todos los centros de datos, los cuales monitorean y procesan las alarmas de todas las instalaciones (
              em Google
              |, s.f.). 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-17.png', alt='Cable roto')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Asimismo, el equipo de seguridad realiza controles durante todo el año para garantizar que esté bien preparado para cualquier eventualidad y ejecuta un sólido programa de gestión de riesgos empresariales para evaluar y mitigar de manera proactiva los riesgos del centro de datos (
              em Google
              |, s.f.).
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img2-18.png', alt='Centro de datos')

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Índices

    p.mb-5(data-aos="fade-right") Los almacenes de datos se pueden consultar mediante herramientas de consulta y análisis, como cubos multidimensionales, informes o soluciones 
      em web.

    .row.justify-content-center.mb-4
      .col-lg-2.col-sm-2(data-aos="fade-down")
        h2 Índices

    .row.justify-content-center.mb-5
      .col-lg-12.col-sm-9
        figure.mb-5(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img2-19.svg', alt='Índices')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 
            b ¡Felicitaciones! 
            |En este momento, ha finalizado el proceso de aprendizaje con el cual ha aprendido sobre los conceptos de modelado multidimensional como técnica de diseño de bases de datos. A continuación, se encuentra la síntesis de los conocimientos desarrollados, la actividad didáctica, el material complementario y el glosario como refuerzo y profundización del conocimiento.

</template>

<script>
export default {
  name: 'Tema2',
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
