function createTableForYear(year) {
  const data = {
    "2015":[
      {"c":"1", "composition":"Piece in G minor", "nickname":"", "date":"2015", "note":"", "link":""}
    ],
    "2020":[
      {"c":"1a", "composition":"Variations on a theme by \"Loong Rerng\"", "nickname":"", "date":"2020", "note":"", "link":""},
      {"c":"2", "composition":"Piece in G-flat major", "nickname":"Autumn Breeze", "date":"November 2020", "note":"", "link":""},
      {"c":"3", "composition":"Nocturne in E major", "nickname":"", "date":"December 2020", "note":""},
      {"c":"4", "composition":"Waltz in A-flat major", "nickname":"New year Waltz", "date":"December 2020", "note":"", "link":""}
    ],
    "2021":[
      {"c":"5", "composition":"Nocturne in D-flat major", "nickname":"", "date":"January 2021", "note":"", "link":""},
      {"c":"6", "composition":"Piece in G-flat major", "nickname":"Winter Snowfall", "date":"January 2021", "note":"", "link":""},
      {"c":"7", "composition":"Piece in G-flat major", "nickname":"Night Sky", "date":"February 2021", "note":"", "link":""},
      {"c":"8", "composition":"Waltz in E-flat major", "nickname":"", "date":"February 2021", "note":"", "link":""},
      {"c":"9", "composition":"Waltz in D major", "nickname":"Duet Waltz", "date":"February 2021", "note":"For piano 4 hands", "link":""},
      {"c":"10", "composition":"Piece in G-flat major", "nickname":"Spring Swift", "date":"March 2021", "note":"", "link":""},
      {"c":"11", "composition":"Piano Sonata (No.1) in B minor", "nickname":"", "date":"March 2021", "note":"", "link":""},
      {"c":"12", "composition":"Piece in G-flat major", "nickname":"Starlights", "date":"May 2021", "note":"", "link":"./woo/starlights"},
      {"c":"13", "composition":"Waltz in B-flat minor", "nickname":"", "date":"May 2021", "note":"", "link":""},
      {"c":"14", "composition":"Piece in C major", "nickname":"Wind on the fields", "date":"June 2021", "note":"", "link":""},
      {"c":"15", "composition":"Piece in G-flat major", "nickname":"Ocean Waves", "date":"June 2021", "note":"", "link":""},
      {"c":"16", "composition":"Polonaise in F major", "nickname":"", "date":"June 2021", "note":"", "link":""},
      {"c":"17", "composition":"Piece in G-flat major", "nickname":"Raindrops", "date":"July 2021", "note":"", "link":""},
      {"c":"18", "composition":"Nocturne in G-flat major", "nickname":"", "date":"July 2021", "note":"", "link":""},
      {"c":"19", "composition":"Etude in D-flat major", "nickname":"", "date":"July 2021", "note":"", "link":""},
      {"c":"20", "composition":"Waltz in A major", "nickname":"", "date":"July 2021", "note":"", "link":""},
      {"c":"21", "composition":"Piano Sonata (No.2) in A-flat major", "nickname":"", "date":"August 2021", "note":"", "link":""},
      {"c":"22", "composition":"Piece in G-flat major", "nickname":"Summer Lights", "date":"October 2021", "note":"", "link":""},
      {"c":"23", "composition":"Piece in E major", "nickname":"Forest Rain", "date":"October 2021", "note":"", "link":""},
      {"c":"24", "composition":"Piece in E-flat major", "nickname":"In the evening", "date":"November 2021", "note":"", "link":""},
      {"c":"25", "composition":"Waltz in G-flat major", "nickname":"", "date":"November 2021", "note":"", "link":""},
      {"c":"26", "composition":"Nocturne in E-flat major", "nickname":"", "date":"November 2021", "note":"", "link":""},
      {"c":"26a", "composition":"Impromptu (No.1) in E-flat major", "nickname":"", "date":"November 2021", "note":"", "link":""},
      {"c":"27", "composition":"Introduction and Rondo in B-flat major", "nickname":"", "date":"November 2021", "note":"", "link":""},
      {"c":"28", "composition":"Piece in B major", "nickname":"One Cool Day", "date":"December 2021", "note":"", "link":""},
      {"c":"29", "composition":"Piece in A major", "nickname":"Tranquil Afternoon", "date":"December 2021", "note":"", "link":""},
      {"c":"30", "composition":"Piece in G-flat major", "nickname":"Fireworks", "date":"December 2021", "note":"with orchestrated version", "link":"./woo/fireworks"},
    ],
    "2022":[
      {"c":"31", "composition":"8 Waltzes", "nickname":"Dormitory Waltzes", "date":"January 2022", "note":"", "link":""},
      {"c":"31a", "composition":"Album leaf in E major", "nickname":"", "date":"January 2022", "note":"For the left hand alone", "link":""},
      {"c":"31b", "composition":"Impromptu No.2 in E-flat minor", "nickname":"", "date":"February 2022", "note":"", "link":""},
      {"c":"31c", "composition":"Impromptu No.3 in A-flat major", "nickname":"", "date":"February 2022", "note":"", "link":""},
      {"c":"31d", "composition":"Impromptu No.4", "nickname":"", "date":"February 2022", "note":"", "link":""},
      {"c":"31e", "composition":"Impromptu No.5 in G-sharp minor", "nickname":"", "date":"March 2022", "note":"", "link":""},
      {"c":"32", "composition":"Piano Sonata (No.3) in G-flat major", "nickname":"", "date":"April 2022", "note":"", "link":"./opus/opus1"},
      {"c":"33", "composition":"Piece in B-flat major", "nickname":"Andantino dolce", "date":"April 2022", "note":"Op.1 No.1", "link":"./opus/opus1"},
      {"c":"34", "composition":"Piece in C major", "nickname":"Adagio ma non tanto", "date":"April 2022", "note":"Op.1 No.2", "link":"./opus/opus1"},
      {"c":"35", "composition":"Piece in D major", "nickname":"Andante tranquillo", "date":"May 2022", "note":"Op.1 No.3", "link":"./opus/opus1"},
      {"c":"36", "composition":"Waltz in A-flat major", "nickname":"Valse brillante", "date":"May 2022", "note":"Op.2", "link":"./opus/opus2"},
      {"c":"36a", "composition":"Impromptu No.6 in C major", "nickname":"", "date":"June 2022", "note":"", "link":""},
      {"c":"37", "composition":"*Piece in F major", "nickname":"", "date":"June 2022", "note":"", "link":""},
      {"c":"38", "composition":"*Piece in C major", "nickname":"", "date":"June 2022", "note":"", "link":""},
      {"c":"38/94a", "composition":"Prelude in C major", "nickname":"", "date":"November 2024", "note":"Op.6 No.1", "link":"./opus/opus6/#prelude"},
      {"c":"39", "composition":"Piece in G-flat major", "nickname":"", "date":"August 2022", "note":"Op.3 No.7a", "link":""},
      {"c":"40", "composition":"Piece in A-flat major", "nickname":"Rainbow-colored Evening Sky", "date":"August 2022", "note":"Op.3 No.6", "link":"./opus/opus3"},
      {"c":"40/96a", "composition":"Piece in A-flat major (Orchestrated)", "nickname":"Rainbow-colored Evening Sky", "date":"November 2024", "note":"Op.6 No.8", "link":"./opus/opus6/#rainbow"},
      {"c":"41", "composition":"*Fragment in D-flat major", "nickname":"", "date":"August 2022", "note":"", "link":""},
      {"c":"42", "composition":"*Adagio in G-flat major", "nickname":"", "date":"August 2022", "note":"For piano and strings", "link":""},
      {"c":"43", "composition":"Piece in E-flat major", "nickname":"Starry Sky of Possibilities", "date":"August 2022", "note":"Op.3 No.8", "link":""},
      {"c":"44", "composition":"*Fragment", "nickname":"", "date":"September 2022", "note":"", "link":""},
      {"c":"44a", "composition":"Impromptu No.7", "nickname":"", "date":"September 2022", "note":"", "link":""},
      {"c":"45", "composition":"*Etude in G-sharp minor", "nickname":"", "date":"September 2022", "note":"", "link":""},
      {"c":"46", "composition":"*Waltz in G-flat major", "nickname":"", "date":"October 2022", "note":"", "link":""},
      {"c":"47", "composition":"*Polonaise in F major", "nickname":"", "date":"October 2022", "note":"", "link":""},
      {"c":"48", "composition":"*Fragment in C major", "nickname":"", "date":"October 2022", "note":"", "link":""},
      {"c":"49", "composition":"*Piece in A major", "nickname":"", "date":"October 2022", "note":"", "link":""},
      {"c":"50", "composition":"Impromptu No.8 in E major", "nickname":"", "date":"November 2022", "note":"", "link":""},
      {"c":"50a", "composition":"Impromptu No.9 in C major", "nickname":"", "date":"November 2022", "note":"", "link":""},
      {"c":"51", "composition":"Prelude in E major", "nickname":"Dawn of Hope", "date":"November 2022", "note":"Op.3 No.1", "link":"./opus/opus3"},
      {"c":"51a", "composition":"Impromptu No.10 in E major", "nickname":"", "date":"November 2022", "note":"", "link":""},
      {"c":"52", "composition":"Impromptu No.11 in A major", "nickname":"", "date":"November 2022", "note":"", "link":""},
      {"c":"53", "composition":"Impromptu No.12 in F minor", "nickname":"", "date":"November 2022", "note":"", "link":""},
      {"c":"54", "composition":"*Fragment in F minor", "nickname":"", "date":"December 2022", "note":"", "link":""},
      {"c":"55", "composition":"Waltz in E major", "nickname":"Christmas Eve Waltz", "date":"December 2022", "note":"", "link":"./woo/4-waltzes/#christmas"},
      {"c":"56", "composition":"Piece in A major", "nickname":"", "date":"December 2022", "note":"", "link":""},
    ],
    "2023":[
      {"c":"57", "composition":"Piece in A major", "nickname":"Shining Morning Sky", "date":"January 2023", "note":"Op.3 No.2", "link":"./opus/opus3"},
      {"c":"58", "composition":"Waltz in F major", "nickname":"", "date":"February 2023", "note":"", "link":""},
      {"c":"58/96b", "composition":"Waltz in E-flat major (Orchestrated)", "nickname":"Departure Waltz", "date":"November 2024", "note":"Op.6 No.4", "link":"./opus/opus6/#waltz"},
      {"c":"59", "composition":"Piece in G-sharp minor", "nickname":"Stormy Rainy Sky", "date":"March 2023", "note":"Op.3 No.4", "link":"./opus/opus3"},
      {"c":"60", "composition":"Ballade in D-flat major", "nickname":"", "date":"March 2023", "note":"Op.4", "link":"./opus/opus4"},
      {"c":"60a", "composition":"Piece in E major", "nickname":"Mahon Concerto", "date":"March 2023", "note":"Op.6 No.7", "link":"./opus/opus6/#concerto"},
      {"c":"61", "composition":"Piece in D major", "nickname":"Blue Sky of Tranquillity", "date":"April 2023", "note":"Op.3 No.3", "link":"./opus/opus3"},
      {"c":"62", "composition":"Impromptu No.13 in E-flat major", "nickname":"", "date":"April 2023", "note":"", "link":""},
      {"c":"63", "composition":"Piece in G minor", "nickname":"Empty Sky of Despair", "date":"April 2023", "note":"Op.3 No.5", "link":"./opus/opus3"},
      {"c":"63a", "composition":"Impromptu No.14 in G minor", "nickname":"", "date":"April 2023", "note":"", "link":""},
      {"c":"64", "composition":"Piece in G-flat major", "nickname":"Moonlit Night Sky", "date":"May 2023", "note":"Op.3 No.7", "link":"./opus/opus3"},
      {"c":"65", "composition":"Piece in A major", "nickname":"In Field", "date":"May 2023", "note":"Op.6 No.6", "link":"./opus/opus6/#field"},
      {"c":"66", "composition":"Impromptu No.15 in G major", "nickname":"", "date":"June 2023", "note":"", "link":""},
      {"c":"67", "composition":"Impromptu No.16 in D major", "nickname":"Monday Rain", "date":"June 2023", "note":"Op.6 No.5", "link":"./opus/opus6/#impromptu"},
      {"c":"68", "composition":"Waltz in E-flat major", "nickname":"", "date":"June 2023", "note":"", "link":""},
      {"c":"69", "composition":"*Rondo in C major", "nickname":"", "date":"July 2023", "note":"For piano and orchestra", "link":""},
      {"c":"70", "composition":"Waltz in G-flat major", "nickname":"Lemon Tea Waltz", "date":"July 2023", "note":"", "link":"./woo/4-waltzes/#lemon-tea"},
      {"c":"71", "composition":"*Etude in B major", "nickname":"", "date":"August 2023", "note":"", "link":""},
      {"c":"72", "composition":"*Piece in D major", "nickname":"", "date":"August 2023", "note":"", "link":""},
      {"c":"73", "composition":"Impromptu No.17 in F major", "nickname":"", "date":"September 2023", "note":"", "link":""},
      {"c":"74", "composition":"*Drafted Piano Concerto in G minor", "nickname":"", "date":"September 2023", "note":"For piano and orchestra", "link":""},
      {"c":"75", "composition":"Waltz in F-sharp major", "nickname":"Daydream Waltz", "date":"September 2023", "note":"", "link":"./woo/4-waltzes/#daydream"},
      {"c":"76", "composition":"March in B-flat major", "nickname":"March for Kebtang", "date":"October 2023", "note":"Op.6 No.3", "link":"./opus/opus6/#march"},
      {"c":"77", "composition":"*Fragment in G-flat major", "nickname":"", "date":"October 2023", "note":"", "link":""},
      {"c":"78", "composition":"*Waltz in D minor", "nickname":"", "date":"November 2023", "note":"", "link":""},
      {"c":"79", "composition":"Scherzo in G major", "nickname":"Morning Scherzo", "date":"December 2023", "note":"Op.6 No.2", "link":"./opus/opus6/#scherzo"},
    ],
    "2024":[
      {"c":"80", "composition":"Waltz in F major", "nickname":"Sunflower Waltz", "date":"February 2024", "note":"", "link":"./woo/4-waltzes/#sunflower"},
      {"c":"81", "composition":"*Waltz in A-flat major", "nickname":"", "date":"March 2024", "note":"", "link":""},
      {"c":"82", "composition":"*Fragment in E major", "nickname":"", "date":"April 2024", "note":"", "link":""},
      {"c":"83", "composition":"*Fragment in E-flat major", "nickname":"", "date":"April 2024", "note":"", "link":""},
      {"c":"84", "composition":"*Polonaise in B major", "nickname":"", "date":"April 2024", "note":"", "link":""},
      {"c":"85", "composition":"Piano Sonata (No.4) in E-flat major", "nickname":"", "date":"May 2024", "note":"Op.5", "link":"./opus/opus5"},
      {"c":"86", "composition":"*Waltz in C major", "nickname":"", "date":"June 2024", "note":"", "link":""},
      {"c":"87", "composition":"*Piece in B-flat major", "nickname":"", "date":"June 2024", "note":"", "link":""},
      {"c":"88", "composition":"*Piece in G-flat major", "nickname":"", "date":"July 2024", "note":"", "link":""},
      {"c":"89", "composition":"*Fragment in D-flat major", "nickname":"", "date":"August 2024", "note":"", "link":""},
      {"c":"90", "composition":"*Piece in B-flat major", "nickname":"Boring Class", "date":"August 2024", "note":"", "link":""},
      {"c":"91", "composition":"*Piece in C major", "nickname":"", "date":"September 2024", "note":"", "link":""},
      {"c":"91.5", "composition":"Variants on Chopin's Waltz Op.70 No.2", "nickname":"", "date":"September 2024", "note":"", "link":""},
      {"c":"91.5a", "composition":"Piece in B-flat major", "nickname":"11:14:36", "date":"October 2024", "note":"For piano and orchestra", "link":""},
      {"c":"92", "composition":"*Waltz in E minor", "nickname":"", "date":"October 2024", "note":"", "link":""},
      {"c":"93", "composition":"*Waltz in A major", "nickname":"", "date":"November 2024", "note":"", "link":""},
      {"c":"94", "composition":"*Fragment in G major", "nickname":"", "date":"November 2024", "note":"", "link":""},
      {"c":"95", "composition":"*Fragment in B major", "nickname":"", "date":"November 2024", "note":"", "link":""},
      {"c":"96", "composition":"Impromptu No.18 in E major", "nickname":"", "date":"November 2024", "note":"", "link":""},
      {"c":"97", "composition":"Mazurka in E-flat major", "nickname":"", "date":"December 2024", "note":"", "link":""},
      {"c":"98", "composition":"*Polonaise in C-sharp minor", "nickname":"", "date":"December 2024", "note":"", "link":""},
    ],
    "2025":[
      {"c":"99", "composition":"*Piece in D-flat major", "nickname":"", "date":"January 2025", "note":"", "link":""},
      {"c":"100", "composition":"*Drafted Piano Concerto in D minor", "nickname":"", "date":"January 2025", "note":"For piano and orchestra", "link":""},
      {"c":"101", "composition":"Nocturne-Etude in G major", "nickname":"", "date":"January 2025", "note":"", "link":""},
      {"c":"102", "composition":"*Piece in C major", "nickname":"", "date":"February 2025", "note":"", "link":""},
      {"c":"103", "composition":"*Piece in D-flat major", "nickname":"", "date":"February 2025", "note":"", "link":""},
      {"c":"104", "composition":"*Rondo in C major", "nickname":"", "date":"February 2025", "note":"", "link":""},
      {"c":"105", "composition":"*Nocturne in B-flat major", "nickname":"", "date":"March 2025", "note":"", "link":""},
      {"c":"106", "composition":"*Piece in B-flat major", "nickname":"", "date":"March 2025", "note":"", "link":""},
      {"c":"107", "composition":"*Fragment in A minor", "nickname":"", "date":"March 2025", "note":"", "link":""},
      {"c":"108", "composition":"*Piece in D minor", "nickname":"Salutation of the Triple Gem", "date":"March 2025", "note":"For orchestra", "link":""},
      {"c":"109", "composition":"*Waltz in D major", "nickname":"", "date":"April 2025", "note":"", "link":""},
      {"c":"110", "composition":"*Waltz in A major", "nickname":"", "date":"April 2025", "note":"", "link":""},
    ]
  };
  let tablehtml = '<table><thead><tr><th style="text-align:center;">C.</th><th>Composition</th><th class="tablecut">Nickname</th><th>Date</th><th class="tablecut">Note</th></tr></thead>';
  tablehtml+='<tbody>';
  data[year].forEach(piece => {
    if (piece.link){
      tablehtml += 
      `<tr onclick="window.location.href='${piece.link}'">
        <td style="text-align:center;">${piece.c}</td>
        <td>${piece.composition}</td>`
    }
    else{
      tablehtml +=
      `<tr>
        <td style="text-align:center;">${piece.c}</td>
        <td>${piece.composition}</td>`
    }

    if (!piece.nickname){
      tablehtml += 
      `<td class="tablecut">-</td>
      <td>${piece.date}</td>`
    }
    else{
      tablehtml +=
      `<td class="tablecut">${piece.nickname}</td>
      <td>${piece.date}</td>`
    }

    if (!piece.note){
      tablehtml += `<td class="tablecut">-</td></tr>`;
    }
    else{
      tablehtml += `<td class="tablecut">${piece.note}</td></tr>`;
    }
  });
  tablehtml+='</tbody></table>';

  return tablehtml;
}
