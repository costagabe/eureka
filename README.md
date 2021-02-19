# cepfinder

```
Projeto criado para o processo seletivo da empresa EurekaLabs cuja função é, dado um CEP no campo de texto 
da página inicial, enviar uma requisição para o backend e lá, fazer uma busca no banco de dados interno 
ou na api do VIACep, dependendo se o dado já exista em cache no banco.
```

# Backend

``` 
Para carregar as dependências, basta abrir o projeto Maven em sua IDE de preferência.
```

### Entrar na pasta do backend
``` 
cd backend
```

### Criar arquivo .jar de produção
``` 
mvn clean install
``` 

### Subir servidor
``` 
cd target 
java -jar api.jar
```

# Frontend

### Entrar na pasta do frontend
```
cd frontend
```

### Instalação das dependencias
```
yarn
```

### Subir para desenvolvimento
```
yarn serve
```

### Compilação para produção
```
yarn build
```

### Testes unitários
```
yarn test:unit
```

### Lints e fixes
```
yarn lint
```
