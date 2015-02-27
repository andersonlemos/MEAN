angular.module('contatooh').controller('ContatosController',
    function ($scope) {
             $scope.total = 0;
             $scope.incrementa = function () {
                 $scope.total++;
             };
             $scope.contatos = [
                                    {_id:1,nome:'Contato 1',email:'contato1@contatooh.com'},
                                    {_id:2,nome:'Contato 2',email:'contato2@contatooh.com'},
                                    {_id:3,nome:'Contato 3',email:'contato3@contatooh.com'}
                                 ];
             $scope.filtro='';

             
             
});