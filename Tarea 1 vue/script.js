const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Lista de compras',
        frutas: ['Pera', 'Manzana', 'Fresa'],
        cadena: document.getElementById('contenido').value
    },
    methods:{
        separar(){
            var arregloComas = this.cadena.split(',');
            var arregloLista = []
            for(var i=0; i<arregloComas.length; i++){
                var arregloEspacios = arregloComas[i].trim().split(' ');
                console.log(arregloEspacios[0]+": "+arregloEspacios[1]);
                if(arregloEspacios[1]!=null){
                   arregloLista.push(arregloEspacios[0]+": "+arregloEspacios[1]); 
                }
                
            }
            return arregloLista;
        }
    },
    computed:{
        cadenaSeparada: function(){
            return this.separar();
        }
    }
})