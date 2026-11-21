# Melhorias da Pokédex

A revisão do código confirmou que os 151 itens da lista têm fichas com IDs únicos e aparecem na mesma ordem. As prioridades abaixo começam pelos problemas de uso e seguem para manutenção e publicação. A avaliação foi feita a partir dos arquivos do repositório.

## Prioridade alta

- [ ] **Adaptar a interface para celular.** O contêiner principal tem largura fixa de 600 px. Empilhar a pesquisa, a lista e a ficha em telas estreitas. Validar em larguras de 320 e 375 px, sem rolagem horizontal e com os controles acessíveis. [Código da interface](index.html)
- [ ] **Corrigir a estrutura e a acessibilidade.** Usar `lang="pt-BR"`, remover a lista duplicada, associar um rótulo ao campo de busca e corrigir a identificação do ícone do GitHub de Rafael. Verificar foco visível, ordem de tabulação e anúncio da ficha selecionada com leitor de tela. [Código da interface](index.html)
- [ ] **Melhorar a busca.** A pesquisa atual só encontra prefixos do nome e deixa a lista vazia sem feedback. Aceitar trechos do nome e números como `25` e `025`, informar quando não houver resultados e impedir que Enter recarregue a página. Validar com `pika`, `chu`, `025` e um termo inexistente. [Lógica da pesquisa](index.html)

## Prioridade média

- [ ] **Manter uma única fonte para o catálogo.** A lista e as fichas repetem nomes, números e identificadores no HTML. Gerar a lista e a ficha selecionada a partir dos mesmos dados, mantendo a abertura direta de `index.html` no navegador. Conferir os 151 registros, a seleção inicial de Bulbasaur e a navegação circular entre Mew e Bulbasaur. [Catálogo](index.html)
- [ ] **Carregar a ilustração da ficha selecionada sob demanda.** Hoje, as 151 imagens externas têm `src` no HTML inicial. Carregar cada imagem ao abrir a ficha e exibir uma alternativa quando o arquivo remoto falhar. Conferir as requisições na aba Rede do navegador e verificar que a ficha continua legível sem conexão. [Imagens do catálogo](index.html)
- [ ] **Adicionar verificações de regressão.** Validar números de 1 a 151, ausência de IDs duplicados, seleção pela lista, pesquisa sem resultados e navegação circular. Automatizar as verificações do catálogo após centralizar os dados.

## Publicação

- [ ] **Revisar os cinco workflows do Azure.** Todos são acionados por pushes e pull requests para `main` e publicam a raiz do repositório. Identificar os destinos ainda em uso pelo histórico de execuções e pela configuração no Azure. Documentar o endereço oficial e remover apenas os workflows de destinos confirmados como desativados. [Workflows de publicação](.github/workflows/)
