

window.onload = function () {
  OrgChart.templates.company = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.company.size = [200, 200];
  OrgChart.templates.company.node =
      '<circle cx="100" cy="100" r="100" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></circle>'
      + '<g transform="matrix(3.5,0,0,3.5,20,20)"><circle cx="12" cy="22" r="12" fill="#039BE5"></circle>'
      + '<circle cx="33" cy="14" r="10" fill="#FFCA28"></circle>'
      + '<circle cx="30" cy="32" r="8" fill="#F57C00"></circle></g>';

  OrgChart.templates.company.ripple = {
      radius: 100,
      color: "#039BE5",
      rect: null
  };

  OrgChart.templates.department = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.department.size = [330, 50];
  OrgChart.templates.department.node =
      '<rect x="0" y="0" width="330" height="50" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect>';
  OrgChart.templates.department.field_0 = '<text style="font-size: 24px;" fill="#aeaeae" x="165" y="30" text-anchor="middle">{val}</text>';

  OrgChart.templates.department.ripple = {
      radius: 0,
      color: "#F57C00",
      rect: null
  };

  OrgChart.templates.staff = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.staff.size = [50, 300];
  OrgChart.templates.staff.node =
      '<rect x="0" y="0" width="50" height="300" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect>';
  OrgChart.templates.staff.field_0 = '<text transform="rotate(90)"  style="font-size: 24px;" fill="#aeaeae" x="150" y="-15" text-anchor="middle">{val}</text>';

  OrgChart.templates.staff.ripple = {
      radius: 0,
      color: "#FFCA28",
      rect: null
  };

  var chart = new OrgChart(document.getElementById("tree"), {
      nodeBinding: {
          field_0: "name"
      },
      tags: {
          "Company": {
              template: "company"
          },
          "Department": {
              template: "department"
          },
          "Staff": {
              template: "staff"
          }
      },
      nodes: [
          { id: 1, tags: ["Company"] },
          { id: 2, pid: 1, tags: ["Department"], name: "Develepment Department" },
          { id: 3, pid: 1, tags: ["Department"], name: "QA Department" },
          { id: 4, pid: 1, tags: ["Department"], name: "Marketing Department" },
          { id: 5, pid: 2, tags: ["Staff"], name: "Elliot Ross" },
          { id: 6, pid: 2, tags: ["Staff"], name: "Anahi Gordon" },
          { id: 7, pid: 2, tags: ["Staff"], name: "Knox Macias" },
          { id: 8, pid: 2, tags: ["Staff"], name: "Nash Ingram" },
          { id: 9, pid: 2, tags: ["Staff"], name: "Sage Barnett" },
          { id: 10, pid: 3, tags: ["Staff"], name: "Alice Gray" },
          { id: 11, pid: 3, tags: ["Staff"], name: "Anne Ewing" },
          { id: 12, pid: 3, tags: ["Staff"], name: "Reuben Mcleod" },
          { id: 13, pid: 3, tags: ["Staff"], name: "Ariel Wiley" },
          { id: 14, pid: 3, tags: ["Staff"], name: "Lucas West" },
          { id: 15, pid: 4, tags: ["Staff"], name: "Adan Travis" },
          { id: 16, pid: 4, tags: ["Staff"], name: "Alex Snider" },
          { id: 17, pid: 4, tags: ["Staff"], name: "Aaliyah Webb" },
          { id: 18, pid: 4, tags: ["Staff"], name: "Janae Barrett" },
          { id: 19, pid: 4, tags: ["Staff"], name: "Lexie Cole" }

      ]
  });
};
