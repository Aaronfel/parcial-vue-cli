<template>

   <div class="jumbotron">
      <br>
      <h3>Tablachoice</h3>
      <div class="jumbotron"> 
      <h1>Multiple Choice</h1>
      <hr>
      
      <div class="table-responsive">
        <table class="table">
          <tr class="bg-success text-white">
            <th>Pregunta</th>
            <th>Respuestas</th>
          </tr>
          <tr class="bg-secondary text-white" v-for="(preg, index) in preguntas" :key="index">
            <td>{{ preg.pregunta }}</td>
            <td>{{ preg.respuestas }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

  export default  {
    name: 'src-components-tabla-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: [
          {pregunta: 1, respuestas:['b','d']}
          ,{pregunta: 2, respuestas:['b']}
          ,{pregunta: 3, respuestas:['c']}
          ,{pregunta: 4, respuestas:['d']}
          ,{pregunta: 5, respuestas:['e']}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-tabla-choice {

  }
  .jumbotron {
    background-color: blue;
    margin-top: 10px;
  }
</style>
