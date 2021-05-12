window.onload = function () {

    var baloon = 
      '<svg id="Capa_1" enable-background="new 0 0 511.072 511.072" x="195" y="10" height="25" viewBox="0 0 511.072 511.072" width="25" xmlns="http://www.w3.org/2000/svg">'
        + '<path fill="#636363" d="m74.39 480.536h-36.213l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-36.029-23.644-62.375-54.751-76.478-90.425-14.093-35.647-15.864-74.888-5.121-113.482 12.89-46.309 43.123-88.518 85.128-118.853 45.646-32.963 102.47-50.387 164.33-50.387 77.927 0 143.611 22.389 189.948 64.745 41.744 38.159 64.734 89.63 64.734 144.933 0 26.868-5.471 53.011-16.26 77.703-11.165 25.551-27.514 48.302-48.593 67.619-46.399 42.523-112.042 65-189.83 65-28.877 0-59.01-3.855-85.913-10.929-25.465 26.123-59.972 40.929-96.086 40.929zm182-420c-124.039 0-200.15 73.973-220.557 147.285-19.284 69.28 9.143 134.743 76.043 175.115l7.475 4.511-.23 8.727c-.456 17.274-4.574 33.912-11.945 48.952 17.949-6.073 34.236-17.083 46.99-32.151l6.342-7.493 9.405 2.813c26.393 7.894 57.104 12.241 86.477 12.241 154.372 0 224.682-93.473 224.682-180.322 0-46.776-19.524-90.384-54.976-122.79-40.713-37.216-99.397-56.888-169.706-56.888z">'
        + '</path>'
        + '<rect opacity="0" fill="red" height="500" width="500"/>'
        + '<title>{val}</title>'
      '</svg>';
  
     
  
    OrgChart.templates.disco = Object.assign({}, OrgChart.templates.ula);
    OrgChart.templates.disco.size = [230, 65]
    OrgChart.templates.disco.node = '<rect x="0" y="0" height="{h}" width="{w}" fill="#ffffff" stroke-width="2" stroke="#eeeeee"></rect><line x1="0" y1="2.5" x2="230" y2="2.5" stroke-width="5" stroke="#831c55"></line>';
      
    OrgChart.templates.disco.field_0 = '<text width="180" style="font-size: 16px;" font-weight="bold" fill="#831c55" x="15" y="28" text-anchor="start">{val}</text>';
    OrgChart.templates.disco.field_1 = '<text width="210" text-overflow="multiline" style="font-size: 14px;" font-weight="bold" fill="#afafaf" x="15" y="47" text-anchor="start">{val}</text>';
    OrgChart.templates.disco.baloon = baloon;
    OrgChart.templates.disco.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,210,57)" control-node-menu-id="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="4" cy="0" r="2" fill="#636363"></circle><circle cx="9" cy="0" r="2" fill="#636363"></circle><circle cx="14" cy="0" r="2" fill="#636363"></circle></g>';
  
    OrgChart.templates.disco.plus = '<rect x="-11" y="5" height="22" width="50" rx="10" ry="10" stroke-width="1" fill="#831c55" stroke="#831c55"></rect>' 
      + '<circle stroke="#ffffff" stroke-width="2" fill="#ffffff" cx="6" cy="13" r="1.4"></circle> '  
      + '<rect x="2.5" y="17" rx="1.5" ry="1.5" height="2.5" width="7" stroke-width="1" fill="#ffffff" stroke="#ffffff"></rect>'
      + '<line x1="2" y1="19" x2="10" y2="19" stroke-width="2" stroke="#ffffff"></line>'
      + '<text text-anchor="middle" style="font-size: 10px;cursor:pointer;" font-weight="bold" fill="#ffffff" x="21" y="19">{collapsed-children-count}</text>';
  
    OrgChart.templates.disco.minus = '<circle cx="15" cy="15" r="12" fill="#f0e2ea" stroke="#f0e2ea" stroke-width="1"></circle>'
      + '<line x1="10" y1="15" x2="20" y2="15" stroke-width="2" stroke="#831c55"></line>';
    OrgChart.templates.disco.link = '<path stroke-linejoin="round" stroke="#eeeeee" stroke-width="2" fill="none" d="{edge}" />';
  
    var chart = new OrgChart(document.getElementById("tree"), {
      template: "disco",
      levelSeparation: 50,
      nodeBinding: {
          field_0: "name",
          field_1: "title",
          baloon: "remarks"
      },
      collapse: {
        level: 2
      },
      nodeMenu: {
          details: { text: "Details" },
          edit: { text: "Edit" },
          add: { text: "Add" },
          remove: { text: "Remove" }
      },
  });
  
  chart.on('field', function(sender, args){
      if (args.name == "name") {
        var name = args.data["name"];
        var emp = args.data["emp"];
        args.value = name + " (" + emp + ")";
      }
  });
  
  var nodes = [
    { id: 1, name: "Denny Curtis", title: "CEO", emp: 33682, remarks: "Test Remarks 1" },
    { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", emp: 18660 },
    { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", emp: 08606, remarks: "Test Remarks 2" },
    { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", emp: 18606 },
    { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", emp: 18315, remarks: "Test Remarks 3" },
    { id: 6, pid: 3, name: "Tanner May", title: "Developer", emp: 34621 }
  
  ];
  
   
  chart.load(nodes);
  
  }