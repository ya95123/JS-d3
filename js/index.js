d3.select('.chart-d3')
  .append('svg')
  .attr({
    'width': 200,
    'height': 200
  });

d3.select('svg')
  .append('circle')
  .attr({
    'cx': 50,
    'cy': 50,
    'r': 30,
    'fill': '#f90',
    'stroke': '#c00',
    'stroke-width': '5px'
  });

let vote = ['30', '50', '100', '20'];

d3.select('.list')
  .selectAll('li') // 預先選取等一下會創建的與資料數相同的 li
  .data(vote)  // 導入資料
  .enter()  // 自動生成與資料對應數量的元素
  .append('li') // 插入元素
  .text((d) => {
    return d;
    // d 指的是資料陣列中的每個元素(如果陣列內是物件，帶進來的就是物件)
  });

let voteLine = [
  {
    "name": "Grete",
    "num": 80
  },
  {
    "name": "Steffi",
    "num": 100
  },
  {
    "name": "Lala",
    "num": 200
  },
];

d3.select('.chart')
  .selectAll('div')
  .data(voteLine)
  .enter()
  .append('div')
  .html(function (d) {
    // .html() 類似 .innerHTML，D3 允許 SVG 跟 HTML 標籤混用
    return d.name + '<br>' + d.num
  })
  .style("height", function (d) {
    return d.num + 'px'  // 調整每個長條的高度
  });