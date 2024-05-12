<?php
if(isset($_POST['submit'])){
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $mobileNumber = $_POST['mobileNumber'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $to = "elif.ercel6513@gmail.com";
    $subject = "Contact Form Submission: $subject";
    $body = "Name: $fullName\nEmail: $email\nMobile Number: $mobileNumber\n\n$message";
    
    if(mail($to, $subject, $body)){
        echo "<script>alert('Message sent successfully.');</script>";
    } else{
        echo "<script>alert('Message could not be sent.');</script>";
    }
}
?>
