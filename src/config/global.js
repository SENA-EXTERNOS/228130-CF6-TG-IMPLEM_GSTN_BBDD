export default {
  global: {
    componenteFormativo: 'Modelos y esquemas de bodega de datos',
    descripcionCurso:
      'Un modelado multidimensional está diseñado para crear aplicaciones OLAP, tecnología asociada al acceso y análisis de datos en línea. En este, las tablas se asemejan a un hipercubo o, si se utiliza OLAP, a un cubo. Son más versátiles que las bases de datos relacionales y procesan de manera más ágil los datos que existen en una base de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Modelado multidimensional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '¿Por qué se debe utilizar?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Aplicación',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño lógico y físico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ubicación física',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Índices',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Modelo multidimensional',
      referencia:
        'Muy tecnológicos. (18 de agosto de 2021). <em>Base de datos multidimensional.</em>',
      tipo: 'Web',
      link:
        'https://muytecnologicos.com/diccionario-tecnologico/base-de-datos-multidimensional',
    },
    {
      tema: 'Aplicación modelado multidimensional',
      referencia:
        'Evaluando <em>software</em>. (2 de junio de 2022). <em>Tratamiento de los datos: OLTP, OLAP, Data Warehouse.</em>',
      tipo: 'Web',
      link:
        'https://www.evaluandosoftware.com/tratamiento-los-datos-oltp-olap-data-warehouse/',
    },
    {
      tema: 'Concepto de modelado multidimensional',
      referencia:
        'Respuestas rápidas. (17 de febrero de 2022). <em>¿Qué ventajas y desventajas tiene el uso de base de datos multidimensional?</em>',
      tipo: 'Web',
      link:
        'https://respuestasrapidas.com.mx/que-ventajas-y-desventajas-tiene-el-uso-de-base-de-datos-multidimensionales/#Que_ventajas_y_desventajas_tiene_el_uso_de_base_de_datos_multidimensionales',
    },
    {
      tema: 'Bodega de datos, conceptos',
      referencia:
        'Mesa, F. Pérez, F. & Noguera, C. (2019). <em>Bodega de Datos para la empresa Adventure Works</em> [Trabajo de grado, Universidad Jorge Tadeo Lozano].',
      tipo: 'Trabajo de grado',
      link:
        'https://1library.co/document/zp0k6w4q-bodega-datos-para-la-empresa-adventure-works-cycles.html',
    },
    {
      tema: 'Bodega de datos, definiciones',
      referencia:
        'Roldán, D. (2015). <em>Diseño de una guía general para construir una bodega de datos del área de ventas de una empresa</em> [Monografía de diplomado, Universidad Libre]. Repositorio Universidad Libre.',
      tipo: 'Monografía',
      link:
        'https://repository.unilibre.edu.co/bitstream/handle/10901/11042/Monografia%20bodega%20datos.pdf?sequence=1',
    },
    {
      tema: 'OLAP',
      referencia:
        'Calle, D. (2009). <em>Manual para el diseño e implementación de bases de datos OLAP y su aplicación en inteligencia de negocios</em> [Trabajo de grado, UNIVERSIDAD EAFIT]. Repositorio Institucional Universidad EAFIT.',
      tipo: 'Trabajo de grado',
      link: 'https://core.ac.uk/download/47240196.pdf',
    },
    {
      tema: '<em>Data center</em>',
      referencia: '<em>Google. (s.f.). Centros de datos.</em>',
      tipo: 'Web',
      link: 'https://www.google.com/intl/es/about/datacenters/locations/',
    },
  ],
  glosario: [
    {
      termino: 'BI (<em>Business Inteligence</em>)',
      significado:
        'método que agrupa los datos de una empresa con el objetivo de ser analizados y transformarlos en información que se pueda utilizar para mejorar los procesos.',
    },
    {
      termino: 'Cubo',
      significado:
        'representación multidimensional de datos necesaria para las aplicaciones de procesamiento analítico en línea.',
    },
    {
      termino: '<em>Data mart</em>',
      significado:
        'subconjunto de datos orientado a un objeto. Su principal característica es su diseño clásico que facilita en gran medida su uso.',
    },
    {
      termino: '<em>Data mining</em>',
      significado: 'extracción de la información de grandes bases de datos.',
    },
    {
      termino: 'Dimensión',
      significado:
        'conjunto de entidades dentro de una base de datos que se usa para obtener información sobre los datos de hechos de uno o varios cubos.',
    },
    {
      termino: 'ETL',
      significado: 'extracción, transformación y carga de datos.',
    },
    {
      termino: 'Metadatos',
      significado:
        'datos que describen las características de los datos; datos descriptivos.',
    },
    {
      termino: 'Multidimensional',
      significado: 'implica varios aspectos.',
    },
    {
      termino: 'Origen de datos',
      significado:
        'acceso de un documento o información como una base de datos o un archivo XML y la información de conexión necesaria para acceder a los datos.',
    },
    {
      termino: '<em>Pivot</em>',
      significado:
        'herramienta que permite encontrar información de convocatorias para financiación externa de proyectos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abadía digital. (2009). <em>¿Dónde tiene situados Google sus data centers?</em> Ad.',
      link:
        'https://www.abadiadigital.com/donde-tiene-situados-google-sus-data-centers/',
    },
    {
      referencia:
        'Ámbito. (14 de septiembre de 2020). <em>Google anuncia que trabaja para operar con energía limpia en todo el mundo para 2030.</em> Ámbito.',
      link:
        'https://www.ambito.com/informacion-general/google/anuncia-que-trabaja-operar-energia-limpia-todo-el-mundo-2030-n5132706',
    },
    {
      referencia:
        'Amos, D., Bader, D., Jablonski, J. & Heisler, F.  (2021). <em>Python Basics: A Practical Introduction to Python 3.</em> Real Python.',
      link: '',
    },
    {
      referencia:
        'Conesa, J. & Curto, J. (2015). <em>¿Cómo crear un data warehouse?</em> UOC.',
      link: '',
    },
    {
      referencia:
        'Hammergren, T. & Simon, A. (2009). <em>Data warehousing for dummies.</em> Para Dummies.',
      link: '',
    },
    {
      referencia: '<em>Google. (s.f.). Volver al día de hoy. Google.</em>',
      link: 'https://sustainability.google/intl/es/carbon-free/#year-1998',
    },
    {
      referencia:
        '<em>Google. (s.f.). Diseñamos nuestros centros de datos con la seguridad en mente. Google.</em>',
      link:
        'https://www.google.com/intl/es-419/about/datacenters/data-security/',
    },
    {
      referencia:
        'Joyanes, L. (2020). <em>Fundamentos de programación.</em> McGraw-Hill.',
      link:
        'https://www.ingebook.com/ib/NPcd/IB_Escritorio_Visualizar?cod_primaria=1000193&libro=10211',
    },
    {
      referencia:
        'Lewis, R. (2017). <em>Tutorial fácil de seguir para aprender la programación de Python en menos de una semana. Full engineering book.</em>',
      link: '',
    },
    {
      referencia:
        'Revista Semana. (18 de septiembre de 2020). Google es la primera gran empresa en eliminar su huella de carbono neta. <em>Revista Semana.</em>',
      link:
        'https://www.semana.com/empresas/articulo/google-busca-mitigar-el-cambio-climatico-con-energias-limpias/300699/',
    },
    {
      referencia:
        'Rossum, G. (2017). <em>El tutorial de Python. Python Software Foundation.</em>',
      link: '',
    },
    {
      referencia: 'TIBCO. (s.f.). <em>¿Qué es un modelo de datos lógico?</em>',
      link:
        'https://www.tibco.com/es/reference-center/what-is-a-logical-data-model',
    },
    {
      referencia: 'XDOCS. (s.f.). <em>Empresas que usan data warehouse.</em>',
      link:
        'https://xdocs.tips/doc/empresas-que-usan-data-warehouse-joz5705pvwoz',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
