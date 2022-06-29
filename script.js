function myFunction() {
    var nome = prompt ( "Digite seu nome: " );
    console . log ( "Nome digitado:" + nome ) ;

    var sobrenome = prompt ( "Digite seu sobrenome:" ) ;
    console . log ( "Sobrenome digitado:" + sobrenome ) ;

    var idade = prompt ( "Digite sua idade: " ) ;
    console . log ( "Idade digitado:" + idade ) ;

    var nacionalidade = prompt ( "Digite sua nacionalidade: " ) ;
    console . log ( "Nacionalidade digitado:" + nacionalidade ) ;

    var número = prompt ( "Digite seu número : " ) ;
    console . log ( "Número digitado:" + número ) ;

    var profissão = prompt ( "Digite sua profissão: " ) ;
    console . log ( "Profissão digitado:" + profissão ) ;

    var sexo = prompt ( "Digite seu sexo: " ) ;
    console . log ( " Sexo digitado:" + sexo ) ;

    var endereco = prompt ( "Digite seu endereco:" ) ;
    console . log ( "Endereco digitado:" + endereco ) ;

    console . table ( [ nome, sobrenome, idade, nacionalidade, número, profissão, sexo,  endereco ] ) ;
    
}