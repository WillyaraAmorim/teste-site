// js/controllers/menuController.js
app.controller('MenuController', function($scope) {
    $scope.menuItems = [
        { label: 'Início', link: 'inicio' },
        { label: 'Resenha', link: 'por-genero' },
        { label: 'Projetos', link: 'projetos' },
        { label: 'Contato', link: 'contato' }
    ];
});
