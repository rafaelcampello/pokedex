# Melhorias da Pokédex 2.8

Atualizado em 21/11/2026.

## Entregue

- [x] Adaptar o layout para celular e validar a 320 e 375 px.
- [x] Corrigir o idioma, a estrutura da lista, o rótulo da busca e o foco de teclado. O anúncio da ficha foi verificado na árvore de acessibilidade do Chromium.
- [x] Buscar por trecho do nome e número, mostrar mensagem sem resultados e impedir recarga ao pressionar Enter.
- [x] Concentrar a publicação no workflow `brave-wave`.
- [x] Adicionar favicon e imagem Open Graph. Atualizar o fundo, os créditos e os links dos portfólios.
- [x] Incluir a segunda geração (#152 a #251), documentar as fontes e corrigir a vírgula nos créditos de Karlos Yury.
- [x] Incluir as 1.025 espécies e as 326 variedades alternativas registradas no endpoint `/pokemon` da PokéAPI.
- [x] Centralizar o catálogo em `catalogo.js` e carregar apenas a ilustração da ficha ou variedade selecionada.

## Verificações pendentes

- [ ] Conferir o anúncio da ficha com um leitor de tela dedicado.
- [ ] Após a publicação da versão 2.8, compartilhar a URL de produção no WhatsApp para conferir a nova prévia.

## Prioridade média

- [ ] **Adicionar verificações de regressão.** Validar números de 1 a 1025, ausência de IDs duplicados, seleção pela lista, pesquisa sem resultados e navegação circular. Automatizar também a troca de variedades e a resposta a imagens indisponíveis.

