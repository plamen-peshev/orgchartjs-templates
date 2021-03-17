window.onload = function () {

  var colors = ['#aaaaaa', '#bbaaaa', '#ccaaaa', '#ddaaaa', '#eeaaaa', '#ffaaaa', '#ffff77'];
  OrgChart.templates.aTemplate = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.aTemplate.size = [70, 20];
  OrgChart.templates.aTemplate.node = 
    '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[0] + '""></rect>';
  OrgChart.templates.aTemplate.field_0 = '<text width="70" style="font-size: 12px;" fill="#1a1a1a" x="35" y="14" text-anchor="middle">{val}</text>';
  OrgChart.templates.aTemplate.plus = '';
  OrgChart.templates.aTemplate.link = '<path stroke-linejoin="round" stroke="#eeeedd" stroke-width="1px" fill="none" d="{curve}" />';
  OrgChart.templates.aTemplate.minus = '';

  OrgChart.templates.bTemplate = Object.assign({}, OrgChart.templates.aTemplate);
  OrgChart.templates.bTemplate.node = 
    '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[1] + '""></rect>';
  OrgChart.templates.cTemplate = Object.assign({}, OrgChart.templates.aTemplate);
  OrgChart.templates.cTemplate.node = 
    '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[2] + '""></rect>';
  OrgChart.templates.dTemplate = Object.assign({}, OrgChart.templates.aTemplate);
  OrgChart.templates.dTemplate.node = 
    '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[3] + '""></rect>';
  OrgChart.templates.eTemplate = Object.assign({}, OrgChart.templates.aTemplate);
  OrgChart.templates.eTemplate.node = 
    '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[4] + '""></rect>';
  OrgChart.templates.fTemplate = Object.assign({}, OrgChart.templates.aTemplate);
  OrgChart.templates.fTemplate.node = 
    '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[5] + '""></rect>';
  OrgChart.templates.yTemplate = Object.assign({}, OrgChart.templates.aTemplate);
  OrgChart.templates.yTemplate.node = 
    '<rect x="0" y="0" height="{h}" width="{w}" fill="' + colors[6] + '""></rect>';
  OrgChart.templates.yTemplate.link = '<path stroke-linejoin="round" stroke="#eeeedd" stroke-width="3px" fill="none" d="{curve}" />';

  var chart = new OrgChart(document.getElementById("tree"), {
    nodeMouseClick: OrgChart.action.none,
    template: 'aTemplate',
    nodeBinding: {
        field_0: "value"
    },
    tags: {
      "y": {
        template: "yTemplate"
      },
      "a": {
        template: "aTemplate"
      },
      "b": {
        template: "bTemplate"
      },
      "c": {
        template: "cTemplate"
      },
      "d": {
        template: "dTemplate"
      },
      "e": {
        template: "eTemplate"
      },
      "f": {
        template: "fTemplate"
      },
    }
  
});

var nodes = [
  { id: 1, tags: ["c"], value: 0.2 },
        { id: 2, pid: 1, tags: ["c"], value: 1.3 },
        { id: 3, pid: 1, tags: ["d"], value: 1.25 },
        { id: 4, pid: 1, tags: ["c"], value: 1.65 },
        { id: 5, pid: 1, tags: ["c"], value: 1.130 },
        { id: 6, pid: 4, tags: ["e"], value: 2.66 },
        { id: 7, pid: 4, tags: ["f"], value: 2.83 },
        { id: 8, pid: 4, tags: ["c"], value: 2.104 },
        { id: 9, pid: 4, tags: ["e"], value: 2.109 },
        { id: 10, pid: 4, tags: ["b"], value: 2.125 },
        { id: 11, pid: 8, tags: ["c"], value: 3.105 },
        { id: 12, pid: 11, tags: ["a"], value: 4.106 },
        { id: 13, pid: 11, tags: ["a"], value: 4.107 },
        { id: 14, pid: 11, tags: ["a"], value: 4.108 },


    ];

    var highlighted = false;
    var highlightedNode = 0;
    
    
      function highlight(node){
        node.tags = ['y'];         
        chart.updateNode(node);
        if (node.pid) {
          node = chart.get(node.pid);
          highlight(node);
        }        
      }

      function unHighlight(node){
        var array = ['a','b', 'c', 'd', 'e', 'f'];
        var random = Math.floor(Math.random() * array.length);
        node.tags[0] = array[random];    
        chart.updateNode(node);
        if (node.pid) {
          node = chart.get(node.pid);
          unHighlight(node);
        }        
      }


      chart.on('click', function (sender, args) {
        var data = sender.get(args.node.id);

        if (!highlighted) {         
          highlight(data);
          highlighted = true;
          highlightedNode = args.node.id;
        }
        else if (highlightedNode != args.node.id) {
          unHighlight(sender.get(highlightedNode));
          highlight(data);
          highlighted = true;
          highlightedNode = args.node.id;
        }
        else {
          console.log(highlightedNode);
          unHighlight(sender.get(highlightedNode));
          highlightedNode = 0;
          highlighted = false;
        }

      });  


    chart.load(nodes);


}