<template>

    <div class="jumbotron">
      <br>
      <h3>FormularioGastos</h3>
      <section class="src-components-formularioVue">

      <form novalidate autocomplete="off" @submit.prevent="enviar()">

          <!-- Nombre -->
          <div class="form-group">
                <label for="nombre">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    class="form-control"
                    v-model="$v.f.nombre.$model"
                >
        
                <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
                    <div v-else-if="$v.f.nombre.minLength.$invalid">Este campo debe tener al menos 5 caracteres y no superar los 15</div>
                </div>
          </div>
          <!-- Descripcion -->
          <div class="form-group">
                <label for="descripcion">descripcion</label>
                <input 
                    type="text"
                    id="descripcion"
                    class="form-control"
                    v-model="$v.f.descripcion.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.descripcion.$error && $v.f.descripcion.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.descripcion.required.$invalid">Este campo es requerido</div>
                </div>
          </div>
          
          <!-- Gastos -->
          <div class="form-group">
                <label for="number">gastos</label>
                <input 
                    type="number"
                    id="gastos"
                    class="form-control"
                    v-model.number="$v.f.gastos.$model"
                >
                <!-- CARTELES DE VALIDACIÓN -->
                <div v-if="$v.f.gastos.$error && $v.f.gastos.$dirty" class="alert alert-danger mt-1">
                    <div v-if="$v.f.gastos.required.$invalid">Este campo es requerido</div>
                </div>
          </div>
          <!--Send Button-->
          
          <div class="form-group">
                <input 
                    type="submit"
                    :disabled="$v.$invalid"
                    class="btn btn-success mt-4"
                    value="Enviar"
                >
          </div>
      </form>

  </section>
    </div>

</template>

<script>
import { required, minLength, maxLength } from '@vuelidate/validators'
  export default  {
    name: 'src-components-formulario-gastos',
    props: [],
    mounted () {
       this.getDatosFormAxios()
    },
    data () {
      return {
          f: this.resetForm(),
          url : 'https://5f99cc6450d84900163b9199.mockapi.io/dataGastos'
      }
    },
    validations: {
      f: {
        nombre: { 
          required,
          minLength: minLength(5),
          maxLength: maxLength(15)
        },
        descripcion: { 
          required,
        },
        gastos: {
          required,
        }
      }
    },
    methods: {

      sendDatosFormAxios(datos) {
            this.axios.post(this.url, datos, {'content-type': 'application/json'})
            .then(res => console.log(res.data))
            .catch(error => console.log('HTTP POST ERROR', error))
        },

        getDatosFormAxios() {
            this.axios(this.url)
            .then(res => console.log(res.data))
            .catch(error => console.log('HTTP GET ERROR', error))
        },

        enviar() {
            this.$v.$touch()
            if (!this.$v.$invalid){
            let form = this.f
            console.log(form)
            this.sendDatosFormAxios(form)
            this.f = this.resetForm()
            this.$v.$reset()
            }
        },
        
        /* valor inicial de los campos de datos del formularioVue */
        resetForm() {
            return {
               nombre: '',
               descripcion : '',
               gastos: ''
            }
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario-gastos {

  }
  .jumbotron {
    background-color: blueviolet;
    margin-top: 10px;
  }
</style>
