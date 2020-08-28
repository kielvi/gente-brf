
## Gente BR foods

Aplicativo desenvolvido para a BR foods. Seu objetivo é validar dados de todos funcionários da empresa no mundo todo e possibilitar o alteração de senha de e-mail acesso aos sistemas integrados Perdigão/Sadia

- [Instalação](#instalação)
- [Iniciando o projeto](#Iniciando-o-projeto)
- [Api](#api)
- [Dependências](#dependencias)
- [Demonstração] (#demonstracao)

### Instalação

Após clonar este repositório e acessar a pasta do projeto, instale todas as dependências com:
```sh
npm install
```

### Iniciando o projeto

Após a instalação do projeto, execute o seguinte comando para iniciar:
```sh
npm start
```

### Api
Todos os dados do projeto são armazenados no ServiceNow BRF e manipulados através de uma `api` React + C#. O intuíto de uso do mesmo, se faz devido a centralização de manipulação e busca de dados de funcionários de diversos países onde a BRfoods atua.


### Dependências
- [React/Router]
- [Hook form]
- [Google invisible recaptcha]
- [Redux]
- [Yup]


### Metodologia BEM
Todo o visual foi desenvolvido utilizando metologia BEM, para auxiliar na escrita de um SASS/CSS mais inteligente, código reutilizável e sustentável. Além de convenções de nomeação, tornando mais informativo e fácil de entender.


### Demontracação
Para visualizar o funcionamento do projeto:
- Ambiente dev: https://brf-app-login-dev.azurewebsites.net/
- Produção: http://gente.brf.com/
