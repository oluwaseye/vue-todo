<template>
<div id="app" v-cloak>
<div class="container">
  <div class="row  mb-4">
    <div class="col-md-12">
      <h2>Todos</h2>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col-md-12"> 
          <table>
            <tr v-for="todo in sortedToDos" v-bind:key="todo.index">
              <td><span :class="{todoDone:todo.done}">{{todo.text}}</span></td>
              <td>
                <button @click="toggleDone(todo)"  class="btn btn-secondary btn-sm">
                  <span v-if="todo.done">
                  Incomplete
                  </span>
                  <span v-else>
                  <i data-feather="circle"></i> Done
                  </span>
                </button>
              </td>
            </tr>
          </table> 
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">  
      <div class="form-group">
        <input v-model="todoText" class="form-control form-control-lg" id="todoText" aria-describedby="todoText" placeholder="What needs to be done ?"> 
      </div> 
      <div class="form-group">
        <button  @click="saveToDo"  class="btn btn-primary">Save ToDo</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
const feather = require("feather-icons");
feather.replace();
export default {
  name: 'Todo',
  data: () => ({
    todos:[],
    todoText:''
  }),
  computed: {
    sortedToDos() {
      let copy = this.todos.slice();
      return copy.sort((a,b) => {
        if(!a.done && b.done) return -1;
        if(a.done && b.done) return 0;
        if(a.done && !b.done) return 1;
      });
    }
  },
  methods: {
    saveToDo() {
      if(this.todoText === '') return;
      this.todos.unshift({
        text:this.todoText,
        done:false
      });
      this.todoText = '';
    },
    toggleDone(todo) {
      todo.done = !todo.done;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 [v-cloak] {display: none}

.todoDone {
  color:#c0c0c0;
  text-decoration: line-through;
}
</style>
