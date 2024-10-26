// js/controllers/destaqueController.js
app.controller('DestaqueController', function($scope) {
    $scope.livrosDestaque = [
        { imagem: 'https://m.media-amazon.com/images/I/91TWQ17KKBL._SY522_.jpg', titulo: 'Nome do Livro 1', dataResenha: '01/01/2024', link: '#' },
        { imagem: 'https://m.media-amazon.com/images/I/815iQ13MRoL._SY522_.jpg', titulo: 'Nome do Livro 2', dataResenha: '02/01/2024', link: '#' },
        { imagem: 'https://m.media-amazon.com/images/I/81XdytHuAcL._SY522_.jpg', titulo: 'Nome do Livro 3', dataResenha: '03/01/2024', link: '#' }
    ];
});
