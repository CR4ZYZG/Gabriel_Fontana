var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var soma = 0
var media = 0
var count = 0

for (let i = 0; i < list.length; i++) {
    if(list[i] % 2 ==0){
        soma += list[i]
        count++
    }
    
}

media = soma / count

console.log(media)