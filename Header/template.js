window.onload = function () {
        
  OrgChart.templates.greyTemplate = Object.assign({}, OrgChart.templates.ula);
  OrgChart.templates.greyTemplate.size = [250, 110]; // [250, 105] if you need plus-minus button
  OrgChart.templates.greyTemplate.node = 
    '<rect x="0" y="5" height="100" width="{w}" fill="#ffffff" stroke-width="1" stroke="#ccc" rx="5" ry="5"></rect>' + 
    '<rect x="0" y="5" height="35" width="{w}" fill="#ccc" stroke-width="1" stroke="#ccc" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="40" x2="250" y2="40" stroke-width="5" stroke="#ccc"></line>';
  OrgChart.templates.greyTemplate.link = '<path stroke-linejoin="round" stroke="#616161" stroke-width="1px" fill="none" d="{edge}" />';
  OrgChart.templates.greyTemplate.field_0 = '<text width="230" style="font-size: 18px;" fill="#64696b" x="125" y="30" text-anchor="middle">{val}</text>';
  OrgChart.templates.greyTemplate.field_1 = '<text width="230" style="font-size: 18px;" font-weight="bold" fill="#64696b" x="125" y="65" text-anchor="middle">{val}</text>';
  OrgChart.templates.greyTemplate.field_2 = '<text width="230" style="font-size: 18px;" fill="#64696b" x="125" y="90" text-anchor="middle">{val}</text>';
  OrgChart.templates.greyTemplate.plus = '';
  OrgChart.templates.greyTemplate.minus = '';
    + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line>'
    + '<line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#aeaeae"></line>', 
  OrgChart.templates.redTemplate = Object.assign({}, OrgChart.templates.greyTemplate);
  OrgChart.templates.redTemplate.node = 
    '<rect x="0" y="5" height="100" width="{w}" fill="#ffffff" stroke-width="1" stroke="#e53835" rx="5" ry="5"></rect>' + 
    '<rect x="0" y="5" height="35" width="{w}" fill="#e53835" stroke-width="1" stroke="#e53835" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="40" x2="250" y2="40" stroke-width="5" stroke="#e53835"></line>';
  OrgChart.templates.redTemplate.field_0 = '<text width="230" style="font-size: 18px;" fill="white" x="125" y="30" text-anchor="middle">{val}</text>';
  OrgChart.templates.greenTemplate = Object.assign({}, OrgChart.templates.redTemplate);
  OrgChart.templates.greenTemplate.node = 
    '<rect x="0" y="5" height="100" width="{w}" fill="#ffffff" stroke-width="1" stroke="#009933" rx="5" ry="5"></rect>' + 
    '<rect x="0" y="5" height="35" width="{w}" fill="#009933" stroke-width="1" stroke="#009933" rx="5" ry="5"></rect>' +
    '<line x1="0" y1="40" x2="250" y2="40" stroke-width="5" stroke="#009933"></line>';

  var chart = new OrgChart(document.getElementById("tree"), {
    enableDragDrop: true,
    template: "greyTemplate",
  nodeBinding: {
        field_0: "name",
        field_1: "title",
        field_2: "info"
    },
    tags: {
      "red": {
        template: "redTemplate"
      },
      "green": {
        template: "greenTemplate"
      }
    }
  
});

nodes = [
  { id: 1, name: "Denny Curtis", title: "CEO"},
        { id: 2, pid: 1, name: "Tanner May", title: "Sales Manager"},
        { id: 3, pid: 1, tags: ["red"], name: "Caden Ellison", title: "Dev Manager", info: "(Alternate Title)"},
        { id: 4, pid: 2, tags: ["green"], name: "Elliot Patel", title: "Sales"},
        { id: 5, pid: 2, tags: ["red"], name: "Lynn Hussain", title: "Sales"}
    ];

 
    chart.load(nodes);

}