function createTableForYear(year, data, containerId) {
    const container = document.getElementById(containerId);
  
    // Create a table for the year
    const table = document.createElement('table');
  
    // Add table header
    const headerRow = document.createElement('tr');
    Object.keys(data[year][0]).forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
  
    // Add table rows
    data[year].forEach(item => {
      const row = document.createElement('tr');
      Object.values(item).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        row.appendChild(td);
      });
      table.appendChild(row);
    });
  
    // Append the table to the container
    container.appendChild(table);
  }
  
// Fetch JSON data and call createTableForYear for specific years
function loadTableForYear(year, containerId) {
    fetch('comp.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    createTableForYear(year, data, containerId);
  })
  .catch(error => {
    console.error("Error reading the JSON file:", error);
  });
    
}