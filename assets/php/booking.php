<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="images/LOGO TITAN TRAVEL.PNG" type="image/png">
  <title>Titan Villa</title>
  <link rel="stylesheet" 
  
  
  href="style.css">
</head>
<body>
  
</body>
</html>


<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbanme = "booking";
$conn = new mysqli($servername,$username,$password,$dbanme);

if($conn->connect_error){
  die("Connection Failed:" .$conn->connect_error);

}

//Handle form submission
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $rooms = $_POST["rooms"];
  $wa = $_POST['wa'];
  $checkin = $_POST['checkin'];
  $checkout = $_POST['checkout'];
 


  //prepare and execute the database insertion 
  $sql = "INSERT INTO `villabooking`(`rooms`, `wa`, `checkin`, `checkout`) VALUES ('$rooms','$wa','$checkin','$checkout')";

  if($conn->query($sql) == TRUE){
    echo " <p>Booking Successfully. We will contact you within 12 hours.</p> ";

  }else{
    echo "<p>Error: " . $sql . "<br>" . $conn->error . "</p>";
  }
   

}
$conn->close();
?>