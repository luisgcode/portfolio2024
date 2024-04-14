<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if all fields are present
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
        // Get form data
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        // Email address to send the message to
        $to = "contact@luisgcode.com"; // Change this to your email address

        // Email subject
        $subject = "New contact message from $name";

        // Email body
        $body = "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Message:\n$message";

        // Email headers
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Try to send the email
        if (mail($to, $subject, $body, $headers)) {
            // Redirect to home page after successful form submission
            header("Location: https://luisgcode.com/");
            exit; // Make sure to exit after redirection
        } else {
            echo "error"; // Send "error" if there's a sending error
        }
    } else {
        echo "incomplete"; // Send "incomplete" if form fields are incomplete
    }
} else {
    echo "error"; // Send "error" for other form processing errors
}
?>
