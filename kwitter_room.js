var firebaseConfig = {
      apiKey: "AIzaSyBfDVXBByrRs8SJOIDfmilXt1jaxO86Co4",
      authDomain: "kwitter-8fbc6.firebaseapp.com",
      databaseURL: "https://kwitter-8fbc6-default-rtdb.firebaseio.com",
      projectId: "kwitter-8fbc6",
      storageBucket: "kwitter-8fbc6.appspot.com",
      messagingSenderId: "993615941877",
      appId: "1:993615941877:web:1df7d9b2590c631420f5bc",
      measurementId: "G-SZQE90V0XG"  }
    
  
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="welcome"+user_name+" " +"!";
function addRoom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"aadding room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room  Name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
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
      window.location="index.html";

}