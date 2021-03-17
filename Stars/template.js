


window.onload = function () {

  OrgChart.templates.star = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.star.size = [300, 180];
  OrgChart.templates.star.node = '<rect class="box-node" x="0" y="0" width="300" height="180" rx="5" ry="5" fill="#444444" stroke="#7a7a7a" stroke-width="2"></rect><rect x="100" y="40" width="190" height="25" fill="#333333"></rect><rect x="1" y="115" width="298" height="64" fill="#383838" rx="5" ry="5" class="box-footer"></rect>';
  OrgChart.templates.star.image = '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="5" y="5"  width="90" height="110"></image>';
  OrgChart.templates.star.name = '<text style="font-size: 16px;" fill="#e5e5e5" x="100" y="30" text-anchor="start">{val}</text>';
  OrgChart.templates.star.title = '<text style="font-size: 16px;" fill="#78A7CB" x="5" y="135" text-anchor="start">{val}</text>';
  OrgChart.templates.star.ou = '<text style="font-size: 16px;" fill="#e5e5e5" x="5" y="155" text-anchor="start">{val}</text>';
  OrgChart.templates.star.count = '<circle cx="270" cy="150" r="20" fill="#222222" stroke="#7a7a7a" stroke-width="2" ></circle><text style="font-size: 16px;" fill="#e5e5e5" x="270" y="155" text-anchor="middle">{val}</text>';
  OrgChart.templates.star.svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:block;background-color: #2E2E2E;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>';
  OrgChart.templates.star.jobgrade_1 = '<text style="font-size: 16px;" fill="#FF7F27" x="105" y="58" text-anchor="start">{val}</text>';
  OrgChart.templates.star.jobgrade_2 = '<text style="font-size: 32px;" fill="#FF7F27" x="190" y="100" text-anchor="middle">{val}</text>';

  OrgChart.templates.star.performance_1 = '<text style="font-size: 16px;" fill="#FF7F27" x="105" y="58" text-anchor="start">{val}</text>';
  OrgChart.templates.star.performance_2 = '{val}';

  function stars(count) {
      console.log(count)
      count = parseInt(count);
      var stargroup = '<g transform="matrix(0.6,0,0,0.6,142,73)">';

      for (var i = 0; i < count; i++) {
          stargroup += '<g transform="matrix(1,0,0,1,' + (200 - i * 50) + ',0)">';
          stargroup += '<path fill="#00AAAA" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"/>'
          stargroup += '</g>';
      }
      stargroup += '</g>';
      return stargroup;
  }

  function binder(sender, node) {
      var data = sender.get(node.id);
      var field = '<text style="font-size: 32px;" fill="#FF7F27" x="105" y="100" text-anchor="start">' + data.performance_2 + '</text>';
      return field + stars(data.performance_2);
  }

  var chart;

  chart = new OrgChart(document.getElementById("tree"), {
      template: 'star',
      enableSearch: false,
      nodeBinding: {
          image: 'image',
          name: 'name',
          title: 'title',
          ou: 'ou',
          count: 'count',
          performance_1: 'performance_1',
          performance_2: binder
      },
      nodes: [
          { id: 1, performance_2: 1, performance_1: 'PERFORMANCE', jobgrade_2: 5, jobgrade_1: 'JOB GRADE', count: 6, ou: 'Directors', title: 'CEO', name: 'Jack Hill', image: 'https://cdn.balkan.app/shared/1.jpg' },
          { id: 2, performance_2: 3, performance_1: 'PERFORMANCE', jobgrade_2: 13, jobgrade_1: 'JOB GRADE', count: 4, pid: 1, ou: 'Sales', title: 'Marketing', name: 'Janae Barrett', image: 'https://cdn.balkan.app/shared/2.jpg' },
          { id: 3, performance_2: 5, performance_1: 'PERFORMANCE', jobgrade_2: 777, jobgrade_1: 'JOB GRADE', tags: ['blue'], content_1: 'JOB GRADE', count: 125, pid: 1, ou: 'R&D', title: 'IT', name: 'Anahi Gordon', image: 'https://cdn.balkan.app/shared/3.jpg' },
      ]
  });

  document.getElementById('grade').addEventListener('click', function () {
      delete chart.config.nodeBinding.performance_1;
      delete chart.config.nodeBinding.performance_2;

      chart.config.nodeBinding.jobgrade_1 = 'jobgrade_1';
      chart.config.nodeBinding.jobgrade_2 = 'jobgrade_2';

      chart.draw();
  });
  document.getElementById('performance').addEventListener('click', function () {
      delete chart.config.nodeBinding.jobgrade_1;
      delete chart.config.nodeBinding.jobgrade_2;

      chart.config.nodeBinding.performance_1 = 'performance_1';
      chart.config.nodeBinding.performance_2 = binder;

      chart.draw();
  });
};