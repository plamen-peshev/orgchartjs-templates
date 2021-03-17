window.onload = function () {
  OrgChart.templates.split = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.split.size = [10, 10];
  OrgChart.templates.split.node = '<circle cx="5" cy="5" r="5" fill="none" stroke-width="1" stroke="#ED9422"></circle>';

  OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.myTemplate.size = [140, 180];
  OrgChart.templates.myTemplate.node = '<rect x="0" y="0" width="140" height="180"  fill="#044B94" fill-opacity="0" stroke="none"></rect>' +
      '<circle cx="70" cy="60" r="60" fill="#4D4D4D"></circle>' +
      '<circle cx="70" cy="-25" r="8" fill="white" stroke-width="1" stroke="#ED9422"></circle>' +
      '<circle cx="70" cy="-25" r="3.5" fill="#ED9422"></circle>' +
      '<circle cx="70" cy="60" fill="#ffffff" r="40"></circle>' +
      '<circle stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD" cx="70" cy="40" r="13"></circle>' +
      '<path d="M40,83 C40,49 100,49 100,83" stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD"></path>';

  OrgChart.templates.myTemplate.ripple = {
    radius: 60,
    color: "#775E3B",
    rect: { x: 10, y: 0, width: 120, height: 120 }
  };

  OrgChart.templates.myTemplate.img_0 = 
    '<clipPath id="ulaImg">'
    + '<circle cx="70" cy="60" r="40"></circle>'
    + '</clipPath>' 
    + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="30" y="20" width="80" height="80">'
    + '</image>';

  OrgChart.templates.myTemplate.field_0 = '<text style="font-size: 16px;" fill="#ED9422" x="70" y="150" text-anchor="middle">{val}</text>';
  OrgChart.templates.myTemplate.field_1 = '<text style="font-size: 10px;" fill="grey" x="70" y="170" text-anchor="middle">{val}</text>';

  OrgChart.templates.myTemplate.link = 
    '<path stroke-linejoin="round" stroke="#ED9422" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

  OrgChart.templates.myTemplate.plus = ''; 

OrgChart.templates.myTemplate.minus = '';


  OrgChart.templates.myTemplateRoot = Object.assign({}, OrgChart.templates.myTemplate);
  OrgChart.templates.myTemplateRoot.node = '<rect x="0" y="0" width="140" height="180"  fill="#044B94" fill-opacity="0" stroke="none"></rect>' +
      '<circle cx="70" cy="60" r="60" fill="#4D4D4D"></circle>' +
      '<circle cx="70" cy="60" fill="#ffffff" r="40"></circle>' +
      '<circle stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD" cx="70" cy="40" r="13"></circle>' +
      '<path d="M40,83 C40,49 100,49 100,83" stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD"></path>';

  OrgChart.templates.myTemplateOrange = Object.assign({}, OrgChart.templates.myTemplate);
  OrgChart.templates.myTemplateOrange.node = '<rect x="0" y="0" width="140" height="180"  fill="#044B94" fill-opacity="0" stroke="none"></rect>' +
      '<circle cx="70" cy="60" r="60" fill="#ED9422"></circle>' +
      '<circle cx="70" cy="-25" r="8" fill="white" stroke-width="1" stroke="#ED9422"></circle>' +
      '<circle cx="70" cy="-25" r="3.5" fill="#ED9422"></circle>' +
      '<circle cx="70" cy="60" fill="#ffffff" r="40"></circle>' +
      '<circle stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD" cx="70" cy="40" r="13"></circle>' +
      '<path d="M40,83 C40,49 100,49 100,83" stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD"></path>';

  OrgChart.templates.myTemplateOrange.ripple = {
    radius: 60,
    color: "#4D4D4D",
    rect: { x: 10, y: 0, width: 120, height: 120 }
  };

  OrgChart.templates.myTemplateBrown = Object.assign({}, OrgChart.templates.myTemplate);
  OrgChart.templates.myTemplateBrown.node = '<rect x="0" y="0" width="140" height="180"  fill="#044B94" fill-opacity="0" stroke="none"></rect>' +
      '<circle cx="70" cy="60" r="60" fill="#775E3B"></circle>' +
      '<circle cx="70" cy="-25" r="8" fill="white" stroke-width="1" stroke="#ED9422"></circle>' +
      '<circle cx="70" cy="-25" r="3.5" fill="#ED9422"></circle>' +
      '<circle cx="70" cy="60" fill="#ffffff" r="40"></circle>' +
      '<circle stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD" cx="70" cy="40" r="13"></circle>' +
      '<path d="M40,83 C40,49 100,49 100,83" stroke="#D7DBDD" stroke-width="3" fill="#D7DBDD"></path>';
  
  OrgChart.templates.myTemplateBrown.ripple = {
    radius: 60,
    color: "#ED9422",
    rect: { x: 10, y: 0, width: 120, height: 120 }
  };


  var chart = new OrgChart(document.getElementById("tree"), {
    template: "myTemplate",
    levelSeparation: 50,
    siblingSeparation: 10,
    nodeBinding: {
          field_0: "name",
          field_1: "title",
          img_0: "img"
    },
    tags: {
      root: {
        template: "myTemplateRoot"
      },
      orange: {
        template: "myTemplateOrange"
      }, 
      brown: {
        template: "myTemplateBrown"
      }
    }
   
});

nodes = [
        { id: 1, tags: ["root"], name: "Jack Hill", title: "CEO" },
        { id: 9, pid: 1, tags: ["assistant", "root"], title: "Sales Manager", name: "Lexie Cole" },
        { id: 2, pid: 1, tags: ["orange"], title: "Sales Manager", name: "Lexie Cole" },
        { id: 3, pid: 1, name: "Janae Barrett", title: "Dev Manager" },
        { id: 4, pid: 2, tags: ["orange"], name: "Aaliyah Webb", title: "Sales" },
        { id: 5, pid: 2, tags: ["orange"], name: "Elliot Ross", title: "Sales" },
        { id: 6, pid: 3, tags: ["orange"], name: "Anahi Gordon", title: "Developer" },
        { id: 7, pid: 3, tags: ["brown"], name: "Knox Macias", title: "Developer"},
        { id: 8, pid: 2, tags: ["brown"], name: "Nash Ingram", title: "Sales"}
    ];

    chart.load(nodes);
}