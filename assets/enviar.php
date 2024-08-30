<?php

$nome = addslashes($_POST{'name;'});
$email = addslashes($_POST{'email'});
$celular = addslashes($_POST{'telefone'});
$mensagem = addslashes($_POST{'mensagem'});

$recebe = "douglas.arruda30@outlook.com";
$assunto = "Coleta e dados - Portfólio";

$corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone."\n"."Texto: ".$mensagem;

$cabeçario = "From: djdodo.psn@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

if(mail($recebe,$assunto,$corpo,$cabeçario)){
    echo("E-mail enviado com Sucesso!");
}else{
    echo("Houve um erro ao enviar o email!");
}


?>