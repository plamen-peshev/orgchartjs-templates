window.onload = function () {
        
    OrgChart.templates.red1 = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.red1.size = [1460, 80];
    OrgChart.templates.red1.node = 
      '<rect x="0" y="0" height="{h}" width="{w}" fill="#af3c25"></rect>';
    OrgChart.templates.red1.link = 
    '<path stroke-linejoin="round" stroke="#af3c25" stroke-width="1px" fill="none" d="{edge}" />';
    OrgChart.templates.red1.field_1 = 
      '<text data-width="900" style="font-size: 20px;" fill="#ffffff" x="730" y="50" text-anchor="middle">{val}</text>';

      OrgChart.templates.red1.plus = "";
      OrgChart.templates.red1.minus = "";

    OrgChart.templates.red2 = Object.assign({}, OrgChart.templates.red1);
    OrgChart.templates.red2.field_0 = 
      '<text data-width="900" style="font-size: 18px;" fill="#ffffff" x="730" y="65" text-anchor="middle">{val}</text>';
    OrgChart.templates.red2.field_1 = 
      '<text data-width="900" style="font-size: 18px;" fill="#ffffff" x="730" y="40" font-weight="bold" text-anchor="middle">{val}</text>';
    OrgChart.templates.red2.field_2 = 
      '<text data-width="90" style="font-size: 24px;" fill="#ffffff" x="1445" y="20" text-anchor="middle">{val}</text>';

    OrgChart.templates.green = Object.assign({}, OrgChart.templates.red1);
    OrgChart.templates.green.size = [150, 80];
    OrgChart.templates.green.node = 
      '<rect x="0" y="0" height="{h}" width="{w}" fill="#6cb253"></rect>';
    OrgChart.templates.green.field_1 = 
      '<text data-width="140" style="font-size: 18px;" fill="#ffffff" font-weight="bold" x="75" y="50" text-anchor="middle">{val}</text>';
    OrgChart.templates.green.link = 
    '<path stroke-linejoin="round" stroke="#af3c25" stroke-width="1px" fill="none" d="{edge}" />';

    OrgChart.templates.lightgreen = Object.assign({}, OrgChart.templates.green);
    OrgChart.templates.lightgreen.size = [150, 80];
    OrgChart.templates.lightgreen.node = 
      '<rect x="0" y="0" height="{h}" width="{w}" fill="#e2f0d9" stroke="#6cb253"></rect>';
    OrgChart.templates.lightgreen.field_1 = 
      '<text data-width="140" data-text-overflow="multiline" style="font-size: 18px;" font-weight="bold" fill="#4f4d4a" x="75" y="50" text-anchor="middle">{val}</text>';
      OrgChart.templates.lightgreen.link = 
    '<path stroke-linejoin="round" stroke="#6cb253" stroke-width="1px" fill="none" d="{edge}" />';


    OrgChart.templates.orange = Object.assign({}, OrgChart.templates.red1);
    OrgChart.templates.orange.size = [900, 80];
    OrgChart.templates.orange.node = 
      '<rect x="0" y="0" height="{h}" width="{w}" fill="#e78727"></rect>';
    OrgChart.templates.orange.field_1 = 
      '<text data-width="600" style="font-size: 18px;" fill="#ffffff" x="450" y="50" font-weight="bold" text-anchor="middle">{val}</text>';

    OrgChart.templates.whiteorange = Object.assign({}, OrgChart.templates.green);
    OrgChart.templates.whiteorange.size = [150, 140];
    OrgChart.templates.whiteorange.node = 
      '<rect x="0" y="0" height="{h}" width="{w}" fill="#fff" stroke="#e78727"></rect>';
    OrgChart.templates.whiteorange.field_1 = 
      '<text data-width="140" data-text-overflow="multiline" style="font-size: 18px;" font-weight="bold" fill="#4f4d4a" x="75" y="35" text-anchor="middle">{val}</text>';
      OrgChart.templates.whiteorange.field_0 = 
      '<text data-width="120" data-text-overflow="multiline" style="font-size: 18px;" fill="#4f4d4a" x="75" y="100" text-anchor="middle">{val}</text>';
      OrgChart.templates.whiteorange.field_2 = 
      '<text data-width="90" style="font-size: 24px;" fill="#e78727" x="135" y="20" text-anchor="middle">{val}</text>';
      OrgChart.templates.whiteorange.link = 
    '<path stroke-linejoin="round" stroke="#e78727" stroke-width="1px" fill="none" d="{edge}" />';

    OrgChart.templates.lightorange = Object.assign({}, OrgChart.templates.whiteorange);
    OrgChart.templates.lightorange.size = [150, 80];
    OrgChart.templates.lightorange.node = 
      '<rect x="0" y="0" height="{h}" width="{w}" fill="#f3c393" stroke="#e78727"></rect>';
    OrgChart.templates.lightorange.field_1 = 
    '<text data-width="140" data-text-overflow="multiline" style="font-size: 18px;" font-weight="bold" fill="#4f4d4a" x="75" y="50" text-anchor="middle">{val}</text>';

    OrgChart.templates.lighterorange = Object.assign({}, OrgChart.templates.lightorange);
    OrgChart.templates.lighterorange.node = 
      '<rect x="0" y="0" height="{h}" width="{w}" fill="#fae7d4" stroke="#e78727"></rect>';

    OrgChart.templates.blue = Object.assign({}, OrgChart.templates.red1);
    OrgChart.templates.blue.size = [320, 80];
    OrgChart.templates.blue.node = 
      '<rect x="0" y="0" height="{h}" width="{w}" fill="#0072af"></rect>';
    OrgChart.templates.blue.field_1 = 
      '<text data-width="280" style="font-size: 18px;" fill="#ffffff" x="160" y="50" font-weight="bold" text-anchor="middle">{val}</text>';

    OrgChart.templates.whiteblue = Object.assign({}, OrgChart.templates.whiteorange);
    OrgChart.templates.whiteblue.node = 
      '<rect x="0" y="0" height="{h}" width="{w}" fill="#fff" stroke="#0072af"></rect>';
    OrgChart.templates.whiteblue.field_2 = 
      '<text data-width="90" style="font-size: 24px;" fill="#0072af" x="135" y="20" text-anchor="middle">{val}</text>';
    OrgChart.templates.whiteblue.link = 
    '<path stroke-linejoin="round" stroke="#0072af" stroke-width="1px" fill="none" d="{edge}" />';

    var chart = new OrgChart(document.getElementById("tree"), {
      layout: OrgChart.mixed,
      enableSearch: false,
      levelSeparation: 35,
      nodeBinding: {
          field_0: "name",
          field_1: "title",
          field_2: "plus",
          img_0: "img"
      },
      tags: {
        red1: {
          template: "red1"
        },
        red2: {
          template: "red2"
        },
        green: {
          template: "green"
        },
        lightgreen: {
          template: "lightgreen"
        },
        orange: {
          template: "orange"
        },
        blue: {
          template: "blue"
        },
        whiteorange: {
          template: "whiteorange"
        },
        lightorange: {
          template: "lightorange"
        },
        lighterorange: {
          template: "lighterorange"
        },
        whiteblue: {
          template: "whiteblue"
        },
      }
  });

  nodes = [
    { id: 1, tags: ["red1"], title: "BOARD OF DIRECTORS" },
    { id: 2, pid: 1, tags: ["red2"], name: "Ben Burton", title: "Operations Services Manager", plus: "+" },
    { id: 3, pid: 2, tags: ["green"], title: "Consultants"},
    { id: 4, pid: 2, tags: ["orange"], title: "Administration Division" },
    { id: 5, pid: 2, tags: ["blue"], title: "Aquaculture Division"},
    { id: 6, pid: 3, title: "Consultant Support", tags: ["lightgreen"] },
    { id: 7, pid: 3, title: "Accountant", tags: ["lightgreen"] },
    { id: 8, pid: 3, title: "HR Support", tags: ["lightgreen"] },
    { id: 9, pid: 3, title: "Auditor", tags: ["lightgreen"] },
    { id: 10, pid: 4, title: "Finance & Compliance Manager", name: "Jodie McKenzie", tags: ["whiteorange"] },
    { id: 11, pid: 10, title: "DFV", tags: ["lightorange"] },
    { id: 12, pid: 10, title: "Admin Support", tags: ["lightorange"] },
    { id: 13, pid: 10, title: "Housing", tags: ["lightorange"] },
    { id: 14, pid: 10, title: "Night Patrol", tags: ["lightorange"] },
    { id: 15, pid: 10, title: "Lalgardi", tags: ["lightorange"] },

    { id: 16, pid: 11, name: "Cameron Steer", title: "DFV Worker", tags: ["whiteorange"], plus: "+" },
    { id: 17, pid: 12, name: "Maureen Drummond", title: "Admin Officer", tags: ["whiteorange"], plus: "+" },
    { id: 18, pid: 13, name: "Pennie Gross", title: "Housing Data Systems Lead", tags: ["whiteorange"], plus: "+" },
    { id: 19, pid: 13, name: "David Ishiguchi", title: "Housing Engagement Officer", tags: ["whiteorange"], plus: "+"},
    { id: 20, pid: 14, name: "Melanie Armstrong", title: "Patrol Coordinator", tags: ["whiteorange"], plus: "+" },
    { id: 21, pid: 14, name: "John Ross", title: "Patrol Officer", tags: ["whiteorange"], plus: "+" },
    { id: 22, pid: 14, name: "Tatakea Bani", title: "Patrol Officer", tags: ["whiteorange"], plus: "+" },
    { id: 23, pid: 14, title: "Casual Patrol Officers", tags: ["whiteorange"], plus: "+" },

    { id: 24, pid: 15, name: "Travis Ryder", title: "Lalgardi Supervisor", tags: ["whiteorange"], plus: "+" },
    { id: 25, pid: 15, title: "Casuals", tags: ["lighterorange"] },
    { id: 26, pid: 15, title: "Renal CrewCasuals", tags: ["lighterorange"] },
    { id: 27, pid: 15, name: "Mark Lay Lay", title: "Gardening", tags: ["whiteorange"], plus: "+" },
    { id: 28, pid: 15, name: "Michael Jumburra", title: "Gardening", tags: ["whiteorange"], plus: "+" },
    { id: 29, pid: 15, name: "Allen Egan", title: "Gardening", tags: ["whiteorange"], plus: "+" },
    { id: 30, pid: 15, name: "James Bradshaw", title: "Gardening", tags: ["whiteorange"], plus: "+" },
    { id: 31, pid: 15, name: "Katrina Ryder", title: "Cleaning", tags: ["whiteorange"], plus: "+" },
    { id: 32, pid: 15, name: "Vivienne Bysterveld", title: "Cleaning", tags: ["whiteorange"], plus: "+" },
    { id: 33, pid: 15, name: "Janet O’Meara", title: "Cleaning", tags: ["whiteorange"], plus: "+" },
    { id: 34, pid: 15, title: "Sub Contractors", tags: ["lighterorange"] },
    { id: 35, pid: 15, name: "Mike Porra", tags: ["whiteorange"], plus: "+" },
    { id: 36, pid: 15, name: "Braham Contracting", tags: ["whiteorange"], plus: "+" },

    { id: 37, pid: 5, name: "Justin Howard", title: "Works Supervisor Aquaculture", tags: ["whiteblue"], plus: "+" },
    { id: 38, pid: 5, name: "Phillip Munk-Nielson", title: "Hatcher Manager", tags: ["whiteblue"], plus: "+" },
    { id: 39, pid: 37, name: "Karcela Aitken", title: "Farm Hand/ Attendant", tags: ["whiteblue"], plus: "+" },
    { id: 40, pid: 37, name: "George Ross", title: "Farm Hand/ Attendant", tags: ["whiteblue"] },
    { id: 41, pid: 37, name: "Thomas Howard", title: "Farm Hand/ Attendant", tags: ["whiteblue"] },
      ];

      chart.load(nodes);
  }