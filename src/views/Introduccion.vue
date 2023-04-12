<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-a.bloque-texto-i.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.order-sm-first.order-lg-last(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/intro.svg', alt='Base de datos')
        .col-lg-8.order-sm-first.order-lg-last(data-aos="fade-left")
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4
              p.mb-0 Estimado aprendiz, reciba una grata bienvenida a este proceso de aprendizaje en el que se abordan los contenidos relacionados con el funcionamiento de las bases de datos multidimensionales. Específicamente, se describen los tipos de sistemas de almacenamiento, el concepto de modelado multidimensional de una bodega de datos, la importancia de su uso y cómo puede ser aplicado, según los requerimientos del cliente y las fuentes de dichos datos. Antes de empezar, se invita a ver el siguiente video para identificar el contexto de desarrollo de los contenidos. 
                b ¡Muchos éxitos!
    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Uq6WxfzaroM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
