# Melhorias da Pokédex 3.2

Atualizado em 23/11/2026.

## Entregue

- [x] Adaptar o layout para celular e validar a 320 e 375 px.
- [x] Corrigir o idioma, a estrutura da lista, o rótulo da busca e o foco de teclado. O anúncio da ficha foi verificado na árvore de acessibilidade do Chromium.
- [x] Buscar por trecho do nome e número, mostrar mensagem sem resultados e impedir recarga ao pressionar Enter.
- [x] Concentrar a publicação no workflow `brave-wave`.
- [x] Adicionar favicon e imagem Open Graph. Atualizar o fundo, os créditos e os links dos portfólios.
- [x] Incluir a segunda geração (#152 a #251), documentar as fontes e corrigir a vírgula nos créditos de Karlos Yury.
- [x] Incluir as 1.025 espécies e as 326 variedades alternativas registradas no endpoint `/pokemon` da PokéAPI.
- [x] Centralizar o catálogo em `catalogo.js` e carregar apenas a ilustração da ficha ou variedade selecionada.
- [x] Adicionar as 1.347 versões Shiny com imagem na PokéAPI e as descrições específicas disponíveis.
- [x] Sincronizar o seletor com o clique na imagem e permitir a navegação circular.

- [x] Versionar a URL e a imagem Open Graph e incluir o catálogo completo e as opções Shiny na prévia.

- [x] Internacionalizar a interface com i18next e quatro bandeiras acima do título.
- [x] Disponibilizar 1.025 descrições de espécies e 63 descrições de formas em cada idioma.

- [x] Explicar o caráter independente e educativo da Pokédex nos quatro idiomas e creditar a PokéAPI.

## Verificações pendentes

- [ ] Conferir o anúncio da ficha com um leitor de tela dedicado.
- [ ] Após a publicação da versão 3.2, conferir os metadados e a imagem em produção e testar o link de compartilhamento `?v=3.2` no WhatsApp.

## Prioridade média

- [ ] **Adicionar verificações de regressão.** Validar números de 1 a 1025, ausência de IDs duplicados, seleção pela lista, pesquisa sem resultados e navegação circular. Automatizar também a troca de variedades e a resposta a imagens indisponíveis.

