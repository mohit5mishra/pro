
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBNohRnZt3NL2PhB8Q6BqIgQhNs_Ruewic",
      authDomain: "kwitter-eb5ef.firebaseapp.com",
      databaseURL: "https://kwitter-eb5ef-default-rtdb.firebaseio.com",
      projectId: "kwitter-eb5ef",
      storageBucket: "kwitter-eb5ef.appspot.com",
      messagingSenderId: "843755112962",
      appId: "1:843755112962:web:bc660c06202626edad751b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");
     document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

     function addRoom(){
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
               purpose:"adding room name"
           });
           localStorage.setItem("room_name",room_name);
           window.location="kwitter_page.html";
     }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.logI("room name-"+Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}