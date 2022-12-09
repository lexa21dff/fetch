<template>
    <form action="">
        <div class="form-group row">
            <input type="text" class=" form-control col-3 mx-2" placeholder="nombre" v-model="regional.nombre">
            <button class="btn btn-success" @click="createRegional()"> submit</button>

        </div>
    </form>
</template>
<script>

export default {
  name: 'listaRegionales',
  data (){
    return {
      regional:{
        nombre:null
      }
    }
  },
  methods:{
    async createRegional(){
        var response = await fetch('http://127.0.0.1:8000/api/regional/',{
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.regional)
        });
        this.regional.push(await response.json());
    }
  }

  
}
</script>