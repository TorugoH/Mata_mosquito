/*Declaração de variaveis*/
let alturaPagina=0;/*repsosavel por armazernar a altura da pagina*/
let larguraPagina=0;/*reponsavel por armazernar a largura da pagina*/
let vidas=1;/*responsavel por fazer o controle da vidas*/
let tempo=15/*contador de tempo*/
let TempodoMosquito=1500/*para poder controlar os niveis do jogo*/
/*criando os niveis de dificuldade*/
let nivel=window.location.search/*responsavel por recuperar o nivel selecionado na pagina inicial*/
nivel=nivel.replace('?','')/*replace e responsavel por perrcorer o valor passado buscando o ? e subustituindo pelp vazio*/
/*Definindo as fases */
if(nivel==='normal'){
TempodoMosquito=1500
}
else if(nivel==='dificil'){
    TempodoMosquito=1000
}
else if(nivel==='impossivel'){
TempodoMosquito=550
}
/*pegando os valores da tela automaticamente*/
function ajustaTela(){
    alturaPagina=window.innerHeight;/*pegando a altura do navegador*/
    larguraPagina=window.innerWidth;/*pegando a largura do navegador*/
}
ajustaTela();/*função e chamada constantemente para verificar a altura e largura, assim adpatando o jogo a seu temanho*/
/*criando o cronometro*/
let temporizador=setInterval(function(){/*Função responvavel por controla o tempo*/
    tempo-=1
    if(tempo<0){
            /*clearInterval server para pode para os aplicaçõe quando o tempo esgotar*/
            clearInterval(temporizador)
            clearInterval(criadordeMosca)
            window.location.href='vitoria.html'
    }else{

        document.getElementById('cronometro').innerHTML=tempo
    }
},1000)
/*criando tamanho da mosca de forma aleatoria*/
function criandoTamanhos(){
    /*função responsavel por descidir qual elementor vai receber determinada class, de modo aleatorio*/
    let classe=Math.floor(Math.random()*3);
    /*como base no nomero sorteado o case retorna o nome de uma class, que sera aplicada no alemento*/
    switch(classe){
        case 0:
            return 'mosca1'
        case 1:
            return'mosca2'
        case 2:
            return 'mosca3'
    }
}
function ladoAleatorio(){
    let tamano=Math.floor(Math.random()*2);
    switch(tamano){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
/*criando elementos aleatorio*/
function criandoElementosAleatorios(){
    /*remover mosca anterior caso ele exista*/
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove();
        /*pra ver as vidas*/
        if(vidas>3){
            window.location.href='fim_de_jogo.html'
        }
        else{
            document.getElementById('coracao'+ vidas).src='imagens/coracao_vazio.png';
        }
        vidas++;
    }
    /*criando posição de forma aleatoria*/
    let posicaoX=Math.floor(Math.random()*larguraPagina)-90;
    let posicaoY=Math.floor(Math.random()*alturaPagina)-90;
        if(posicaoX<0){
            posicaoX=0;
        }
        if(posicaoY<0){
            posicaoY=0;
        }
    /*criando os elementos dinamicamente*/
    let mosca=document.createElement('img');
    mosca.src='imagens/mosca.png';
    mosca.className=criandoTamanhos()+' '+ ladoAleatorio();
    mosca.style.left=posicaoX+'px';
    mosca.style.top=posicaoY+'px';
    mosca.style.position='absolute'
    mosca.id='mosca'
    mosca.addEventListener('click',function(){
        this.remove();
        console.log(1)
    }
    )
    document.body.appendChild(mosca);
}
let criadordeMosca=setInterval(function(){criandoElementosAleatorios()
},TempodoMosquito)


