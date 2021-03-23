var num1 = parseFloat(document.getElementById("num_1").innerHTML);
var num2 = parseFloat(document.getElementById("num_2").innerHTML);
var soma = num1 + num2;
document.getElementById("resultado").innerHTML = "<strong>" +soma+ "</strong>"; 


function celsiusToFahrenheti(temp_c){
    var temp_f = (9 * temp_c / 5) + 32;  
    return temp_f;
}
   
    var celsius = parseFloat(document.getElementById("caixa_azul").innerHTML);
    var fahrenheti = celsiusToFahrenheti(celsius);
    document.getElementById("caixa_amarela").innerHTML = "<strong>" + fahrenheti + "</strong>" ; 


    var grupos = [ 
        [ "João" , "Maria" ],
        [ "Pedro" , "Joana", "André", "Júlio" ],
        [ "Carolina" , "Helena", "Marcelo" ]
    ];

    var novos_grupos = grupos.slice(-2);
    novos_grupos.push(["Mariana", "Felipe", "Carla"]);
    console.log(novos_grupos);
       

   var curso = {
        'titulo': "Aprenda programação em Python",
        'categoria': ['programação', 'tecnologia', 'python'],
        'n_aval_5_estrelas': 420,
        'n_aval_4_estrelas': 80,
        'n_aval_3_estrelas': 33,
        'n_aval_2_estrelas': 20,
        'n_aval_1_estrela': 4,
       'total_aval':function () {
        var t_aval = this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela;
       return t_aval;
   },
       
       'media_aval': function () {
           var m_aval = ((5 * this.n_aval_5_estrelas) + (4 * this.n_aval_4_estrelas) + (3 * this.n_aval_3_estrelas) + (2 * this.n_aval_2_estrelas) + (1 * this.n_aval_1_estrela)) / (this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela) ;
           return m_aval;
       }
    }
   
   var cat_princial = curso.categoria[0];
    document.getElementById("categoria_principal").innerHTML = cat_princial;
var total_av = curso.total_aval();
var media_av = curso.media_aval().toFixed(2);
    document.getElementById("media_aval").innerHTML = media_av;
document.getElementById("total_aval").innerHTML = total_av;

