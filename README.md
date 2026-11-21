# Pokédex 2.5

Pokédex interativa em português com os 151 Pokémon da primeira geração, de Bulbasaur a Mew. Cada ficha exibe número, nome, imagem, tipo, altura, peso e uma breve descrição.

## Como usar

- Digite parte do nome (como `pika` ou `chu`) ou o número do Pokémon (como `25` ou `025`) para filtrar a lista lateral.
- Clique em um Pokémon da lista para abrir sua ficha. A página começa com Bulbasaur selecionado.
- Use **Anterior** e **Próximo** para percorrer o catálogo completo, mesmo com a lista filtrada. A navegação retorna ao início depois de Mew.

## Como rodar localmente

Clone o repositório e entre na pasta do projeto.

```bash
git clone https://github.com/rafaelcampello/pokedex.git
cd pokedex
```

Abra o arquivo `index.html` no navegador. O projeto usa HTML, CSS e JavaScript puro e pode ser aberto diretamente, sem instalação de dependências ou etapa de build. As ilustrações dos Pokémon são carregadas do [repositório de sprites da PokéAPI](https://github.com/PokeAPI/sprites) e precisam de acesso à internet.

## Estrutura do projeto

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| `index.html` | Interface, estilos, fichas do catálogo e lógica de pesquisa e navegação |
| `pokeball.png` | Imagem de fundo |
| `github.jpg` e `linkedin_logo.png` | Ícones da seção de créditos |
| `.github/workflows/` | Fluxos do GitHub Actions para publicação no Azure Static Web Apps |

## Publicação

A raiz do repositório contém os arquivos do site estático. Os fluxos de publicação do Azure Static Web Apps estão configurados para pushes e pull requests na branch `main` e usam tokens de implantação armazenados nos secrets do GitHub Actions.

## Créditos

Desenvolvido por Karlos Yury e Rafael Campello. [Karlos Yury](https://github.com/karlosyurydev) · [Rafael Campello](https://github.com/rafaelcampello)
