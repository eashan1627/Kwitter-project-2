 //ADD YOUR FIREBASE LINKS HERE
 var firebaseConfig = {
      apiKey: "AIzaSyBI1bjk5utgXGKsQ3Blg-b5XBv5rFxcQMY",
      authDomain: "kwitter-sim.firebaseapp.com",
      databaseURL: "https://kwitter-sim-default-rtdb.firebaseio.com",
      projectId: "kwitter-sim",
      storageBucket: "kwitter-sim.appspot.com",
      messagingSenderId: "876046692462",
      appId: "1:876046692462:web:602dcd04e6ef438276b67f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();