window.onload = function () {
        
    OrgChart.templates.white = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.white.size = [180, 172];
  
    OrgChart.templates.white.node =  '<rect x="0" y="0" rx="5" ry="5" filter="url(#shadow1)"  height="172" width="180" fill="white" stroke-width="1" stroke="#aeaeae"></rect>' +
    '<line x1="0" y1="40" x2="180" y2="40" stroke-width="0.8" stroke="#aeaeae" />'; 
  
     OrgChart.templates.white.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="shadow1">' + 
  '<feOffset dx="2" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1" />' + 
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
  
    var chart = new OrgChart(document.getElementById("tree"), {
  
      template: "white",
      nodeBinding: {
          field_0: "name",
          field_1: "title",
          field_2: "department",
          img_0: "img"
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
  
      chart.load(nodes);
  }
  