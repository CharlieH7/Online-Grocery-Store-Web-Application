<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $address = $_POST["address"];
  $suburb = $_POST["suburb"];
  $state = $_POST["state"];
  $country = $_POST["country"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];

  $to = "hope91824@gmail.com"; // Replace with your own email address
  $subject = "New Order";
  $message = "Name: " . $name . "\n" .
             "Address: " . $address . "\n" .
             "Suburb: " . $suburb . "\n" .
             "State: " . $state . "\n" .
             "Country: " . $country . "\n" .
             "Phone: " . $phone . "\n" .
             "Email: " . $email . "\n";

  // Send email
  mail($to, $subject, $message);

  // Redirect to thank you page
  header("Location: thankyou.html");
  exit;
}
?>
