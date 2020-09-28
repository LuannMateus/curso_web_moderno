const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Usando o break para sair do fluxo de repetição.
for (let x in nums) {
    if (x == 5) {
        break
    }
    console.log(`[${x}] = ${nums[x]}`)
}

// Usando o continue para interromper o execução mencionada.
for (let y in nums) {
    if (y == 5) {
        continue
    }

    console.log(`${y} = ${nums[y]}`)
}

// Usando um rotulo para direcionar o break.
externo: 
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par: ${a},${b}`)
    }
}
    