<?php

    try {
        $conn = new PDO('MySQL:host=localhost;dbname=usuarios_pixelhouse','root','');
    } catch (PDOException $e ) {
        $e->getMessage();
    }