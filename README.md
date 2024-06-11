# Playwrigth_Practice
Prática de automação de teste com playwright


Cenário e Caso  de testes escrito em Gherkhin:


********************************
Cenário 1 : Acessar o formulário de Cadastro 

Pre-conditions
Nenhuma

Post-conditions
poder visualizar o formulário de cadastro


Caso de teste 01

Given que o usuário acessa a página principal
When clica no botão "Cadastra-se para fazer entrega"
Then deve ser direcionado para o formulário de cadastro

********************************

Cenário 2 : Acessar o formulário de Cadastro e voltar na home page

Pre-conditions
Estar na página de formuçário de cadastro

Post-conditions
estar na home página 

Caso de teste 02

Given que o usuário acessa o formulário de cadastro
When clica no botão "Voltar para home"
Then deve ser direcionado para página

********************************
Cenário 3 : Não deve finalizar cadastro sem informar os dados obrigatórios

Pre-conditions
Estar na página de formulário de cadastro

Post-conditions
o sistema deve exibir uma mensagem de alterta

Caso de teste 01

Given que o usuário acessa o formuláio de cadastro
When não prenche o campo "Nome completo"
e clica no botão "Cadastra-se para fazer entrega"
Then ser exida a mensagem de alerta "É necessário informar o nome"