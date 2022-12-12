<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Desarrollados los conceptos sobre modelado multidimensional como técnica de diseño de bases de datos que responde a las necesidades analíticas que impone la tecnología 
      em data warehousing
      |; cómo lograr un diseño más cercano a la visión de la organización o del usuario final en dependencia de los datos que se necesitan modelar; la selección del esquema multidimensional más adecuado y el por qué son empleadas actualmente en la analítica 
      em online 
      |con las diferentes opciones de arquitectura que se podrían abordar al momento de definir la creación.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5.col-sm-9
        figure
          img(src="@/assets/curso/temas/sintesis1.svg", alt="Diseño físico y lógico")

    .row.justify-content-center
      .col-lg-12.col-sm-9
        figure.mb-5
          img(src="@/assets/curso/temas/sintesis2.svg", alt="Modelado multidimensional")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis_CF6.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
