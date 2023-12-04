var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdminBatasadmin_1 = new ol.format.GeoJSON();
var features_BatasAdminBatasadmin_1 = format_BatasAdminBatasadmin_1.readFeatures(json_BatasAdminBatasadmin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdminBatasadmin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdminBatasadmin_1.addFeatures(features_BatasAdminBatasadmin_1);
var lyr_BatasAdminBatasadmin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdminBatasadmin_1, 
                style: style_BatasAdminBatasadmin_1,
                interactive: true,
    title: 'Batas Admin — Batas admin<br />\
    <img src="styles/legend/BatasAdminBatasadmin_1_0.png" /> 1741,27275255<br />\
    <img src="styles/legend/BatasAdminBatasadmin_1_1.png" /> 3016,25380414<br />\
    <img src="styles/legend/BatasAdminBatasadmin_1_2.png" /> <br />'
        });
var format_OutputPolygon_2 = new ol.format.GeoJSON();
var features_OutputPolygon_2 = format_OutputPolygon_2.readFeatures(json_OutputPolygon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutputPolygon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutputPolygon_2.addFeatures(features_OutputPolygon_2);
var lyr_OutputPolygon_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OutputPolygon_2, 
                style: style_OutputPolygon_2,
                interactive: true,
    title: 'Output Polygon<br />\
    <img src="styles/legend/OutputPolygon_2_0.png" /> 400,0000000<br />\
    <img src="styles/legend/OutputPolygon_2_1.png" /> 800,0000000<br />\
    <img src="styles/legend/OutputPolygon_2_2.png" /> 1200,0000000<br />\
    <img src="styles/legend/OutputPolygon_2_3.png" /> <br />'
        });
var format_Cleanedjaringanjalan_3 = new ol.format.GeoJSON();
var features_Cleanedjaringanjalan_3 = format_Cleanedjaringanjalan_3.readFeatures(json_Cleanedjaringanjalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cleanedjaringanjalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cleanedjaringanjalan_3.addFeatures(features_Cleanedjaringanjalan_3);
var lyr_Cleanedjaringanjalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cleanedjaringanjalan_3, 
                style: style_Cleanedjaringanjalan_3,
                interactive: true,
                title: '<img src="styles/legend/Cleanedjaringanjalan_3.png" /> Cleaned jaringan jalan'
            });
var format_Reprojectedjaringanjalan_4 = new ol.format.GeoJSON();
var features_Reprojectedjaringanjalan_4 = format_Reprojectedjaringanjalan_4.readFeatures(json_Reprojectedjaringanjalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojectedjaringanjalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojectedjaringanjalan_4.addFeatures(features_Reprojectedjaringanjalan_4);
var lyr_Reprojectedjaringanjalan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojectedjaringanjalan_4, 
                style: style_Reprojectedjaringanjalan_4,
                interactive: true,
                title: '<img src="styles/legend/Reprojectedjaringanjalan_4.png" /> Reprojected jaringan jalan'
            });
var format_TapakBangunantapakbangunan_5 = new ol.format.GeoJSON();
var features_TapakBangunantapakbangunan_5 = format_TapakBangunantapakbangunan_5.readFeatures(json_TapakBangunantapakbangunan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TapakBangunantapakbangunan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TapakBangunantapakbangunan_5.addFeatures(features_TapakBangunantapakbangunan_5);
var lyr_TapakBangunantapakbangunan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TapakBangunantapakbangunan_5, 
                style: style_TapakBangunantapakbangunan_5,
                interactive: true,
                title: '<img src="styles/legend/TapakBangunantapakbangunan_5.png" /> Tapak Bangunan — tapak bangunan'
            });
var format_Fixedgeometries_6 = new ol.format.GeoJSON();
var features_Fixedgeometries_6 = format_Fixedgeometries_6.readFeatures(json_Fixedgeometries_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fixedgeometries_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fixedgeometries_6.addFeatures(features_Fixedgeometries_6);
var lyr_Fixedgeometries_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fixedgeometries_6, 
                style: style_Fixedgeometries_6,
                interactive: true,
    title: 'Fixed geometries<br />\
    <img src="styles/legend/Fixedgeometries_6_0.png" /> 400<br />\
    <img src="styles/legend/Fixedgeometries_6_1.png" /> 800<br />\
    <img src="styles/legend/Fixedgeometries_6_2.png" /> 1200<br />\
    <img src="styles/legend/Fixedgeometries_6_3.png" /> <br />'
        });
var format_Servicearealines_7 = new ol.format.GeoJSON();
var features_Servicearealines_7 = format_Servicearealines_7.readFeatures(json_Servicearealines_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_7.addFeatures(features_Servicearealines_7);
var lyr_Servicearealines_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearealines_7, 
                style: style_Servicearealines_7,
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_7.png" /> Service area (lines)'
            });
var format_Reprojectedhalte_8 = new ol.format.GeoJSON();
var features_Reprojectedhalte_8 = format_Reprojectedhalte_8.readFeatures(json_Reprojectedhalte_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojectedhalte_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojectedhalte_8.addFeatures(features_Reprojectedhalte_8);
var lyr_Reprojectedhalte_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojectedhalte_8, 
                style: style_Reprojectedhalte_8,
                interactive: true,
    title: 'Reprojected halte<br />\
    <img src="styles/legend/Reprojectedhalte_8_0.png" /> Halte Bundaran ITS Trans Semanggi<br />\
    <img src="styles/legend/Reprojectedhalte_8_1.png" /> Halte Galaxy 1<br />\
    <img src="styles/legend/Reprojectedhalte_8_2.png" /> Halte Galaxy 2<br />\
    <img src="styles/legend/Reprojectedhalte_8_3.png" /> Halte Gramedia Manyar<br />\
    <img src="styles/legend/Reprojectedhalte_8_4.png" /> Halte ITATS<br />\
    <img src="styles/legend/Reprojectedhalte_8_5.png" /> Halte ITS<br />\
    <img src="styles/legend/Reprojectedhalte_8_6.png" /> Halte Kalijudan 1<br />\
    <img src="styles/legend/Reprojectedhalte_8_7.png" /> Halte Kalijudan 2<br />\
    <img src="styles/legend/Reprojectedhalte_8_8.png" /> Halte Kejawan Putih<br />\
    <img src="styles/legend/Reprojectedhalte_8_9.png" /> Halte Kertajaya Indah<br />\
    <img src="styles/legend/Reprojectedhalte_8_10.png" /> Halte Klampis<br />\
    <img src="styles/legend/Reprojectedhalte_8_11.png" /> Halte KONI Jatim<br />\
    <img src="styles/legend/Reprojectedhalte_8_12.png" /> Halte KONI MERR<br />\
    <img src="styles/legend/Reprojectedhalte_8_13.png" /> Halte Kopertis<br />\
    <img src="styles/legend/Reprojectedhalte_8_14.png" /> Halte Manyar Kertoadi (Halte Kertajaya Indah 2)<br />\
    <img src="styles/legend/Reprojectedhalte_8_15.png" /> Halte Mulyorejo<br />\
    <img src="styles/legend/Reprojectedhalte_8_16.png" /> Halte Mulyorejo 2<br />\
    <img src="styles/legend/Reprojectedhalte_8_17.png" /> Halte Park and Ride Arief Rahman Hakim<br />\
    <img src="styles/legend/Reprojectedhalte_8_18.png" /> Halte PENS<br />\
    <img src="styles/legend/Reprojectedhalte_8_19.png" /> Halte PENS 1<br />\
    <img src="styles/legend/Reprojectedhalte_8_20.png" /> Halte RS Haji 1<br />\
    <img src="styles/legend/Reprojectedhalte_8_21.png" /> Halte RS Haji 2<br />\
    <img src="styles/legend/Reprojectedhalte_8_22.png" /> Halte RSIA 1<br />\
    <img src="styles/legend/Reprojectedhalte_8_23.png" /> Halte RSIA 2<br />\
    <img src="styles/legend/Reprojectedhalte_8_24.png" /> Halte Samsat Manyar Kertoarjo<br />\
    <img src="styles/legend/Reprojectedhalte_8_25.png" /> Halte Semampir<br />\
    <img src="styles/legend/Reprojectedhalte_8_26.png" /> Halte Semolowaru 1<br />\
    <img src="styles/legend/Reprojectedhalte_8_27.png" /> Halte Semolowaru 2<br />\
    <img src="styles/legend/Reprojectedhalte_8_28.png" /> Halte Sentra UKM Merr<br />\
    <img src="styles/legend/Reprojectedhalte_8_29.png" /> Halte SMPN 19<br />\
    <img src="styles/legend/Reprojectedhalte_8_30.png" /> Halte Superindo<br />\
    <img src="styles/legend/Reprojectedhalte_8_31.png" /> Halte Unair 1<br />\
    <img src="styles/legend/Reprojectedhalte_8_32.png" /> Halte Unair 2<br />\
    <img src="styles/legend/Reprojectedhalte_8_33.png" /> Halte Universitas Katolik Darma Cendika<br />\
    <img src="styles/legend/Reprojectedhalte_8_34.png" /> <br />'
        });

lyr_Positron_0.setVisible(true);lyr_BatasAdminBatasadmin_1.setVisible(true);lyr_OutputPolygon_2.setVisible(true);lyr_Cleanedjaringanjalan_3.setVisible(true);lyr_Reprojectedjaringanjalan_4.setVisible(true);lyr_TapakBangunantapakbangunan_5.setVisible(true);lyr_Fixedgeometries_6.setVisible(true);lyr_Servicearealines_7.setVisible(true);lyr_Reprojectedhalte_8.setVisible(true);
var layersList = [lyr_Positron_0,lyr_BatasAdminBatasadmin_1,lyr_OutputPolygon_2,lyr_Cleanedjaringanjalan_3,lyr_Reprojectedjaringanjalan_4,lyr_TapakBangunantapakbangunan_5,lyr_Fixedgeometries_6,lyr_Servicearealines_7,lyr_Reprojectedhalte_8];
lyr_BatasAdminBatasadmin_1.set('fieldAliases', {'fid': 'fid', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'Shape_Area': 'Shape_Area', 'UP': 'UP', });
lyr_OutputPolygon_2.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_Cleanedjaringanjalan_3.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', });
lyr_Reprojectedjaringanjalan_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_TapakBangunantapakbangunan_5.set('fieldAliases', {'fid': 'fid', 'latitude': 'latitude', 'longitude': 'longitude', 'area_in_me': 'area_in_me', 'confidence': 'confidence', 'full_plus_': 'full_plus_', 'unit': 'unit', 'Desc_fid': 'Desc_fid', 'Desc_Name': 'Desc_Name', });
lyr_Fixedgeometries_6.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', 'cost': 'cost', });
lyr_Servicearealines_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'type': 'type', 'start': 'start', });
lyr_Reprojectedhalte_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Deskripsi Halte_Koridor': 'Deskripsi Halte_Koridor', 'Deskripsi Halte_Jenis': 'Deskripsi Halte_Jenis', 'Deskripsi Halte_Layanan': 'Deskripsi Halte_Layanan', 'Deskripsi Halte_Provider': 'Deskripsi Halte_Provider', });
lyr_BatasAdminBatasadmin_1.set('fieldImages', {'fid': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Area': 'TextEdit', 'UP': 'TextEdit', });
lyr_OutputPolygon_2.set('fieldImages', {'id': 'Range', 'cost_level': 'TextEdit', });
lyr_Cleanedjaringanjalan_3.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', });
lyr_Reprojectedjaringanjalan_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'smoothness': 'TextEdit', });
lyr_TapakBangunantapakbangunan_5.set('fieldImages', {'fid': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'area_in_me': 'TextEdit', 'confidence': 'TextEdit', 'full_plus_': 'TextEdit', 'unit': '', 'Desc_fid': 'TextEdit', 'Desc_Name': 'TextEdit', });
lyr_Fixedgeometries_6.set('fieldImages', {'id': 'Range', 'cost_level': 'TextEdit', 'cost': 'Range', });
lyr_Servicearealines_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Reprojectedhalte_8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Deskripsi Halte_Koridor': 'TextEdit', 'Deskripsi Halte_Jenis': 'TextEdit', 'Deskripsi Halte_Layanan': 'TextEdit', 'Deskripsi Halte_Provider': 'TextEdit', });
lyr_BatasAdminBatasadmin_1.set('fieldLabels', {'fid': 'no label', 'FID_Batas_': 'no label', 'WADMKC': 'no label', 'Shape_Area': 'no label', 'UP': 'no label', });
lyr_OutputPolygon_2.set('fieldLabels', {'id': 'no label', 'cost_level': 'no label', });
lyr_Cleanedjaringanjalan_3.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', });
lyr_Reprojectedjaringanjalan_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_TapakBangunantapakbangunan_5.set('fieldLabels', {'fid': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'area_in_me': 'no label', 'confidence': 'no label', 'full_plus_': 'no label', 'unit': 'no label', 'Desc_fid': 'no label', 'Desc_Name': 'inline label', });
lyr_Fixedgeometries_6.set('fieldLabels', {'id': 'no label', 'cost_level': 'no label', 'cost': 'no label', });
lyr_Servicearealines_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Reprojectedhalte_8.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'Deskripsi Halte_Koridor': 'inline label', 'Deskripsi Halte_Jenis': 'inline label', 'Deskripsi Halte_Layanan': 'inline label', 'Deskripsi Halte_Provider': 'inline label', });
lyr_Reprojectedhalte_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});