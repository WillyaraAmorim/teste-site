// js/controllers/sobreController.js
app.controller('SobreController', function($scope) {
    $scope.sobreMim = {
        foto: 'images/perfil.jpg',
        descricao: 'Eu sou Willyara Amorim, apaixonada por literatura e o mundo das palavras...',
        parceiros: [
            { nome: 'Parceiro 1', logo: 'imagens/logo' },
            { nome: 'Parceiro 2', logo: 'images/parceiro2.jpg' },
            { nome: 'Parceiro 3', logo: 'images/parceiro3.jpg' }
        ]
    };
});
