const container = document.createElement('div')

document.body.append(container)
container.setAttribute("id", "container")
// container.style.backgroundColor = "grey"

const primeiroP = document.createElement('p')
primeiroP.setAttribute("id", "primeiro");
primeiroP.textContent = "Hey I'm RED"
primeiroP.style.color = 'red'
container.appendChild(primeiroP)

const primeiroT = document.createElement('h3');
primeiroT.setAttribute('style', 'color:blue');
primeiroT.textContent = "I am a BLUE H3"
container.appendChild(primeiroT)

const umaDiv = document.createElement('div');
umaDiv.textContent = "teste"
umaDiv.setAttribute('style', 'border: solid; background-color: pink; text-align: center')

const divH1 = document.createElement('h1')
const divP = document.createElement('p')
divH1.textContent = "I am a DIV"
divP.textContent = "Me TOO";


umaDiv.appendChild(divH1)
umaDiv.appendChild(divP)
container.appendChild(umaDiv)

const botao = document.createElement('button')
botao.textContent = "Botao de Teste"
botao.setAttribute('id', 'testeBotao')
botao.addEventListener('click', () => {
   alert('Eita Mundao!')
})
container.appendChild(botao)

