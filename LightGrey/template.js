window.onload = function () {
  OrgChart.templates.ana.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{edge}" />';
  OrgChart.templates.grey = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.grey.size = [200, 200];
  OrgChart.templates.grey.node =  
    '<rect x="0" y="0" rx="5" ry="5" height="172" width="200" fill="#fafafa" stroke-width="1" stroke="#aeaeae"></rect>' +
    '<circle cx="100" cy="55" fill="#ffffff" r="35" stroke="#757575" stroke-width="0.5"></circle>' +
    '<circle stroke="#757575" stroke-width="3" fill="#757575" cx="100" cy="40" r="10"></circle> ' + 
    '<path d="M82,70 C82,50 118,50 118,70" stroke="#757575" stroke-width="1" fill="#757575"></path>';

  OrgChart.templates.grey.field_0 = '<text width="160" style="font-size: 16px;" fill="#1b9ce2" x="100" y="120" text-anchor="middle" font-weight="bold">{val}</text>';
  OrgChart.templates.grey.field_1 = '<text width="160" style="font-size: 16px;" fill="#828282" x="100" y="140" text-anchor="middle" font-weight="bold">{val}</text>';

  OrgChart.templates.grey.img_0 = 
    '<clipPath id="{randId}"><circle  cx="100" cy="55" r="35"></circle></clipPath>' +
    '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="60" y="15"  width="80" height="80"></image>';

    OrgChart.templates.grey.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,270,5)" control-node-menu-id="{id}">' + 
    '<rect x="-105" y="0" fill="red" fill-opacity="0" width="22" height="22"></rect>' + 
    '<circle cx="-100" cy="15" r="2.5" fill="#1b9ce2"></circle><circle cx="-93" cy="15" r="2.5" fill="#1b9ce2"></circle><circle cx="-86" cy="15" r="2.5" fill="#1b9ce2"></circle></g>';

    OrgChart.templates.grey.minus = '<circle cx="15" cy="-13" r="15" fill="#fafafa" stroke="#aeaeae" stroke-width="1"></circle>'
    + '<line x1="5" y1="-13" x2="25" y2="-13" stroke-width="1" stroke="#aeaeae"></line>';
    OrgChart.templates.grey.plus = '<circle cx="15" cy="-13" r="15" fill="#fafafa" stroke="#aeaeae" stroke-width="1"></circle>'
    + '<line x1="5" y1="-13" x2="25" y2="-13" stroke-width="1" stroke="#aeaeae"></line>'
    + '<line x1="15" y1="-23" x2="15" y2="-3" stroke-width="1" stroke="#aeaeae"></line>';

    OrgChart.templates.grey.linkAdjuster = {
      fromX: 0,
      fromY: 0,
      toX: 0,
      toY: -13
    }

  var chart = new OrgChart(document.getElementById("tree"), {
    template: "grey",
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    },
    nodeMenu: {
        details: { 
          text: "Contact Details",
          icon: '' 
        },
        edit: { 
          text: "Edit contacts reporter" ,
          icon: ''
        },
        add: { 
          text: "Add contact",
          icon: ''
        },
    },
  
});

nodes = [
  { id: 1, name: "Denny Curtis", title: "CEO" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
    ];

    chart.load(nodes);
}