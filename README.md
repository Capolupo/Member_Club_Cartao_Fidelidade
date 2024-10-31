## Funcionalidades base

- OK Deve ser possível buscar as informações dos clientes através de um ID;
- OK Deve haver uma validação pra saber se é um ID válido e existente;
- OK Deve aparecer um alerta de erro em tela caso seja um ID inválido;

### Ao buscar os dados de cada cliente:

- OK Deve ser exibida na tela a imagem do(a) cliente;
- OK Deve ser exibido na tela o nome do(a) cliente;
- OK Deve ser exibido na tela o histórico de cortes com a quantidade, a data e a hora;
- OK Deve ter um check no cartão fidelidade para cada corte de cabelo que o(a) cliente tiver;
- OK Deve ser exibido na tela um progresso com o número de cortes restantes para o prêmio;
- OK Deve aparecer na tela um modal de parabéns com a mensagem: “Parabéns! Seu próximo corte é gratuito!” caso o cliente tenha atingido os 10 cortes;

#### Dependências utilizadas
- npm i json-server@1.0.0-alpha.21
- npm i webpack@5.89.0 webpack-cli@5.1.4 --save-dev
- npm i webpack-dev-server@4.15.1 --save-dev
- npm i html-webpack-plugin@5.6.0 --save-dev
- npm i style-loader@3.3.3 css-loader@6.8.1 --save-dev
- npm i copy-webpack-plugin@11.0.0 --save-dev
- npm i babel-loader@9.1.3 @babel/core@7.23.7 @babel/preset-env@7.23.7 --save-dev
- npm i dayjs@1.11.10
