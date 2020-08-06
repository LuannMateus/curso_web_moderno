/*Agora, usando a variável let, que possui o escopo em bloco, a função consiguirá se "lembrar" dos valores corretos,
solucionando assim, o problema que a variável var trazia.*/ 
const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()