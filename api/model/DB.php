<?php

class DB {
    
 private $host = 'localhost';
 private $username = 'root' ;
 private $password = 'Vale-2013';
 private $db = 'product';
 
 function connect() {
    try {
        $conn = new PDO("mysql:host={$this->host};dbname={$this->db}", $this->username, $this->password);

        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        return $conn;
    } catch (PDOException $exception) {
        exit($exception->getMessage());
    }
}

//Obtener parametros para updates
function getParams($input) {
    $filterParams = [];
    foreach ($input as $param => $value) {
        $filterParams[] = "$param=:$param";
    }
    return implode(", ", $filterParams);
}

//Asociar todos los parametros a un sql
function bindAllValues($statement, $params) {
    foreach ($params as $param => $value) {
        $statement->bindValue(':' . $param, $value);
    }
    return $statement;
}
 
}

?>
