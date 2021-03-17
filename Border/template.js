window.onload = function () {
      
  OrgChart.templates.split = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.split.size = [10, 10];
  OrgChart.templates.split.node = '<circle cx="5" cy="5" r="5" fill="none" stroke-width="1" stroke="#ED9422"></circle>';

  OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.myTemplate.size = [200, 85];
  OrgChart.templates.myTemplate.node = 
      '<rect x="0" y="0" height="85" width="200" fill="#33a648" rx="15" ry="15"></rect>' +
      '<rect fill="url(#grad1)" x="10" y="5" height="75" width="180" fill="#f0eeef" rx="15" ry="15"></rect>' +
      '<rect fill="url(#grad2)" x="20" y="10" height="65" width="160" fill="white" rx="15" ry="15"></rect>' +
      '<circle cx="100" cy="-25" r="8" fill="white" stroke-width="1" stroke="#ED9422"></circle>' +
      '<circle cx="100" cy="-25" r="3.5" fill="#ED9422"></circle>';


  
  OrgChart.templates.myTemplate.defs = 
    '<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">' +
      '<stop offset="0%" style="stop-color:rgb(251,251,251);stop-opacity:1" />' +
      '<stop offset="100%" style="stop-color:rgb(222,222,222);stop-opacity:1" />' +
    '</linearGradient>' +
    '<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">' +
      '<stop offset="0%" style="stop-color:rgb(222,222,222);stop-opacity:1" />' +
      '<stop offset="100%" style="stop-color:rgb(251,251,251);stop-opacity:1" />' +
    '</linearGradient>';

    OrgChart.templates.myTemplate.ripple = {
      radius: 10,
      color: "#33a648",
      rect: { x: 0, y: 0, width: 200, height: 85 }
    };


  OrgChart.templates.myTemplate.field_0 = '<text style="font-size: 16px;" fill="#ED9422" x="100" y="30" text-anchor="middle">{val}</text>';
  OrgChart.templates.myTemplate.field_1 = '<text style="font-size: 12px;" fill="grey" x="100" y="50" text-anchor="middle">{val}</text>';
  OrgChart.templates.myTemplate.field_2 = '<text style="font-size: 10px;" fill="#ED9422" x="100" y="70" text-anchor="middle">{val}</text>';


  OrgChart.templates.myTemplate.plus = ''; 

OrgChart.templates.myTemplate.minus = '';


  OrgChart.templates.myTemplateRoot = Object.assign({}, OrgChart.templates.myTemplate);

  OrgChart.templates.myTemplateRoot.node =         
      '<rect x="0" y="0" height="85" width="200" fill="#33a648" rx="15" ry="15"></rect>' +
      '<rect fill="url(#grad1)" x="10" y="5" height="75" width="180" fill="#f0eeef" rx="15" ry="15"></rect>' +
      '<rect fill="url(#grad2)" x="20" y="10" height="65" width="160" fill="white" rx="15" ry="15"></rect>';
    
    

  OrgChart.templates.myTemplateOrange = Object.assign({}, OrgChart.templates.myTemplate);
  OrgChart.templates.myTemplateOrange.node = 
      '<rect x="0" y="0" height="85" width="200" fill="#ED9422" rx="15" ry="15"></rect>' +
      '<rect fill="url(#grad1)" x="10" y="5" height="75" width="180" fill="#f0eeef" rx="15" ry="15"></rect>' +
      '<rect fill="url(#grad2)" x="20" y="10" height="65" width="160" fill="white" rx="15" ry="15"></rect>' +
      '<circle cx="100" cy="-25" r="8" fill="white" stroke-width="1" stroke="#ED9422"></circle>' +
      '<circle cx="100" cy="-25" r="3.5" fill="#ED9422"></circle>';
  

  OrgChart.templates.myTemplateOrange.ripple = {
      radius: 10,
      color: "#ED9422",
      rect: { x: 0, y: 0, width: 200, height: 85 }
  };

  OrgChart.templates.myTemplateBrown = Object.assign({}, OrgChart.templates.myTemplate);
  OrgChart.templates.myTemplateBrown.node = 
  '<rect x="0" y="0" height="85" width="200" fill="#775E3B" rx="15" ry="15"></rect>' +
      '<rect fill="url(#grad1)" x="10" y="5" height="75" width="180" fill="#f0eeef" rx="15" ry="15"></rect>' +
      '<rect fill="url(#grad2)" x="20" y="10" height="65" width="160" fill="white" rx="15" ry="15"></rect>' +
      '<circle cx="100" cy="-25" r="8" fill="white" stroke-width="1" stroke="#ED9422"></circle>' +
      '<circle cx="100" cy="-25" r="3.5" fill="#ED9422"></circle>';
  
  
  OrgChart.templates.myTemplateBrown.ripple = {
      radius: 10,
      color: "#775E3B",
      rect: { x: 0, y: 0, width: 200, height: 85 }
  };


  var chart = new OrgChart(document.getElementById("tree"), {
    template: "myTemplate",
    levelSeparation: 50,
    siblingSeparation: 50,
    nodeBinding: {
          field_0: "name",
          field_1: "title",
          field_2: "data",
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
        { id: 3, pid: 1, name: "Janae Barrett", title: "Dev Manager", data: "some dtata here" },
        { id: 4, pid: 2, tags: ["orange"], name: "Aaliyah Webb", title: "Sales", data: "some data here" },
        { id: 5, pid: 2, tags: ["orange"], name: "Elliot Ross", title: "Sales" },
        { id: 6, pid: 3, tags: ["orange"], name: "Anahi Gordon", title: "Developer" },
        { id: 7, pid: 3, tags: ["brown"], name: "Knox Macias", title: "Developer"},
        { id: 8, pid: 2, tags: ["brown"], name: "Nash Ingram", title: "Sales"}
    ];

    chart.load(nodes);
}