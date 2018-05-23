const config = {
    apiKey: "AIzaSyDv3IHhJ-uu2tqc0_50RbYAQ3JwOxTjsFg",
    authDomain: "hschelper-801df.firebaseapp.com",
    databaseURL: "https://hschelper-801df.firebaseio.com",
    projectId: "hschelper-801df",
    storageBucket: "hschelper-801df.appspot.com",
    messagingSenderId: "950277909940"
}

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()

  export default base