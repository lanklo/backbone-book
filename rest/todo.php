<?php
error_reporting(E_ALL);

// $db = 'todos';
// $user = 'root';
// $pass = 'simsim123';
// $host = "127.0.0.1";
// // $host = "localhost";

// try {
//     $dbh = new PDO('mysql:host=' . $host . ';dbname=' . $db, $user, $pass);
// } catch (PDOException $e) {
//     print "Error!: " . $e->getMessage() . "<br/>";
//     die();
// }


$db = 'todos';
$user = 'root';
$pass = 'simsim123';

// try {

// $dbh = new PDO('mysql:host=localhost;dbname=test', $user, $pass);

// die;
$dbh = mysql_connect('localhost', $user, $pass);

$dbhandle = mysql_connect('localhost', $user, $pass) or die("Unable to connect to MySQL");

$dbs = mysql_select_db($db, $dbh);

$result = mysql_query("SELECT * FROM `todos`");
//fetch tha data from the database
$data = [];

while ($row = mysql_fetch_array($result)) {
	$data[] = array('id' => $row['id'], 'title' => $row['title'], 'completed' => $row['completed']);
}

echo json_encode($data);
die;