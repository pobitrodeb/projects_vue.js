<template>

<div class="m-2">
  <h3 class="text-primary">Calculator App With Vue.js</h3>
</div>

<div class="row">
  <div class="col-md-3"></div>
  <div class="col-md-6">
    <table class="table table-bordered">
  <thead >
    <tr class="bg-primary text-white py-3">
      <th colspan="4">
        {{  output || 0  }}
      </th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <th scope="col" v-on:click="clearFiled">C</th>
      <th scope="col" v-on:click="setNegativeOrPositive"><i class="fa-solid fa-plus"></i> / <i class="fa-solid fa-minus"></i></th>
      <th scope="col" v-on:click="calculatePercentage"><i class="fa-solid fa-percent"></i></th>
      <th scope="col"  class="bg-primary text-white" @click="proecessOutput('divide')"> <div class="btn "><i class="fa-solid fa-divide"></i></div> </th>
    </tr>

    <tr>
      <td v-on:click="getNumber('7')">7</td>
      <td v-on:click="getNumber('8')">8</td>
      <td v-on:click="getNumber('9')">9</td>
      <td class="bg-primary text-white" @click="proecessOutput('multiply')"><div class="btn"> <i class="fa-solid fa-x"></i> </div></td>
      
    </tr>

    <tr>
      <td v-on:click="getNumber('4')">4</td>
      <td v-on:click="getNumber('5')">5</td>
      <td v-on:click="getNumber('6')">6</td>
      <td class="bg-primary text-white" @click="proecessOutput('subtract')"> <div class="btn"><i class="fa-solid fa-minus"></i></div> </td>
    </tr>

    <tr>
      <td v-on:click="getNumber('1')">1</td>
      <td v-on:click="getNumber('2')">2</td>
      <td v-on:click="getNumber('3')">3</td>
      <td class="bg-primary text-white" @click="proecessOutput('add')"> <div class="btn"><i class="fa-solid fa-plus"></i></div> </td>
    </tr>

    <tr>
      <td colspan="2" v-on:click="getNumber('0')">0</td>
      <td v-on:click="getDot()"><i class="fa-solid fa-circle-dot"></i></td>
      <td class="bg-primary text-white" @click="result()"> <div class="btn">  <i class="fa-solid fa-equals"></i></div> </td>
    </tr>
  </tbody>
</table>
<h3 class="text-primary"> www.pobitrodeb.com </h3>
  </div>
  <div class="col-md-3"></div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }, 
  data(){
    return {
      output : '', 
      previousVlaue: null,
      operationFired: false,
    }
  }, 
  methods:{
    clearFiled(){
      this.output = '';
    }, 
    setNegativeOrPositive(){
        this.output = this.output[0] === '-' ? this.output.slice(1) : `-${this.output}`
    }, 
    calculatePercentage(){
        this.output = parseFloat(this.output)/100
    }, 
    getNumber(number){
      if(this.operationFired){
        this.output = '';
        this.operationFired = false
      }

      this.output = `${this.output}${number}`;
      // console.log(this.output);
    }, 
    getDot(){
      if(this.output.indexOf('.') === -1){
        this.output = this.output + '.';
      }
    },
    proecessOutput(string){

      if(string === 'add'){
        this.operation = (a, b) => {
          return parseFloat(a) + parseFloat(b) ; 
        }
      }else if(string == 'subtract'){
        this.operation = (a, b) => {
          return parseFloat(a) - parseFloat(b) ; 
        }
      }else if(string === 'multiply'){
        this.operation = (a, b) => {
          return parseFloat(a) * parseFloat(b) ; 
        }
      }else if(string == 'divide'){
        this.operation = (a, b) => {
          return parseFloat(a) / parseFloat(b) ; 
        }
      }
     
      this.previousVlaue = this.output;
      this.operationFired = true;
    },
    result(){
      this.output = `${this.operation(this.previousVlaue, this.output)}`;
      this.previousVlaue = null; 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
