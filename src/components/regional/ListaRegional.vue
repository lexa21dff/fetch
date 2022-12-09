<template >
  <div class="table">
    <form @submit.prevent="submitForm">
      <h2>Editar</h2>
      <div class="form-group row">
        <input type="text" class=" form-control col-3 mx-2" placeholder="nombre" v-model="regional.nombre">
        <button @click="createRegional()"> submit</button>
      </div>
    </form>
    <thead>
      <th>regional</th>
      <th>aciones</th>
    </thead>
    <tbody>
      <tr v-for="regional in regionales " :key="regional.id" @dblclick="($data.regional = regional)">
        <td>{{ regional.nombre}}</td>
        <td> 
          <button @click="deleteRegional(regional.id)">eliminar</button>
        </td>
      </tr>
    </tbody>
  </div>
</template>



<script>
export default {
  name: 'listaRegionales',
  data (){
    return {
      regional:{},
      regionales: []
    }
  },
  async created(){
    await this.getRegional();
  },
  methods:{
    submitForm(){
      if(this.regional.id === undefined){
        this.createRegional();
      }else{
        this.editRegional();
      }
    },
    async getRegional(){
      var response = await fetch('http://127.0.0.1:8000/api/regional/');
      this.regionales = await response.json()
    },

    async createRegional(){
      await fetch('http://127.0.0.1:8000/api/regional/',{          
        method: 'post',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.regional)
      });
      await this.getRegional();
    },

    async editRegional(){
      await fetch(`http://127.0.0.1:8000/api/regional/${this.regional.id}/`,{          
        method: 'put',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.regional)
      });
      await this.getRegional();
      this.regional = {};
    },
    async deleteRegional(regional){
      await this.getRegional();

      await fetch(`http://127.0.0.1:8000/api/regional/${regional.id}/`,{          
        method: 'delete',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.regional)
      });
      await this.getRegional();

    }
  }
  
  
}
</script>