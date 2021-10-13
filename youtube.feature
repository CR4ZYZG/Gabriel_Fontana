#laguange:pt

Funcionalidade: Informações de canais no youtube

    Cenário: Buscar canal da Compasso UOL

        Dado que esteja na página inicial do youtube

        Quando pesquisar por "Compasso UOL"

        E acessar o canal Compasso UOL
        
        E acessar a aba "sobre"
        
        Então valida se o número de vizualizações é maior que 30000


    Esquema do Cenário: validar numero de vizualizações de canais

        Dado que esteja na página home

        Quando pesquisar por "<canal>"

        E acessar o canal "<canal>"
        
        E acessar a aba "sobre"

        Então o numero de visualizações deverá ser maior que "<visualizaçoes>"

            Exemplos:
            | canal            | vizualizações |
            | compasso uol     | 30.000        |
            | porta dos fundos | 1.000.000.000 |



        