<template>
  <div id="app">
    <Header />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- {{msg}} -->
    <!-- <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" /> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>


// import HelloWorld from './components/HelloWorld.vue'
// import Header from "./components/layout/Header";
// import Todos from "./components/Todos";
// import AddTodo from "./components/AddTodo";
// import axios from "axios";

// export default {
//   name: "app",
//   components: {
//     // HelloWorld
//     Header,
//     Todos,
//     AddTodo
//   },
//   data() {
//     return {
//       // msg: "Hello"
//       todos: [
//         // {
//         //   id: 1,
//         //   title: "Todo one",
//         //   completed: false
//         // },
//         // {
//         //   id: 2,
//         //   title: "Todos two",
//         //   completed: true
//         // },
//         // {
//         //   id: 3,
//         //   title: "Todos three",
//         //   completed: false
//         // }
//       ]
//     };
//   },
//   methods: {
//     deleteTodo(id) {
//       axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
//       // .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)));
//       // .catch(err => console.log(err));

//       this.todos = this.todos.filter(todo => todo.id !== id);
//     },
//     addTodo(newTodo) {
//       const { title, completed } = newTodo;
//       axios
//         .post("https://jsonplaceholder.typicode.com/todos", {
//           title,
//           completed
//         })
//         .then(res => (this.todos = [...this.todos, res.data]));
//       // .catch(err => console.log(err))

//       // this.todos = [...this.todos, newTodo];
//     }
//   },
//   created() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
//       .then(res => (this.todos = res.data));
//     // .catch(err => console.log(err));
//   }
// };


<script>
import Header from './components/layout/Header'
export default {
  name:'app',
  components:{
    Header
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
