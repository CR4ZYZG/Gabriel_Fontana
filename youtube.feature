#laguange:pt

Funcionalidade: Barra de pesquisa



    Contexto: Estar na página inicial do youtube

        Dado que esteja na página inicial do youtube



    Cenário: Buscar canal da Compasso UOL

        Quando pesquisar por "Compasso UOL"

        Então deverá ser exibido o canal "Compasso UOL", e outros resultados relacionados 
        
        E Entrar no canal com nome de "Compasso UOL"
    
    Esquema do Cenário: verificar quantidade de visualizações 

        Quando acessar a aba "sobre"

        Então valida se o número de vizualizações é "<número>"
        
        E retorna a mensagem "<mensagem>"

        Exemplos:
        | número | mensagem                          |
        | <30000 | tem menos de 30 mil visualizações |
        | >30000 | tem mais de 30 mil visualizações  |

        