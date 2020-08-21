<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 1000');
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    }
    exit(0);
}
 header("Content-Type: application/json");
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

include_once '../model/ModelProduct.php';

class ControllerProduct extends Modelproduct {

    public function requestView() {

     

        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
         
            $this->index($_GET['id'] ?? null );
        }

        // Crear un nuevo producto
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $this->store($_POST);
        }

        //Actualizar
        if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
            $this->update($_GET);
        }

        //Borrar
        if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
            $this->delete($_GET);
        }
        //En caso de que ninguna de las opciones anteriores se haya ejecutado
        header("HTTP/1.1 400 Bad Request");
    }

    protected function index($id) {

        if (isset($id)) {
            //Mostrar un product                
            $result = parent::consultById($id);
            header("HTTP/1.1 200 OK");
            echo $result;
            exit();
        } else {
            //Mostrar lista de product
            $result = parent::consultAll();
            header("HTTP/1.1 200 OK");
            echo $result;
            exit();
        }
    }

    protected function store($request) {
        print_r($request);
        header("HTTP/1.1 200 OK");
       // $itemId = parent::add($request);

     /*   if ($itemId) {
            $request['id'] = $itemId;
            header("HTTP/1.1 200 OK");
            echo json_encode($request['id']);
            exit();
        }*/
    }

    protected function update($request) {

        $result = parent::update($request);
        if ($result) {
            header("HTTP/1.1 200 OK");
        }

        exit();
    }

    protected function delete($request) {
        echo $request['id'];
        $result = $this->update($request);        
        if ($result) {
            header("HTTP/1.1 200 OK");
        }

        exit();
    }

}
