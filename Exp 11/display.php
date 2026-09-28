<?php

include "db.php";

$sql = "SELECT * FROM users";

$result = $conn->query($sql);

echo "<h2>User Information</h2>";

echo "<table border='1' cellpadding='10'>";
echo "<tr>";
echo "<th>ID</th>";
echo "<th>Name</th>";
echo "<th>Email</th>";
echo "<th>Mobile</th>";
echo "</tr>";

while ($row = $result->fetch_assoc()) {

    echo "<tr>";
    echo "<td>" . $row["id"] . "</td>";
    echo "<td>" . $row["name"] . "</td>";
    echo "<td>" . $row["email"] . "</td>";
    echo "<td>" . $row["mobile"] . "</td>";
    echo "</tr>";
}

echo "</table>";

$conn->close();

?>