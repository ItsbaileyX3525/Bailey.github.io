<?php

// Replace these with your own values
$repo_owner = 'your_github_username';
$repo_name = 'your_repository_name';
$file_path = 'path_to_your_file_on_server';
$file_content = file_get_contents($file_path);
$github_token = 'your_personal_access_token';

// API endpoint for creating a new file
$api_url = "https://api.github.com/repos/$repo_owner/$repo_name/contents/path/to/your/file";

// Create the data array to send to the API
$data = array(
    'message' => 'Add new file',
    'content' => base64_encode($file_content),
    'branch' => 'master'
);

// Create the headers array for authentication
$headers = array(
    'Authorization: token '.$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,
    'User-Agent: PHP'
);

// Create the curl request
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Send the request
$response = curl_exec($ch);

// Check for errors
if(curl_errno($ch)){
    echo 'Error: ' . curl_error($ch);
} else {
    echo 'File uploaded successfully!';
}

// Close the curl request
curl_close($ch);

?>
