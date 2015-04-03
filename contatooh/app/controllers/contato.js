var contatos = [{id: 1, nome: 'Contato 1', email: 'contato1@contatooh.com'},
                {id: 2, nome: 'Contato 2', email: 'contato2@contatooh.com'},
                {id: 3, nome: 'Contato 3', email: 'contato3@contatooh.com'},
                {id: 4, nome: 'Contato 4', email: 'contato4@contatooh.com'}
               ];

module.exports = function () {
    
    var controller = {};
    
    controller.listaContatos  = function(req,res){
        res.json(contatos);
    };
    
    controller.obtemContato = function(req,res){
        var idContato = req.params.id;
        
        var contato = contatos.filter(function(contato){
            
            return contatos._id == idContato;
            
        })[0];
        
        if (contato!=null){
            res.json(contato);
        }
        
        res.status(404).send('Contato não encontrado!');
    };
    
    
    controller.removeContato = function(req,res){
        var idContato = req.params.id;
         var contato = contatos.filter(function(contato){
            
            return contatos._id != idContato;
            
        });
        
        res.status(204).end();
    };
    
    
    return controller;
}