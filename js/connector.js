window.TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {

    return [
      {
        text: 'Inventario',
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

    return{
      title: 'Inventario',
      content: {
        type: 'iframe',
        url: './inventory.html',
        height: 400
      }
    };
  }
});
