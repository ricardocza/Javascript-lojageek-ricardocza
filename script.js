let listaProdutos = [
    {
        'id': 1,
        'nomeItem': 'Imagem Relógio MER4',
        'valorItem': 500,
        'tipoItem': 'painting',
        'linkImagem': './assets/img/painting/clock.jpg'
    },
    {
        'id': 2,
        'nomeItem': 'AnimeWoman',
        'valorItem': 300,
        'tipoItem': 'actionFigure',
        'linkImagem': './assets/img/actions/animewoman.jpg'
    },
    {
        'id': 3,
        'nomeItem': 'Imagem Controle PS4',
        'valorItem': 500,
        'tipoItem': 'painting',
        'linkImagem': './assets/img/painting/gamepad.jpg'
    },
    {
        'id': 4,
        'nomeItem': 'Goku zica',
        'valorItem': 9100,
        'tipoItem': 'actionFigure',
        'linkImagem': './assets/img/actions/dragonballpersonagem.jpg'
    },
    {
        'id': 5,
        'nomeItem': 'Imagem Personagem Starwars',
        'valorItem': 500,
        'tipoItem': 'painting',
        'linkImagem': './assets/img/painting/personagem.jpg'
    },
    {
        'id': 6,
        'nomeItem': 'Baby Yoda',
        'valorItem': 300,
        'tipoItem': 'actionFigure',
        'linkImagem': './assets/img/actions/starwarspersonagem.jpg'
    },
]

function insereItens() {
    for(key in listaProdutos) {
        let itemAtual = listaProdutos[key]
        if(itemAtual['tipoItem'] == 'painting') {
            //cria um List Item
            let secaoAtual = document.getElementById('paintings_list')
            let li = document.createElement('li')
            li.className = 'card_produto'
            
            secaoAtual.appendChild(li)

            //criando divs dentro do LI
            let divImg = document.createElement('div')
            divImg.className = 'img_produto'
            let imagemProduto = document.createElement('img')
            imagemProduto.src = itemAtual['linkImagem']
            let divDescricao = document.createElement('div')
            divDescricao.className = 'descricao_produto'
            li.appendChild(divImg)
            divImg.appendChild(imagemProduto)            
            li.appendChild(divDescricao)            

        }
        else if(itemAtual['tipoItem'] == 'actionFigure') {
            //cria um List Item
            let secaoAtual = document.getElementById('fig_list')
            let li = document.createElement('li')
            li.className = 'card_produto'
            
            secaoAtual.appendChild(li)

            //criando divs dentro do LI
            let divImg = document.createElement('div')
            divImg.className = 'img_produto'
            let imagemProduto = document.createElement('img')
            imagemProduto.src = itemAtual['linkImagem']
            let divDescricao = document.createElement('div')
            divDescricao.className = 'descricao_produto'
            li.appendChild(divImg)
            divImg.appendChild(imagemProduto)            
            li.appendChild(divDescricao)            

        }
    }
}