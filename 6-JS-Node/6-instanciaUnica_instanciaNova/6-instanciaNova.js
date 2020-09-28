// Exportando uma factory function que instância um objeto.
module.exports = () => {
    return {
        value: 1,
        inc() {
            this.value++
        }
    }
}