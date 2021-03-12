
window.onload = function () {
  OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);

  OrgChart.templates.myTemplate.size = [125, 170];
  OrgChart.templates.myTemplate.node = '<rect x="0" y="0" height="170" width="125" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';

  OrgChart.templates.myTemplate.field_0 = '<text width="100" text-overflow="multiline" style="font-size: 24px;font-weight: bold;" fill="#2D2D2D" x="62.5" y="85" text-anchor="middle">{val}</text>';
  OrgChart.templates.myTemplate.field_1 = '<text width="110" text-overflow="multiline"  style="font-size: 14px;" fill="#2D2D2D" x="62.5" y="132" text-anchor="middle">{val}</text>';

  OrgChart.templates.myTemplate.img_0 = '<clipPath id="{randId}"><circle cx="60" cy="37" r="30"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="30" y="7"  width="60" height="60"></image>';


  OrgChart.templates.myTemplate.plus = '<circle cx="15" cy="15" r="15" fill="#57B6F1" stroke="#ffffff" stroke-width="1"></circle>'
    + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>'
    + '<line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#ffffff"></line>';
  OrgChart.templates.myTemplate.minus = '<circle cx="15" cy="15" r="15" fill="#37D8BF" stroke="#ffffff" stroke-width="1"></circle>'
    + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>';



  var editForm = function () {
    this.nodeId = null;
  };

  editForm.prototype.init = function (obj) {
    var that = this;
    this.obj = obj;
    this.editForm = document.getElementById("editForm");
    this.emailInput = document.getElementById("email");
    this.addressInput = document.getElementById("address");
    this.phone1Input = document.getElementById("phone1");
    this.phone2Input = document.getElementById("phone2");
    this.imgInput = document.getElementById("img");
    this.nameInput = document.getElementById("name");
    this.titleInput = document.getElementById("title");
    this.cancelButton = document.getElementById("close");

    this.cancelButton.addEventListener("click", function () {
      that.hide();
    });
  };


  editForm.prototype.show = function (nodeId) {
    this.nodeId = nodeId;

    var left = document.body.offsetWidth / 2 - 150;

    this.editForm.style.left = left + "px";
    var node = chart.get(nodeId);
    if (!node) return;
    this.emailInput.innerHTML = node.email ? node.email : "";
    this.addressInput.innerHTML = node.address ? node.address : "";
    this.phone1Input.innerHTML = node.phone1 ? node.phone1 : "";
    this.phone2Input.innerHTML = node.phone2 ? node.phone2 : "";
    this.imgInput.src = node.img ? node.img : "#";
    this.nameInput.innerHTML = node.name ? node.name : "";
    this.titleInput.innerHTML = node.title ? node.title : "";

    this.editForm.style.display = "block";

    OrgChart.anim(this.editForm, { opacity: 0 }, { opacity: 1 }, 300, OrgChart.anim.inOutSin);
  };

  editForm.prototype.hide = function (showldUpdateTheNode) {
    this.editForm.style.display = "none";
    this.editForm.style.opacity = 0;

  };



  var chart = new OrgChart(document.getElementById('tree'), {
    toolbar: {
      zoom: true,
    },
    enableSearch: false,
    template: "myTemplate",
    nodeBinding: {
      field_0: "name",
      field_1: 'title',
      img_0: "img"
    },
    editUI: new editForm()
  });





  chart.load([
    {
      id: 1,
      name: "Endy Chau",
      title: "CEO",
      img: "https://cdn.balkan.app/shared/2.jpg",
      email: "my@email.com",
      phone1: "+6465 6454 8787",
      phone2: "+2342 3433 5455",
      address: "T2"
    },
    {
      id: 200,
      pid: 1,
      tags: ["assistant"],
      name: "Alan Wan",
      title: "Executive sec",
      img: "https://cdn.balkan.app/shared/3.jpg",
      email: "my@email.com",
      phone1: "+6465 6454 8787",
      phone2: "+2342 3433 5455",
      address: "T2"

    },
    {
      id: 2,
      pid: 1,
      name: "Samson Lee",
      title: "Senior manager, IT Operations",
      img: "https://cdn.balkan.app/shared/4.jpg",
      email: "my@email.com",
      phone1: "+6465 6454 8787",
      phone2: "+2342 3433 5455",
      address: "T2"

    },
    {
      id: 3,
      pid: 1,
      name: "Eason Lee",
      title: "Senior manager, Information Arhitecture",
      img: "https://cdn.balkan.app/shared/5.jpg",
      email: "my@email.com",
      phone1: "+6465 6454 8787",
      phone2: "+2342 3433 5455",
      address: "T2"

    },
    {
      id: 4,
      pid: 1,
      name: "Chun Wa",
      title: "Senior manager, IT Systems",
      img: "https://cdn.balkan.app/shared/6.jpg",
      email: "my@email.com",
      phone1: "+6465 6454 8787",
      phone2: "+2342 3433 5455",
      address: "T2"

    },
    {
      id: 5,
      pid: 1,
      name: "P L Ip",
      title: "Manager HR, Managaer",
      img: "https://cdn.balkan.app/shared/7.jpg",
      email: "my@email.com",
      phone1: "+6465 6454 8787",
      phone2: "+2342 3433 5455",
      address: "T2"

    },
    {
      id: 6,
      pid: 4,
      tags: ["Directors"],
      name: "Name 1",
      title: "Title 1",
      img: "https://cdn.balkan.app/shared/8.jpg",
      email: "my@email.com",
      phone1: "+6465 6454 8787",
      phone2: "+2342 3433 5455",
      address: "T2"

    },
    {
      id: 7,
      pid: 4,
      tags: ["Directors"],
      name: "Name 2",
      title: "Title 2",
      img: "https://cdn.balkan.app/shared/9.jpg",
      email: "my@email.com",
      phone1: "+6465 6454 8787",
      phone2: "+2342 3433 5455",
      address: "T2"

    }
  ]);
};