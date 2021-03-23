/*alert("mensagem");
console.log("mesagem");*/

var     aluno = {
    
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'ano_narc': 1992,
    'nome_compl': function(){
        var n_comp = this.nome + " " + this.sobrenome;
        return n_comp;
    },
    'idade': function(){
        var ida = 2019 - this.ano_narc;
        return ida;
    }
    
};

console.log(aluno.nome_compl());
console.log(aluno.idade());