# Pokédex 3.0

Atualizada em 21/11/2026. [Abrir a Pokédex](https://brave-wave-0a4b22810.5.azurestaticapps.net/) · [Link para compartilhar a versão 3.0](https://brave-wave-0a4b22810.5.azurestaticapps.net/?v=3.0)

Pokédex interativa em português com as 1.025 espécies das nove gerações, de Bulbasaur (#001) a Pecharunt (#1025). Cada ficha exibe número, nome, imagem, tipo, altura, peso e uma breve descrição.

## Como usar

- Digite parte do nome (como `pika` ou `chu`) ou o número do Pokémon (como `25` ou `025`) para filtrar a lista lateral.
- Clique em um Pokémon da lista para abrir sua ficha. A página começa com Bulbasaur selecionado.
- Use o seletor na ficha ou clique na imagem para alternar entre as versões normais e Shiny disponíveis. O clique segue a ordem do menu e volta à primeira versão depois da última. A ficha atualiza imagem, tipo, altura, peso e descrição conforme a variedade.
- Use **Anterior** e **Próximo** para percorrer o catálogo completo, mesmo com a lista filtrada. A navegação retorna ao início depois de Pecharunt.

## Como rodar localmente

Clone o repositório e entre na pasta do projeto.

```bash
git clone https://github.com/rafaelcampello/pokedex.git
cd pokedex
```

Abra o arquivo `index.html` no navegador. O projeto usa HTML, CSS e JavaScript puro e pode ser aberto diretamente, sem instalação de dependências ou etapa de build. As ilustrações dos Pokémon são carregadas do [repositório de sprites da PokéAPI](https://github.com/PokeAPI/sprites) e precisam de acesso à internet.

## Fontes do catálogo

O catálogo reúne 1.025 espécies e todos os 1.351 registros do endpoint `/pokemon` da PokéAPI, incluindo 326 variedades alternativas. A numeração e a busca seguem a Pokédex Nacional. Variações cosméticas disponíveis apenas no endpoint `/pokemon-form` ficam fora do catálogo.

Os dados foram incorporados a partir dos [arquivos CSV da PokéAPI](https://github.com/PokeAPI/pokeapi/tree/cd5f6c6232f23430aa6089896d96230f5f7ecef4/data/v2/csv). As descrições #001 a #251 mantêm os textos em português das versões anteriores. Para as demais, a ficha usa a descrição em inglês disponibilizada pela PokéAPI. O site busca a arte oficial sob demanda e tenta o sprite da mesma variedade quando a arte está indisponível. [Coleção de imagens](https://github.com/PokeAPI/sprites)

Há **1.347 versões Shiny** com imagem na coleção da PokéAPI. A ficha usa a descrição da forma quando a PokéAPI a fornece. Caso contrário, mantém a descrição da espécie. Normal e Shiny compartilham o texto da mesma forma. [Descrições por forma na PokéAPI](https://github.com/PokeAPI/pokeapi/blob/cd5f6c6232f23430aa6089896d96230f5f7ecef4/data/v2/csv/pokemon_form_flavor_text.csv)

## Estrutura do projeto

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| `index.html` | Interface, estilos e lógica de pesquisa e navegação |
| `catalogo.js` | Dados locais das espécies e variedades |
| `variedades.js` | Disponibilidade de imagens Shiny e descrições específicas por forma |
| `favicon.png` | Favicon da Pokédex |
| `preview-3.0.jpg` | Imagem Open Graph para compartilhamento |
| `karlos-favicon.svg` e `rafael-favicon.svg` | Favicons dos portfólios nos créditos |
| `github.jpg` e `linkedin_logo.png` | Ícones da seção de créditos |
| `.github/workflows/` | Workflow do GitHub Actions para publicação no Azure Static Web Apps |

## Publicação

A raiz do repositório contém os arquivos do site estático. O workflow `brave-wave` publica no Azure Static Web Apps em pushes para `main` e gerencia as prévias dos pull requests. A prévia Open Graph usa uma URL de produção com o parâmetro de versão e uma imagem JPEG de 1200 × 630 px com nome versionado. Para compartilhar uma atualização, use o link da versão indicado no topo. Serviços de mensagem podem manter a prévia anterior no cache do link já compartilhado.

## Atualizações

A cada atualização, revise o `README.md` e o `todo.md` no mesmo PR. Incremente a versão publicada em 0.1, salvo quando outra versão for indicada, e atualize a data para a do merge. No mesmo PR, atualize o título do site, o rodapé e a prévia Open Graph. Incremente a versão em `og:url`, gere uma nova imagem com o número da versão no nome e inclua as principais novidades no texto e na imagem. Depois do merge, confira o HTML e o JPEG na URL pública.

## Créditos

Desenvolvido por Karlos Yury (PxG Server Gold, Char: Malefic Luna level 430+, clã Malefic) e Rafael Campello (PxG Server Gold, Char: Voextor level 490+, clã Raibolt). [Portfólio de Karlos Yury](https://www.karlosyury.com/) · [Portfólio de Rafael Campello](https://www.rafaelbcampello.com/)
