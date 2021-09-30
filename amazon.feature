#laguage:pt

Funcionalidade: Barra de pesquisa

    Contexto: Estar na loja online da amazon
        Dado que esteja na loja Amazon
        Então acessar a aba livros

    Cenário: Buscar pelo Livro desejado
        Quando pesquisar por "ISTQB"
        Então deverá ser exibido resultados relacionados à "ISTQB"
    
    Cenário: verificar a palavra "syllabus"
        Quando as respostas forem carregadas 
        Então valida se o primeiro resultado contém a palavra "Syllabus"  