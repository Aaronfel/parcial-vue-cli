<template>

   <div class="jumbotron">
      <br>
      <h3>Table</h3>
      <div class="table-responsive">
          <table class="table">
            <tr class="bg-info text-white">
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Importe</th>
              <th>Fecha</th>
              <th>Total</th>
            </tr>
            <tr
              class="bg-success text-white"
              v-for="(comprador, index) in compradores"
              :key="index"
            >
              <td>{{ comprador.nombre }}</td>
              <td>{{ comprador.descripcion }}</td>
              <td> $ {{ comprador.gastos }}</td>
              <td>{{comprador.fecha}}</td>
              
            </tr>
          </table>
      </div>
    </div>

</template>

<script>

  export default  {
    name: 'src-components-table',
    props: [],
    mounted () {
         this.getCompradoresAxios()
    },
    data () {
      return {
          compradores : [],
          total: ''
      }
    },
    methods: {
        getCompradoresAxios() {
        let url = 'https://5f99cc6450d84900163b9199.mockapi.io/dataGastos'

        this.axios(url)
        .then(res => {
          console.log(res.data)
          this.compradores = res.data
        })
        .catch(error => console.log('HTTP GET ERROR', error))
    },
    calculartotal() {
          this.usuarios.forEach(usuario => {
          this.total += Number.parseFloat(usuario.gastos)
        })
    }
  },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-table {

  }

  .jumbotron {
    background-color: crimson;
    margin-top: 10px;
  }
  h3 {
    color: black;
  }
</style>
