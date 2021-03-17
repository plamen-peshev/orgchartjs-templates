window.onload = function () {

  OrgChart.templates.white = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.white.size = [180, 172];

  OrgChart.templates.white.node =  '<rect x="0" y="0" rx="5" ry="5" filter="url(#shadow1)"  height="172" width="180" fill="white" stroke-width="1" stroke="#aeaeae"></rect>' +
  '<line x1="0" y1="40" x2="180" y2="40" stroke-width="0.8" stroke="#aeaeae" />'; 

   OrgChart.templates.white.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="shadow1">' + 
'<feOffset dx="1" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1" />' + 
'<feColorMatrix values="0 0 0 1 0   0 0 0 1 0   0 0 0 1 0  0 0 0 0.5 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" />' +
'<feMerge>' + 
'<feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

OrgChart.templates.white.ripple = {
    radius: 0,
    color: "#e6e6e6",
    rect: null
};


OrgChart.templates.white.img_0 = 
  '<clipPath id="{randId}"><circle  cx="90" cy="80" r="21"></circle></clipPath>' +
  '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="50"  width="60" height="60"></image>';

  OrgChart.templates.white.field_0 = '<text width="180" class="field_0"  style="font-size: 14px;" font-weight="bold" fill="#353535" x="90" y="130" text-anchor="middle">{val}</text>';
  OrgChart.templates.white.field_1 = '<text width="180" class="field_1"  style="font-size: 14px;" fill="#5b5b5b" x="90" y="150" text-anchor="middle">{val}</text>';
  OrgChart.templates.white.field_2 = '<text width="180" class="field_2"  style="font-size: 14px;" font-weight="bold" fill="#353535" x="90" y="25" text-anchor="middle">{val}</text>';
 
  OrgChart.templates.white.plus = '';
  OrgChart.templates.white.minus = '';
  OrgChart.templates.white.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" control-node-menu-id="{id}">' +
   
    '<line x1="-65" y1="51.5" x2="-52" y2="51.5" style="stroke:#aeaeae;stroke-width:1.5" />' +
    '<line x1="-65" y1="55" x2="-52" y2="55" style="stroke:#aeaeae;stroke-width:1.5" />' +
    '<line x1="-65" y1="58.5" x2="-52" y2="58.5" style="stroke:#aeaeae;stroke-width:1.5" />' +
    '<rect x="-70" y="44" fill="#fff" fill-opacity="0" width="22" height="22"></rect>' + 
    
    '</g>';

  OrgChart.templates.circle = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.circle.size = [30, 30];
  OrgChart.templates.circle.node = 
            '<circle cx="15" cy="0" r="17" fill="#fff" stroke-width="1" stroke="#aeaeae"></circle>';
  OrgChart.templates.circle.img_0 = '';
  OrgChart.templates.circle.field_0 = '<text style="font-size: 14px;" font-weight="bold" fill="#353535" x="15" y="5" text-anchor="middle">{val}</text>';
  OrgChart.templates.circle.field_1 = '';
  OrgChart.templates.circle.field_2 = '';

  OrgChart.templates.circle.plus = '<circle cx="15" cy="-15" r="15" fill="#ffffff" opacity="0" stroke="#aeaeae" stroke-width="1"></circle>'
    + '<line x1="4" y1="-15" x2="26" y2="-15" stroke-width="1" opacity="0" stroke="#aeaeae"></line>'
    + '<line x1="15" y1="-26" x2="15" y2="-5" stroke-width="1" opacity="0" stroke="#aeaeae"></line>';
    
  OrgChart.templates.circle.minus = '<circle cx="15" cy="-15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="0"></circle>'
    + '<line x1="4" y1="-15" x2="26" y2="-15" stroke-width="1" stroke="#aeaeae"></line>';

    OrgChart.templates.circle.linkAdjuster = {
      fromX: 0,
      fromY: -17,
      toX: 0,
      toY: 0
    }

  OrgChart.templates.white.plus = '';
  OrgChart.templates.white.minus = '';

  OrgChart.templates.whiteUnder = Object.assign({}, OrgChart.templates.white);

  OrgChart.templates.whiteUnder.linkAdjuster = {
    fromX: 0,
    fromY: 0,
    toX: 0,
    toY: -13
  }

  

  var expand = function (id) {
        var node = chart.getNode(id);
        var childId = node.childrenIds[0];
        var childNode = chart.getNode(childId);
        chart.expand(childId, childNode.childrenIds);
  };

  var chart = new OrgChart(document.getElementById("tree"), {

    template: "white",
    
    nodeMenu: {
        details: { text: "Open", icon: '' },
        expand: { text: "Expand all below", icon: '', onClick: expand },
        add: { text: "Add new &nbsp &nbsp &nbsp &nbsp &nbsp <b>></b>", icon: '' }
    },

    nodeBinding: {
        field_0: "name",
        field_1: "title",
        field_2: "department",
        img_0: "img"
    },
    menu: {
      pdf: { text: "export" }
    },
    tags: {
      circle: {
        template: "circle"
      },
      whiteUnder: {
        template: "whiteUnder"
      }
      
    }
   
});

nodes = [
        { id: 1, pole: 1, name: "Denny Curtis", title: "CEO", department: "Directors", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", department: "Sales", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", department: "Development", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 1, name: "Elliot Patel", title: "Sales", department: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 1, name: "Lynn Hussain", title: "Sales", department: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 1, name: "Tanner May", title: "Developer", department: "Development", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 2, tags: ["circle"], name: "2" },
        { id: 8, pid: 4, tags: ["circle"], name: "0" },
        { id: 9, pid: 5, tags: ["circle"], name: "0" },
        { id: 10, pid: 6, tags: ["circle"], name: "0" },
        { id: 11, pid: 7, tags: ["whiteUnder"], name: "James Barnett", title: "Sales Consultant", department: "Sales", img: "https://cdn.balkan.app/shared/8.jpg" },
        { id: 12, pid: 7, tags: ["whiteUnder"], name: "Denny May", title: "Sales Consultant", department: "Sales", img: "https://cdn.balkan.app/shared/9.jpg" }
    ];

    var idToAdd = 100;


    chart.on('add', function (sender, node) {
      var currentNode = chart.getNode(node.pid);
      if (currentNode.level != 0) {
        if (currentNode.childrenIds.length == 1) {
          var addUnderNode = currentNode.childrenIds[0];
          chart.add({ id: node.id, pid: addUnderNode, name: "Name", title: "Title", tags: ["whiteUnder"] });
          chart.draw();
          return false;
        }
        else {
          node.tags = ["circle"];
          node.name = 1;
          chart.add(node);          
          chart.add({ id: idToAdd, pid: node.id, name: "Name", title: "Title", tags: ["whiteUnder"] });
          chart.draw();
          idToAdd++;
          return false;
        }
      }
      
     });  

    chart.load(nodes);
}