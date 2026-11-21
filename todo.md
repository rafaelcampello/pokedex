# Melhorias da Pokédex 2.7

Atualizado em 21/11/2026.

## Entregue

- [x] Adaptar o layout para celular e validar a 320 e 375 px.
- [x] Corrigir o idioma, a estrutura da lista, o rótulo da busca e o foco de teclado. O anúncio da ficha foi verificado na árvore de acessibilidade do Chromium.
- [x] Buscar por trecho do nome e número, mostrar mensagem sem resultados e impedir recarga ao pressionar Enter.
- [x] Concentrar a publicação no workflow `brave-wave`.
- [x] Adicionar favicon e imagem Open Graph. Atualizar o fundo, os créditos e os links dos portfólios.
- [x] Incluir a segunda geração (#152 a #251), documentar as fontes e corrigir a vírgula nos créditos de Karlos Yury.

## Verificações pendentes

- [ ] Conferir o anúncio da ficha com um leitor de tela dedicado.
- [ ] Após a publicação da versão 2.7, compartilhar a URL de produção no WhatsApp para conferir a nova prévia.

## Prioridade média

- [ ] **Manter uma única fonte para o catálogo.** A lista e as fichas repetem nomes, números e identificadores no HTML. Gerar a lista e a ficha selecionada a partir dos mesmos dados, mantendo a abertura direta de `index.html` no navegador. Conferir os 251 registros, a seleção inicial de Bulbasaur e a navegação circular entre Celebi e Bulbasaur. [Catálogo](index.html)
- [ ] **Carregar a ilustração da ficha selecionada sob demanda.** Hoje, as 251 imagens externas têm `src` no HTML inicial. Carregar cada imagem ao abrir a ficha e exibir uma alternativa quando o arquivo remoto falhar. Conferir as requisições na aba Rede do navegador e verificar que a ficha continua legível sem conexão. [Imagens do catálogo](index.html)
- [ ] **Adicionar verificações de regressão.** Validar números de 1 a 251, ausência de IDs duplicados, seleção pela lista, pesquisa sem resultados e navegação circular. Automatizar as verificações do catálogo após centralizar os dados.

