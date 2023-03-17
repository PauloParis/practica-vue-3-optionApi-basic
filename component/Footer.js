app.component('footer-banco', {
    // se podria pasar data, methods, computed, etc
    props: ['valor', 'fecha'],
    template: /*html*/`
    <div class="bg-dark py-3 mt-3 text-white">
        <h4>{{texto}} - {{valor}} - {{fecha}}</h4>
    </div>
    `,
    data() {
        return {
            texto: 'Footer en mi sitio web dinamico',
        };
    },
})