function generateTable() {
    const number = document.getElementById('numberInput').value;
    const tableOutput = document.getElementById('tableOutput');
    
    if (number === '') {
        tableOutput.innerHTML = '<p>Please enter a valid integer.</p>';
        return;
    }

    const num = parseInt(number);
    let tableHTML = `<h2>Table of ${num}:</h2>`;
    
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<p>${num} x ${i} = ${num * i}</p>`;
    }

    tableOutput.innerHTML = tableHTML;
}
