window.TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {

    return [
      {
        text: 'Inventario',
        condition: 'always',
        callback: function (t){

          return t.popup({
            tittle: 'Inventario',
            url: './inventory.html',
            height: 300
          });
        }
      }
    ];
  },

  'card-back-section': function (t, options){

    return {
      title: 'Inventario',
      icon: 'https://automatav3.github.io/Trello-Inventory-Powerup/assets/icon-gray.svg',
      content: {
        type: 'iframe',
        url: './inventory.html',
        height: 400
      }
    };
  }
});
