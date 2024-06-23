const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com a tecnologia no mundo agrícola, e com um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo de como tudo isso possa ser. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "sempre quis saber como é a tecnologia no mundo agrícola."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, que podemos usar na agricultura, uma professora de agronomia da escola decidiu fazer uma sequência de aulas sobre o uso da tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso da tecnologia no mundo agrícola. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a tecnologia impacta no trabalho dos agricultores. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a tecnologia pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de tecnologia e luta para abrir novos caminhos profissionais com tecnologia."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização da tecnologia de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou responder uma pergunta sobre o seu trabalho. E agora?",
        alternativas: [
            {
                texto: "Respondi a pergunta utilizando meus conhecimentos praticado em sala de aula.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda muito sobre o assunto discutido em sala, por isso você decidiu ajudar com seus conhecimentos."
            },
           
        ]
    },
    {
        enunciado: "É  certo dizer que a tecnologia pode ser usada para facilitar a vida no mundo agrícola?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Porque hoje em dia existe equipamentos e máquinas modernas, que são utilizadas para facilitar o trabalho no campo."
            },
            {
                texto: "Não.",
                afirmacao: "Pois a tecnologia tirou muitos empregos de pessoas que necessitavam e agora estam desempregadas. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();