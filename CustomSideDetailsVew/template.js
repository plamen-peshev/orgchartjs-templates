
window.onload = function () {

  OrgChart.templates.MyTemplate = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.MyTemplate.size = [300, 200];
  OrgChart.templates.MyTemplate.ripple = {
      color: "#F6F9DD",
      radius: 50,
      rect: null
  };
  OrgChart.templates.MyTemplate.link = '<path stroke-linejoin="round" stroke="#004165" stroke-width="2" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';
  
  OrgChart.templates.MyTemplate.node = '<rect x="0" y="0" height="200" width="300" fill="#ffffff" stroke-width="4" stroke="#004165" rx="50" ry="50"></rect><line x1="2" y1="125" x2="298" y2="125" stroke="#BED600" stroke-width="2" ></line>';
  OrgChart.templates.MyTemplate.image = '<image preserveAspectRatio="xMidYMid slice"xlink:href="{val}" x="115" y="5" width="70" height="85"></image>';
  OrgChart.templates.MyTemplate.name = '<text width="220" style="font-size: 24px;font-family: Helvetica;" fill="#4D4E53" x="150" y="115" text-anchor="middle">{val}</text>';
  OrgChart.templates.MyTemplate.title = '<text width="220" style="font-size: 16px;font-family: Helvetica;" fill="#4D4E53" x="150" y="160" text-anchor="middle">{val}</text>';
  OrgChart.templates.MyTemplate.division = '<text width="220" style="font-size: 16px;font-family: Helvetica;" fill="#4D4E53" x="150" y="180" text-anchor="middle">{val}</text>';
  OrgChart.templates.MyTemplate.nodeMenuButton = '<g style="cursor:pointer;" transform="matrix(1,0,0,1,255,170)" control-node-menu-id="{id}"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#004165"></circle><circle cx="7" cy="0" r="2" fill="#004165"></circle><circle cx="14" cy="0" r="2" fill="#004165"></circle></g>';
  
  var editForm = function () {
  };
  
  editForm.prototype.init = function (obj) {
      this.chart = obj;
  };
  
  editForm.prototype.show = function (nodeId) {
      this.hide();
      var node = this.chart.get(nodeId);
      var editHtml = '<table cellpadding="0" cellspacing="0" class="t">'
          + '<tr>'
          + '<td colspan="2" class="t-img">'
          + '<img height="85" style="text-align: center;" src="' + node.Image + '" />'
          + '</td>'
          + '</tr>';
  
      editHtml += '<tr><td class="t-name">&nbsp;</td><td class="t-val">&nbsp;</td></tr>';
      for(var p in node){
          if (p != 'id' && p != 'pid' && p != 'Image'){
              editHtml += '<tr>';
              editHtml += '<td class="t-name">' + p + '</td>';
              editHtml += '<td class="t-val">' + node[p] + '</td>';
              editHtml += '</tr>';
          }
      }
      editHtml += '<tr><td class="t-name">&nbsp;</td><td class="t-val">&nbsp;</td></tr></table>';
  
      var div = document.createElement("div");
      div.id = 'edit-form';
      div.innerHTML = editHtml;
      div.style.position = 'absolute';
      div.style.top = '10px';
      div.style.right = '-100px';
      div.style.opacity = 0;
      div.style.backgroundColor = '#ffffff';
  
      this.chart.element.appendChild(div);
  
      OrgChart.anim(div, {opacity: 0, right: -100}, {opacity: 1, right: 10 }, 300, OrgChart.anim.outSin);
  };
  
  editForm.prototype.hide = function (showldUpdateTheNode) {
      var form = this.chart.element.querySelector('#edit-form');
      if (form){
          form.parentNode.removeChild(form);
      }
  };
  
  var chart = new OrgChart(document.getElementById("tree"), {
      template: 'MyTemplate',
      siblingSeparation: 60,
      subtreeSeparation: 70,
      levelSeparation: 80,
      editUI:  new editForm(),
      menu: {
          saveAsPdf:{
              text: 'Save PDF',
              icon: OrgChart.icon.pdf(24,24, '#7A7A7A'),
              onClick: function(){
                  chart.exportPDF({
                      footer: '<table style="width:100%;height: 45px;"><tr><td style="width:209px;"><img src="https://balkangraph.com/js/exp/l.png" /></td><td><div style="display:inline-block;border-top:2px solid #88A4B3;width:100%;"></div></td></tr></table>',
                      margin: [50, 40, 90, 40]
                      //footer: 'ASFDASDF'
                  })
              }
          }
      },
      nodeBinding:{
          name: 'Name',
          title: 'Title',
          division: 'Division',
          image: 'Image'
      }
  });
  
  chart.load([
      {id: 0, Name: 'Jack Hill', Title: 'Alternate Title', Email: 'jdoe@balkangraph.com', Phone: '1 888 888 8888', Mobile: '1 999 999 9999', Division: 'Division Code', Region: 'NA', Country: 'United States', Location: 'Corporate', Headquorters: '', Coy: 963, Supervisor: 'Tim Doe', 'Dotted Line': 'Jane Doe',  Image: 'https://cdn.balkan.app/shared/3.jpg'},
      {id: 1, pid: 0, Name: 'Ashley Barnett', Title: 'Alternate Title', Email: 'jdoe@tifs.com', Phone: '1 888 888 8888', Mobile: '1 999 999 9999', Division: 'Division Code', Region: 'NA', Country: 'United States', Location: 'Corporate', Headquorters: '', Coy: 963, Supervisor: 'Tim Doe', 'Dotted Line': 'Jane Doe', Image: 'https://cdn.balkan.app/shared/4.jpg'},
      {id: 2, pid: 0, Name: 'Elliot Patel', Title: 'Alternate Title', Email: 'jdoe@tifs.com', Phone: '1 888 888 8888', Mobile: '1 999 999 9999', Division: 'Division Code', Region: 'NA', Country: 'United States', Location: 'Corporate', Headquorters: '', Coy: 963, Supervisor: 'Tim Doe', 'Dotted Line': 'Jane Doe', Image: 'https://cdn.balkan.app/shared/5.jpg'}
  ]);
  chart.on('init', function(sender){
      sender.editUI.show(0);
  });
  };
  