function createTableForYear(year) {
  const data = {
    "2015":[
        {"c":"1", "composition":"Piece in G minor", "nickname":"", "date":"2015", "note":"", "link":""}
    ],
    "2020":[
        {"c":"1a", "composition":"Variations on a theme by \"Loong Rerng\"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"2", "composition":"Piece in G-flat major", "nickname":"Autumn Breeze", "date":"November 2020", "note":"", "link":""},
        {"c":"3", "composition":"Nocturne in E major", "nickname":"", "date":"December 2020", "note":""},
        {"c":"4", "composition":"Waltz in A-flat major", "nickname":"new year Waltz", "date":"December 2020", "note":"", "link":""}
    ],
    "2021":[
        {"c":"5", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"6", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"7", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"8", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"9", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"10", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"11", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"12", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"13", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"14", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"15", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""},
        {"c":"16", "composition":"", "nickname":"", "date":"2020", "note":"", "link":""}
    ]
  };
  let tablehtml = '<table><thead><tr><th>C.</th><th>Composition</th><th>Nickname</th><th>Date</th><th>Note</th></tr></thead></table>';
  tablehtml+='<tbody>';
  data[year].forEach(piece => {
    if (piece[link]){
      tablehtml += `<tr><a src=\"piece[link]\"><td>'${piece.c}'</td> <td>'${piece.composition}'</td> <td>'${piece.nickname}'</td> <td>'${piece.date}'</td> <td>'${piece.note}'</td></a></tr> |`
    }
    else{
      tablehtml += `<tr><td>'${piece.c}'</td> <td>'${piece.composition}'</td> <td>'${piece.nickname}'</td> <td>'${piece.date}'</td> <td>'${piece.note}'</td> </tr> |`;
    }
  });
  tablehtml+='</tbody></table>';

  return tablehtml;
}
  
function loadTableForYear() {
  const containers = document.querySelectorAll(".table-container");

  containers.forEach(container => {
      const year = container.getAttribute("data-year"); // Get the year from the data attribute
      container.innerHTML = createTableForYear(year); // Generate and insert the table
  })
}