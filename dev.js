$(function() {

  var map = new OpenLayers.Map('map');

  var poly = new OpenLayers.Layer.Vector();
  var base = new OpenLayers.Layer.WMS(
    'OpenLayers WMS',
    'http://vmap0.tiles.osgeo.org/wms/vmap0?', {
      layers: 'basic'
    }
  );

  map.addLayers([base, poly]);

  var geo = new OpenLayers.Control.DrawFeature(
    poly, OpenLayers.Handler.Geometry
  );

  map.addControl(geo);
  map.setCenter([0, 0], 3);

});
