# Pokédex 2.7

Atualizada em 21/11/2026. [Abrir a Pokédex](https://brave-wave-0a4b22810.5.azurestaticapps.net/)

Pokédex interativa em português com os 251 Pokémon das duas primeiras gerações, de Bulbasaur a Celebi. Cada ficha exibe número, nome, imagem, tipo, altura, peso e uma breve descrição.

## Como usar

- Digite parte do nome (como `pika` ou `chu`) ou o número do Pokémon (como `25` ou `025`) para filtrar a lista lateral.
- Clique em um Pokémon da lista para abrir sua ficha. A página começa com Bulbasaur selecionado.
- Use **Anterior** e **Próximo** para percorrer o catálogo completo, mesmo com a lista filtrada. A navegação retorna ao início depois de Celebi.

## Como rodar localmente

Clone o repositório e entre na pasta do projeto.

```bash
git clone https://github.com/rafaelcampello/pokedex.git
cd pokedex
```

Abra o arquivo `index.html` no navegador. O projeto usa HTML, CSS e JavaScript puro e pode ser aberto diretamente, sem instalação de dependências ou etapa de build. As ilustrações dos Pokémon são carregadas do [repositório de sprites da PokéAPI](https://github.com/PokeAPI/sprites) e precisam de acesso à internet.

## Fontes do catálogo

Os dados e textos dos Pokémon #001 a #151 estão gravados no HTML original do projeto, que não identifica sua fonte. As fichas #152 a #251 usam nomes, tipos atuais, altura e peso dos dados da [PokéAPI](https://github.com/PokeAPI/pokeapi/tree/master/data/v2/csv). As descrições em português foram adaptadas das entradas em inglês de Pokémon Silver disponíveis na mesma fonte. As ilustrações das duas gerações vêm da coleção de arte oficial do [repositório de sprites da PokéAPI](https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/other/official-artwork).

## Estrutura do projeto

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| `index.html` | Interface, estilos, fichas do catálogo e lógica de pesquisa e navegação |
| `favicon.png` | Favicon da Pokédex |
| `preview-2.7.jpg` | Imagem Open Graph para compartilhamento |
| `karlos-favicon.svg` e `rafael-favicon.svg` | Favicons dos portfólios nos créditos |
| `github.jpg` e `linkedin_logo.png` | Ícones da seção de créditos |
| `.github/workflows/` | Workflow do GitHub Actions para publicação no Azure Static Web Apps |

## Publicação

A raiz do repositório contém os arquivos do site estático. O workflow `brave-wave` publica no Azure Static Web Apps em pushes para `main` e gerencia as prévias dos pull requests. Os metadados Open Graph apontam para a URL de produção e para uma imagem JPEG de 1200 × 630 px.

## Atualizações

A cada atualização, revise o `README.md` e o `todo.md` no mesmo PR. Incremente a versão publicada em 0.1, salvo quando outra versão for indicada, e atualize a data para a do merge. Mantenha o título do site, o rodapé, os metadados e a imagem de compartilhamento coerentes com a versão.

## Créditos

Desenvolvido por Karlos Yury (PxG Server Gold, Char: Malefic Luna level 430+, clã Malefic) e Rafael Campello (PxG Server Gold, Char: Voextor level 490+, clã Raibolt). [Portfólio de Karlos Yury](https://www.karlosyury.com/) · [Portfólio de Rafael Campello](https://www.rafaelbcampello.com/)
