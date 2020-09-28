/* Variável var possui dois espocos: Global e locas. Global quando não está dentro de funções e local quando está
dentro de alguma função. 
*/

// Escopo Global:
{
    {
        {
            {
                var sera = 'Será??'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// Escopo Loca:
function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) Erro! Local is not defined. 