// Exportando um objeto, que ficará em cache.
module.exports = {
    value: 1,
    inc() {
        this.value++
    }
}