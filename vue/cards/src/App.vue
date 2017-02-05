<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Vue Cards App</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Add Card</h3>
        <div class="panel-body">
          <form id="form" class="form-inline" v-on:submit.prevent="addCard">
            <div class="form-group">
              <label for="cardTitle">Title:</label>
              <input type="text" id="cardTitle" class="form-control" v-model="newCard.title">
            </div>
            <div class="form-group">
              <label for="cardDescription">Description:</label>
              <input type="text" id="cardDescription" class="form-control" v-model="newCard.description">
            </div>
            <div class="form-group">
              <label for="cardUrl">Url:</label>
              <input type="text" id="cardUrl" class="form-control" v-model="newCard.url">
            </div>
            <input type="submit" class="btn btn-primary" value="Add Card">
          </form>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Cards List</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="card in cards">
              <td>
                <a v-bind:href="card.url">{{ card.title }}</a>
              </td>
              <td>
                {{ card.description }}
              </td>
              <th>
                <span class="glyphicon glyphicon-trash" v-on:click="removeCard(card)"></span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyAi9RLShkELeUBSX9GTTdxgLyGtp0p8zVw",
    authDomain: "vue-fire-card.firebaseapp.com",
    databaseURL: "https://vue-fire-card.firebaseio.com",
    storageBucket: "vue-fire-card.appspot.com",
    messagingSenderId: "304994613124"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let cardRef = db.ref('card');

export default {
  name: 'app',
  firebase: {
    cards: cardRef
  },
  data () {
    return {
      newCard: {
        title: '',
        description: '',
        url: ''
      }
    }
  },
  methods: {
    addCard: function () {
      cardRef.push(this.newCard);
      this.newCard.title = '';
      this.newCard.description = '';
      this.newCard.url = '';
    },
    removeCard: function (card) {
      cardRef.child(card['.key']).remove();
    }
  }
}
</script>
