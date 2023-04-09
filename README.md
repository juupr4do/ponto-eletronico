# ponto-eletronico
ponto eletronico (nodejs, js, html, css, pug, sql)

# Visão Geral
É importante ressaltar que esse foi o meu primeiro contato com nodejs, reactjs e typescript.

O back foi desenvolvido com nodejs.

Houve uma tentativa de desenvolver o front com reactjs e typescript (você pode encontrar essa tentativa [aqui](https://github.com/juupr4do/front-end.git)), porém não consegui 
integrar o nodejs com reactjs, tentei utilizar o pacote axios para isso. Devido ao prazo, optei por fazer com linguagens que já estava acostumada para, pelo menos, entregar 
algo dentro do prazo. Consegui utilizar js e pug para integrar front e back. 

O banco foi desenvolvido com auxílio do MAMP utilizando mySQL server.

O tempo do desenvolvimento total foi em torno de 3 dias. 

A sintaxe do pug não está totalmente correta, mas optei por fazer dessa forma por ficar mais claro pro meu desenvolvimento e pelo prazo.

# Packages:
Usei alguns pacotes para utilizar o nodejs como backend. 
  - express
  - sequelize
  - sql2
  - body-parser
  - pug
  
Caso precise instalar alguns dos pacotes, rode o seguinte comando no terminal/prompt:
 ```nodejs
npm install nome-do-pacote
```

# Banco:
Como descrito anteriormente, foi utilizado MAMP mySQL server. Caso pretenda utilizar de outra forma você pode alterar as configurações de acesso ao banco no arquivo db.js 
que se encontra na pasta models.

Após conferir as configurações, você deve criar uma database para o projeto. Você pode rodas o seguinte comando (no meu caso eu rodei no mySQL Workbench):
 ```sql
CREATE DATABASE ponto;
```
Você pode trocar o nome da database, caso ache necessário. Entretanto, isso terá que ser alterado no arquivo descrito anteriormente.

As tabelas vão ser criadas quando rodar o projeto (restante dos arquivos em models).

# Como rodar:
Com tudo corretamente configurando, você deve rodar o seguinte comando
```react
node back.js
```
# Onde acessar:
Após rodar o comando anterior com sucesso, na porta 5000 você consiguirá visualizar o código (https://localhost:5000/).

Após rodar um comando, um usuário é criado automaticamente para poder acessar o ponto. A senha pode ser conferida no banco na tabela users ou no próprio código. Para
facilitar a vida de quem for interagir com a interface, a senha é AB79xcVV

# Funcionamento:
obs: no teste a seguir eu já havia dado entrada por isso aparecem horas já trabalhadas. Também já havia marcado uma saída.

https://user-images.githubusercontent.com/42226267/230800371-c8f8cb14-f151-4895-8445-630e07fa8abb.mp4

Revisitar para conseguir integrar a atividade com reactjs e typescript. Também no futuro tentar imprimir todas as entradas ao invés de duas.
