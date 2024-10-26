// js/controllers/headerController.js
app.controller('HeaderController', function($scope) {
    $scope.socialLinks = [
        { url: 'https://www.instagram.com/', icon: 'js', alt: 'Instagram' },
        { url: 'https://twitter.com/', icon: 'images/twitter.svg', alt: 'Thread' },
        { url: 'mailto:example@example.com', icon: 'images/email.svg', alt: 'Email' }
    ];
});
