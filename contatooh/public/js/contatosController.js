angular.module('contatooh',[]).controller('contatosController',
    function($scope){
            $scope.total = 0;
            $scope.incrementa = function(){
                $scope.total ++;
            };
});