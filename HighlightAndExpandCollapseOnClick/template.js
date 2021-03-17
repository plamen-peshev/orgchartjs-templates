window.onload = function () {
        
  OrgChart.templates.white = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.white.size = [180, 172];

  OrgChart.templates.white.node =  '<rect x="0" y="0" rx="5" ry="5" filter="url(#shadow1)"  height="172" width="180" fill="white" stroke-width="1" stroke="#2e6491"></rect>' +
  '<rect x="0" y="0" rx="5" ry="5" height="43" width="180" fill="#2e6491" stroke-width="1" stroke="#2e6491"></rect>' +
  '<line x1="0" y1="42" x2="180" y2="42" stroke-width="4" stroke="#2e6491" />' +
  '<circle cx="90" cy="80" r="30" stroke="#721e09" stroke-width="3"></circle>'; 

   OrgChart.templates.white.defs = '<filter x="-10%" y="0%" width="200%" height="200%" filterUnits="objectBoundingBox" id="shadow1">' + 
'<feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />' + 
'<feColorMatrix values="0 0 0 1 0   0 0 0 1 0   0 0 0 1 0  0 0 0 1 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" />' +
'<feMerge>' + 
'<feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

OrgChart.templates.white.link = '<path stroke-linejoin="round" stroke="#4485d9" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>';

OrgChart.templates.white.ripple = {
    radius: 0,
    color: "#e6e6e6",
    rect: null
};


OrgChart.templates.white.img_0 = 
  '<clipPath id="{randId}"><circle cx="90" cy="80" r="30"></circle></clipPath>' +
  '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="50"  width="60" height="60"></image>';

  OrgChart.templates.white.field_0 = '<text width="180" class="field_0"  style="font-size: 14px;" fill="#434343" x="90" y="135" text-anchor="middle">{val}</text>';
  OrgChart.templates.white.field_1 = '<text width="180" class="field_1"  style="font-size: 14px;" fill="#434343" x="90" y="155" text-anchor="middle">{val}</text>';
  OrgChart.templates.white.field_2 = '<text width="180" class="field_2"  style="font-size: 14px;" font-weight="bold" fill="white" x="90" y="27" text-anchor="middle">{val}</text>';

  OrgChart.templates.white.plus = "";
  OrgChart.templates.white.minus = "";

  OrgChart.templates.whiteG = Object.assign({}, OrgChart.templates.white);
  OrgChart.templates.whiteG.node =  '<rect x="0" y="0" rx="5" ry="5" filter="url(#shadow1)"  height="172" width="180" stroke-width="1" stroke="#2e6491"></rect>' +

  '<rect x="0" y="0" rx="5" ry="5" height="43" width="180" fill="#2e6491" stroke-width="1" stroke="#2e6491"></rect>' +
  '<rect x="0" y="40" rx="5" ry="5" height="132" width="180" fill="url(#grad2)" stroke-width="1" stroke="#2e6491"></rect>' +
  '<line x1="0" y1="42" x2="180" y2="42" stroke-width="4" stroke="#2e6491" />' +
  '<circle cx="90" cy="80" r="30" stroke="#721e09" stroke-width="3"></circle>'; 

  OrgChart.templates.whiteG.defs = '<filter x="-10%" y="0%" width="200%" height="200%" filterUnits="objectBoundingBox" id="shadow1">' + 
  '<feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />' + 
  '<feColorMatrix values="0 0 0 1 0   0 0 0 1 0   0 0 0 1 0  0 0 0 1 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" />' +
  '<feMerge>' + 
  '<feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>' +
  '<linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">' +
  '<stop offset="0%" style="stop-color:white;stop-opacity:1" />' +
  '<stop offset="100%" style="stop-color:#e4ecf2;stop-opacity:1" />' +
'</linearGradient>';

  var chart = new OrgChart(document.getElementById("tree"), {
    nodeMouseClick: OrgChart.action.expandCollapse,
    siblingSeparation: 30,
    template: "white",
    nodeBinding: {
        field_0: "department",
        field_1: "title",
        field_2: "name",
        img_0: "img"
    },
    tags: {
      "whiteG": {
        template: "whiteG"
      }
    }
   
});

nodes = [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", department: "Sales", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", department: "Development", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 1, name: "Elliot Patel", title: "Sales", department: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 1, name: "Lynn Hussain", title: "Sales", department: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 1, name: "Tanner May", title: "Developer", department: "Development", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 2, name: "Fran Parsons", title: "Developer", department: "Development", img: "https://cdn.balkan.app/shared/8.jpg" },
        { id: 8, pid: 4, name: "Elliot May", title: "Sales", department: "Sales", img: "https://cdn.balkan.app/shared/9.jpg" },
        { id: 10, pid: 6, name: "Elliot Scott", title: "Developer", department: "Development", img: "https://cdn.balkan.app/shared/10.jpg" }
    ];

    var highlighted = false;
    var highlightedNode = 0;
    
    
      function highlight(node){
        node.tags = ['whiteG'];         
        chart.updateNode(node);
  
      }

      function unHighlight(node){

        node.tags[0] = ['white'];    
        chart.updateNode(node);

      }

    chart.on('click', function (sender, args) {
      var data = sender.get(args.node.id);
       var childNode = sender.getNode(args.node.id).childrenIds[0];
        if (childNode) {
          var childrenAreCollapsed = sender.getNode(childNode).collapsed;
          if (!highlighted) {
            highlight(data);
            highlighted = true;
            highlightedNode = args.node.id;
            if (!childrenAreCollapsed) {
              return false;
            }
          }
          else if (highlightedNode != args.node.id) {
            unHighlight(sender.get(highlightedNode));
            highlight(data);
            highlighted = true;
            highlightedNode = args.node.id;
          if (!childrenAreCollapsed) {
            return false;
          }
          }
            else if (!childrenAreCollapsed) {
            unHighlight(sender.get(highlightedNode));
            highlightedNode = 0;
            highlighted = false;
          }
        }
        else {
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
          else if (!childrenAreCollapsed) {
            unHighlight(sender.get(highlightedNode));
            highlightedNode = 0;
            highlighted = false;
          }
        }
       

    });  

    chart.load(nodes);
}
