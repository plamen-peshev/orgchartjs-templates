window.onload = function () {
   
  OrgChart.templates.neet = Object.assign({}, OrgChart.templates.base);
  OrgChart.templates.neet.svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:block;background-color: #2E2E2E;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>';
  OrgChart.templates.neet.plus = '';
  OrgChart.templates.neet.minus = '';
  OrgChart.templates.neet.link = '<path stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}"/>';

  OrgChart.templates.yellow = Object.assign({}, OrgChart.templates.neet);
  OrgChart.templates.yellow.size = [100,100];
  OrgChart.templates.yellow.node = '<circle fill="#FFCA28" cx="50" cy="50" r="50"></circle>';
  OrgChart.templates.yellow.img = '<clipPath id="{randId}"><circle cx="50" cy="50" r="46"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="4" y="4"  width="92" height="92"></image>', 
  OrgChart.templates.yellow.ripple = {
      radius: 100,
      color: '#FFCA28',
  };

  OrgChart.templates.orangeEdge = Object.assign({}, OrgChart.templates.neet);
  OrgChart.templates.orangeEdge.size = [90,90];
  OrgChart.templates.orangeEdge.node = '<circle fill="#F57C00" cx="45" cy="45" r="45"></circle>';
  OrgChart.templates.orangeEdge.img = '<clipPath id="{randId}"><circle cx="45" cy="45" r="41"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="4" y="4"  width="82" height="82"></image>', 
  OrgChart.templates.orangeEdge.ripple = {
      radius: 90,
      color: '#F57C00',
  };

  OrgChart.templates.orange = Object.assign({}, OrgChart.templates.orangeEdge);

  OrgChart.templates.blueEdge = Object.assign({}, OrgChart.templates.neet);
  OrgChart.templates.blueEdge.size = [80,80];
  OrgChart.templates.blueEdge.node = '<circle fill="#039BE5" cx="40" cy="40" r="40"></circle>';
  OrgChart.templates.blueEdge.img = '<clipPath id="{randId}"><circle cx="40" cy="40" r="36"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="4" y="4"  width="72" height="72"></image>', 
  OrgChart.templates.blueEdge.ripple = {
      radius: 80,
      color: '#039BE5',
  };

  OrgChart.templates.blue = Object.assign({}, OrgChart.templates.blueEdge);

 
  OrgChart.templates.dot = Object.assign({}, OrgChart.templates.base);
  OrgChart.templates.dot.plus = '';
  OrgChart.templates.dot.minus = '';
  OrgChart.templates.dot.link = '';


  OrgChart.templates.orange.min = Object.assign({}, OrgChart.templates.dot);
  OrgChart.templates.orange.min.size = [10,100];
  OrgChart.templates.orange.min.node = '<rect x="-3" y="20" fill="#2E2E2E" width="17" height="50"></rect>' + 
      '<circle class="circle" fill="#F57C00" cx="5" cy="50" r="5"></circle>';
  OrgChart.templates.orange.min.ripple = {
      radius: 0,
      color: 'none'
  };

  OrgChart.templates.blue.min = Object.assign({}, OrgChart.templates.dot);
  OrgChart.templates.blue.min.size = [10,90];
  OrgChart.templates.blue.min.node = '<rect x="-3" y="20" fill="#2E2E2E" width="17" height="45"></rect>' + 
      '<circle class="circle" fill="#039BE5" cx="5" cy="45" r="5"></circle>';
  OrgChart.templates.blue.min.ripple = {
      radius: 0,
      color: 'none'
  };




 var nodes = [
     { id: 1, tags: ["yellow"], img: 'https://cdn.balkan.app/shared/1.jpg'},
     { id: 2, pid: 1, tags: ["orangeEdge"], img: 'https://cdn.balkan.app/shared/2.jpg' }, // като го няма този,  4 няма чилдръни
     { id: 3, pid: 1, tags: ["orange"], img: 'https://cdn.balkan.app/shared/3.jpg' },
     { id: 4, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/4.jpg' },
     { id: 5, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/5.jpg' },
    { id: 6, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/6.jpg' },
    { id: 7, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/7.jpg' },
     
     { id: 8, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/8.jpg' },
     { id: 9, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/9.jpg' },

     { id: 10, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/10.jpg' },
     { id: 11, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/11.jpg' },
     { id: 12, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/12.jpg' },
     { id: 13, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/13.jpg' },
     { id: 14, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/14.jpg' },
     { id: 15, pid: 1, tags: ["orange", "minimized"], img: 'https://cdn.balkan.app/shared/15.jpg' },
     { id: 16, pid: 1, tags: ["orangeEdge"], img: 'https://cdn.balkan.app/shared/16.jpg' },

     { id: 17, pid: 2, tags: ["blueEdge"], img: 'https://cdn.balkan.app/shared/11.jpg'  },
     { id: 18, pid: 2, tags: ["blue"], img: 'https://cdn.balkan.app/shared/2.jpg'  },
     { id: 19, pid: 2, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/3.jpg'  },
     { id: 20, pid: 2, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/4.jpg'  },
     { id: 21, pid: 2, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/5.jpg'  },
     { id: 22, pid: 2, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/6.jpg'  },
     { id: 23, pid: 2, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/7.jpg'  },
     { id: 24, pid: 2, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/8.jpg'  },
     { id: 25, pid: 2, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/9.jpg'  },
     { id: 26, pid: 2, tags: ["blueEdge"], img: 'https://cdn.balkan.app/shared/10.jpg'  },

     { id: 27, pid: 16, tags: ["blueEdge"], img: 'https://cdn.balkan.app/shared/13.jpg' },
     { id: 28, pid: 16, tags: ["blue"], img: 'https://cdn.balkan.app/shared/4.jpg' },
     { id: 29, pid: 16, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/5.jpg' },
     { id: 30, pid: 16, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/6.jpg' },
     { id: 31, pid: 16, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/7.jpg' },
     { id: 32, pid: 16, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/8.jpg' },
     { id: 33, pid: 16, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/9.jpg' },
     { id: 34, pid: 16, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/1.jpg' },
     { id: 35, pid: 16, tags: ["blue", "minimized"], img: 'https://cdn.balkan.app/shared/2.jpg' },
     { id: 36, pid: 16, tags: ["blueEdge"], img: 'https://cdn.balkan.app/shared/14.jpg' },

 ];

 var chart = new OrgChart(document.getElementById("tree"), {
      enableSearch: false,
      siblingSeparation: 6,
      nodeBinding: {
          img: "img"
      },
      tags: {
          yellow: {
              template: "yellow"
          },
          orange: {
              template: "orange"
          },
          orangeEdge: {
              template: "orangeEdge"
          },
          blue: {
              template: "blue"
          },
          blueEdge: {
              template: "blueEdge"
          },
          minimized: {
              min: true
          }
     }    
 });



chart.on('click', function (sender, args) {
                  if (args.node.min) {
                      sender.maximize(args.node.id);
                      chart.expand(args.node.id, args.node.childrenIds);
                  }
                  else {
                      sender.minimize(args.node.id);
                      chart.collapse(args.node.id, args.node.childrenIds)
                  }
              return false;
      });

 chart.load(nodes);

};