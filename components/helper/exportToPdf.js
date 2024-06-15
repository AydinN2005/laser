import jsPDF from 'jspdf';
import 'jspdf-autotable';

function exportObjectsToPDF(data, filename) {
  // Remove the 'file_number' field from each object in the data array
  const modifiedData = data.map(({className, ...rest}) => rest);

  const doc = new jsPDF();

  doc.autoTable({
    head: [Object.keys(modifiedData[0])], body: modifiedData.map(obj => Object.values(obj)), theme: 'grid', styles: {
      font: 'helvetica', fontSize: 10, cellPadding: 2, fillColor: [255, 255, 255], textColor: [0, 0, 0], lineWidth: 0.1,
    }, margin: {top: 20},
  });

  doc.save(`${filename}.pdf`);
}

export {exportObjectsToPDF}
