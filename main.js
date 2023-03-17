// instancia de vue
const app = Vue.createApp({
    data() {
        return {
            titulo: 'Este titulo esta con vue',
            cantidad: 0,
            enlace: 'http://youtube.com',
            estado: false,
            servicios: ['transferencias', 'pagos', 'giros']
        }
    },
    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
        },
        quitarSaldo() {
            if(this.cantidad === 0) {
                alert('Saldo en cero')
                return
            }
            this.cantidad = this.cantidad - 100
        }
    },
    computed: { //  siempre se tiene q retornar
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto(){
            return this.titulo.toUpperCase();
        }
    }
})