window.TrelloPowerUp.initialize({

    'card-buttons': function (t, options) {

        return [
            {
                text: 'Inventario',
                condition: 'always',

                callback: function (t) {

                    return t.popup({
                        title: 'Inventario',
                        url: t.signUrl('./inventory.html'),
                        height: 400
                    });

                }
            }
        ];

    },


    'card-back-section': function (t, options) {

        return {

            title: 'Inventario',

            icon: 'https://automatav3.github.io/Trello-Inventory-Powerup/assets/icon-gray.svg',

            content: {

                type: 'iframe',

                url: t.signUrl('./inventory.html'),

                height: 400

            }

        };

    }

},
{
    appKey: '3c3623e5d8a1a7c61958039752f2c9c1',
    appName: 'Inventory Maneger'
});
