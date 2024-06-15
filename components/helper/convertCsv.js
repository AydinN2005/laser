function convertArrayToCSV(array) {
  const header = Object.keys(array[0]).join(',');
  const rows = array.map(obj => Object.values(obj).join(','));
  return `${header}\n${rows.join('\n')}`;
}

function downloadCSV(data, filename) {
  const csv = new Blob([data], {type: 'text/csv'});
  const url = URL.createObjectURL(csv);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export {convertArrayToCSV, downloadCSV}
