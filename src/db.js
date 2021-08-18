import firebase from "firebase/app";
import "firebase/database";





const config={
    apiKey: "AIzaSyAUuiWPgiGo3YxuKChJhkXuVq-gO0jf3Cg",
    authDomain: "realtime-chat-vue-f0a48.firebaseapp.com",
    databaseURL: "https://realtime-chat-vue-f0a48-default-rtdb.firebaseio.com",
    projectId: "realtime-chat-vue-f0a48",
    storageBucket: "realtime-chat-vue-f0a48.appspot.com",
    messagingSenderId: "472907927659",
    appId: "1:472907927659:web:319321b8cb7a6befcba12e"
}

const db = firebase.initializeApp(config);

export default db;
