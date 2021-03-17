
window.onload = function () {

  OrgChart.templates.cool = Object.assign({}, OrgChart.templates.ana);
  OrgChart.templates.cool.defs = '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="cool-shadow"><feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" /><feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge></filter>';

  OrgChart.templates.cool.size = [310, 190];
  OrgChart.templates.cool.node = '<rect filter="url(#cool-shadow)"  x="0" y="0" height="190" width="310" fill="#ffffff" stroke-width="1" stroke="#eeeeee" rx="10" ry="10"></rect><rect fill="#ffffff" x="100" y="10" width="200" height="100" rx="10" ry="10" filter="url(#cool-shadow)"></rect><rect stroke="#eeeeee" stroke-width="1" x="10" y="120" width="220" fill="#ffffff" rx="10" ry="10" height="60"></rect><rect stroke="#eeeeee" stroke-width="1" x="240" y="120" width="60" fill="#ffffff" rx="10" ry="10" height="60"></rect><text  style="font-size: 11px;" fill="#afafaf" x="110" y="60">PERFORMANCE</text>'
      + '<image  xlink:href="https://cdn.balkan.app/shared/speedometer.svg" x="110" y="65" width="32" height="32"></image>';

  OrgChart.templates.cool.img = '<clipPath id="{randId}"><rect  fill="#ffffff" stroke="#039BE5" stroke-width="5" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="10" y="10"  width="80" height="100"></image><rect fill="none" stroke="#F57C00" stroke-width="2" x="10" y="10" rx="10" ry="10" width="80" height="100"></rect>';

  OrgChart.templates.cool.name = '<text  style="font-size: 18px;" fill="#afafaf" x="110" y="30">{val}</text>';
  OrgChart.templates.cool.title = '<text  style="font-size: 14px;" fill="#F57C00" x="20" y="145">{val}</text>';
  OrgChart.templates.cool.title2 = '<text style="font-size: 14px;" fill="#afafaf" x="20" y="165">{val}</text>';
  OrgChart.templates.cool.points = '<text style="font-size: 24px;" fill="#F57C00" x="270" y="165" text-anchor="middle">{val}</text>';
  OrgChart.templates.cool.performance = '<text style="font-size: 24px;" fill="#F57C00" x="150" y="90" >{val}</text>';
  OrgChart.templates.cool.svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background-color:#F2F2F2;display:block;" width="{w}" height="{h}" viewBox="{viewBox}">{content}</svg>';



  var chart;
  chart = new OrgChart(document.getElementById('tree'), {
      template: 'cool',
      nodeBinding: {
          name: 'name',
          title: 'title',
          title2: 'title2',
          points: 'points',
          performance: 'performance',
          img: 'img'
      }
  });

  chart.load([
      { id: 1, performance: 11, points: 50, name: 'Caden Ellison', title: 'Dev Manager', title2: 'Application Development', img: 'https://cdn.balkan.app/shared/1.jpg' },
      { id: 2, performance: 33, points: 99, name: 'Fran Parsons', title: 'Developer', pid: 1, title2: 'Application Development', img: 'https://cdn.balkan.app/shared/2.jpg' },
      { id: 3, performance: 99, points: 34, name: 'Lynn Hussain', title: 'Sales', pid: 1, title2: 'Application Development', img: 'https://cdn.balkan.app/shared/3.jpg' }
  ]);
}