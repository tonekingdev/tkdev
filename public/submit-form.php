<?php
// Ensure no output before this point
ob_start();

header('Content-Type: application/json');

function logMessage($message) {
    $logFile = __DIR__ . '/contact-form.log';
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}

logMessage('Script started. Request method: ' . $_SERVER['REQUEST_METHOD']);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = $_POST;
    logMessage('Received POST data: ' . json_encode($input));

    // Basic validation
    if (empty($input['name']) || empty($input['email']) || empty($input['subject']) || empty($input['message'])) {
        echo json_encode(["error" => "Please fill all required fields"]);
        exit;
    }

    $to = "info@tonekingdev.com";
    $subject = "New Contact Form Submission: " . $input['subject'];
    $message = "Name: " . $input['name'] . "\n";
    $message .= "Email: " . $input['email'] . "\n";
    $message .= "Subject: " . $input['subject'] . "\n";
    $message .= "Message: " . $input['message'];
    $headers = "From: " . $input['email'];

    if (mail($to, $subject, $message, $headers)) {
        logMessage('Email sent successfully');
        echo json_encode(["message" => "Form submitted successfully"]);
    } else {
        logMessage('Failed to send email');
        echo json_encode(["error" => "Failed to send email"]);
    }
} else {
    echo json_encode(["error" => "Invalid request method"]);
}

// Ensure no output after this point
ob_end_flush();