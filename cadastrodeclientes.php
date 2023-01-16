<?php

    include_once('conexao.php');

    $nome  = $_POST['nome'];
    $email = $_POST['email'];
    $dataNascimento  = $_POST['dataNascimento'];
    $senha = $_POST['senha'];

    $sql  = 'INSERT INTO DadosUsuarios(nome, email, dataNascimento, senha) VALUES(:nome,:email,:dataNascimento,:senha)';
    $stmt = $conn->prepare($sql);
    $stmt-> bindParam (':nome',$nome); 
    $stmt-> bindParam (':email',$email); 
    $stmt-> bindParam (':dataNascimento',$dataNascimento); 
    $stmt-> bindParam (':enha',$senha); 
    $stmt-> execute();

