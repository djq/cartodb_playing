var map;

function main() {

  var options = {
    center: [-42.27730877423707, 172.63916015625],
    zoom: 6, 
    zoomControl: false,  // dont add the zoom overlay (it is added by default)
    loaderControl: false //dont show tiles loader
  };

  cartodb.createVis('map', 'http://kmytty.cartodb.com/api/v2/viz/183b1800-57a8-11e3-b975-69eedfb9ce6c/viz.json', options)
    .done(function(vis, layers) {
      // there are two layers, base layer and points layer
      var sublayer = layers[1].getSubLayer(0);
      sublayer.set({ 'interactivity': ['cartodb_id', 'name_to_display', 'description'] });

      // Set the custom infowindow template defined on the html
      sublayer.infowindow.set('template', $('#infowindow_template').html());

      // add the tooltip show when hover on the point
      vis.addOverlay({
        type: 'tooltip',
        template: '<p>{{name_to_display}}</p>'
      });

      vis.addOverlay({
        type: 'infobox',
        template: '<h3>{{name_to_display}}</h3><p>{{description}}</p>',
        width: 400,
        position: 'bottom|right'
      });

    });

}

window.onload = main;