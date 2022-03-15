var firebaseConfig = {
    apiKey: "AIzaSyC9by9K-oXV0m0AYv1diY31G7l-0kbjY6w",
    authDomain: "kwitter-70695.firebaseapp.com",
    databaseURL: "https://kwitter-70695-default-rtdb.firebaseio.com",
    projectId: "kwitter-70695",
    storageBucket: "kwitter-70695.appspot.com",
    messagingSenderId: "457980929871",
    appId: "1:457980929871:web:a2e06cbce72947f644c73a",
    measurementId: "G-XRS6VKDTS5"
  };

  function send() {

    msg = document.getElementById("msg").value = "";
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })

    document.getElementById("").value = "";
  }

  function logout() {

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  }
  