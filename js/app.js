var map;

function main() {

  var options = {
    center: [22.5333, 114.1333],
    zoom: 10, 
    zoomControl: false,  // dont add the zoom overlay (it is added by default)
    loaderControl: false //dont show tiles loader
  };

<<<<<<< HEAD
  cartodb.createVis('map', 'http://kmytty.cartodb.com/api/v2/viz/183b1800-57a8-11e3-b975-69eedfb9ce6c/viz.json', options)
    .done(function(vis, lawyers) {
=======
  cartodb.createVis('map', 'http://kmytty.cartodb.com/api/v2/viz/f0e12a5e-57ae-11e3-a874-fb377fdb1b81/viz.json', options)
    .done(function(vis, layers) {
>>>>>>> 8cd411eefae818fdff9d62791ab907d34944513c
      // there are two layers, base layer and points layer
      var sublayer = layers[1].getSubLayer(0);
      sublayer.set({ 'interactivity': ['cartodb_id', 'govt', 'url'] });

      // Set the custom infowindow template defined on the html
      sublayer.infowindow.set('template', $('#infowindow_template').html());

      // add the tooltip show when hover on the point
      vis.addOverlay({
        type: 'tooltip',
        template: '<p>{{govt}}</p>'
      });

      vis.addOverlay({
        type: 'infobox',
<<<<<<< HEAD
        template: '<h3>{{name_to_display}}</h3><p>{{description}}</p>',
        width: 200,
=======
        template: '<h3>{{govt}}</h3><p>{{url}}</p>',
        width: 400,
>>>>>>> 8cd411eefae818fdff9d62791ab907d34944513c
        position: 'bottom|right'
      });

    });

}

window.onload = main;