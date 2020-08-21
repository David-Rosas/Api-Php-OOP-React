<?php

require_once 'DB.php';

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of modelProduct
 *
 * @author deivix
 */
class ModelProduct extends DB {

    protected function consultAll() {
        $sql = $this->connect()->prepare("SELECT * FROM product");
        $sql->execute();
        $sql->setFetchMode(PDO::FETCH_ASSOC);
        return json_encode($sql->fetchAll());
    }

    protected function consultById(int $id) {
        $sql = $this->connect()->prepare("SELECT * FROM product where id=:id");
        $sql->bindValue(':id', $_GET['id']);
        $sql->execute();
        return json_encode($sql->fetch(PDO::FETCH_ASSOC));
    }

    protected function add($request) {
        $sql = "INSERT INTO product
          (nombre_producto, referencia, precio, peso, categoria, stock, fecha_venta)
          VALUES
          (:nombre_producto, :referencia, :precio, :peso, :categoria, :stock, :fecha_venta)";
        $statement = $this->connect()->prepare($sql);
        parent::bindAllValues($statement, $request);
        $statement->execute();
        $item = $this->connect()->lastInsertId();
        return $item;
    }

    protected function update($request) {

        $productId = $request['id'];
        $fields = parent::getParams($request);
        $sql = "UPDATE product SET $fields WHERE id='$productId'";
        $statement = $this->connect()->prepare($sql);
        parent::bindAllValues($statement, $request);
        $statement->execute();

        return true;
    }

    protected function delete($request) {
       // print_r($request['id']);
        $statement = $this->connect()->prepare("DELETE FROM product where id=:id");
        $statement->bindValue(':id', $request['id']);
        $statement->execute();
        
        return true;
        
    }

}
