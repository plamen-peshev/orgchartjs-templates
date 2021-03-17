window.onload = function () {
        
  OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.myTemplate.size = [300, 80];
  OrgChart.templates.myTemplate.node = '<rect x="0" y="0" height="80" width="300" fill="#fcc89b" rx="15" ry="15"></rect>' + 
  '<rect x="0" y="40" height="40" width="300" fill="#cc9d80" rx="15" ry="15"></rect>' +
  '<rect x="0" y="40" height="20" width="300" fill="#cc9d80"></rect>' +
  '<circle cx="35" cy="40" r="47" fill="#d1d2d4" stroke="#fff" stroke-width="5"></circle>' +
  '<circle stroke="#939598" stroke-width="2" fill="#939598" cx="35" cy="25" r="8"></circle> ' +
  '<path d="M20,54 C20,32 50,32 50,54 L19,54" stroke="#939598" stroke-width="2" fill="#939598"></path>';

  OrgChart.templates.myTemplate.ripple = {
    radius: 15,
    color: "#0890D3",
    rect: { x: 0, y: 0, width: 300, height: 80, rx: 15, ry: 15 }
};

  OrgChart.templates.myTemplate.field_0 = '<text width="210" class="field_0" style="font-size: 18px;" font-weight="bold" fill="#322b28" x="170" y="25" text-anchor="middle">{val}</text>';
  OrgChart.templates.myTemplate.field_1 = '<text width="210" class="field_1" style="font-size: 14px;" font-weight="bold" fill="#231f20" x="170" y="60" text-anchor="middle">{val}</text>';
  OrgChart.templates.myTemplate.img_0 = '<clipPath id="{randId}"><circle cx="35" cy="40" r="46"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="-15" y="-10"  width="100" height="100"></image>';

  var chart = new OrgChart(document.getElementById("tree"), {
    template: "myTemplate",
    enableDragDrop: true,
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img"
    },
  
});

nodes = [
  { id: 1, name: "Denny Curtis", title: "CEO"},
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" }
    ];

 
    chart.load(nodes);

}
