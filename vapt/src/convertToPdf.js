import jsPDF from 'jspdf';

const convertToPDF = (formData) => {
  const doc = new jsPDF();

  const { vulnerability, details, severity, impact, url, fixes } = formData;

  const content = [
    { label: 'Vulnerability:', value: vulnerability },
    { label: 'Details:', value: details },
    { label: 'Severity:', value: severity },
    { label: 'Impact:', value: impact },
    { label: 'Affected URLs:', value: url },
    { label: 'Suggested Fixes:', value: fixes},
  ];

  const startX = 20;
  let startY = 20;
  const lineHeight = 10;
  const labelColor = '#000';
  const valueColor = 'green';

  doc.setFontSize(20);
  doc.setTextColor(labelColor);
  doc.text('Form Data', startX, startY);

  doc.setFontSize(12);
  doc.setTextColor(valueColor);

  content.forEach((item) => {
    startY += lineHeight;
    doc.setTextColor(labelColor);
    doc.text(item.label, startX, startY);
    doc.setTextColor(valueColor);
    doc.text(item.value, startX + 40, startY);
  });

  // Added styling to the PDF
  const { width, height } = doc.getTextDimensions(content[content.length - 1].value);
  const rectX = startX + 37;
  const rectY = startY - lineHeight + 2;
  doc.setFillColor('#f0f0f0');
  doc.setDrawColor(labelColor);
  // doc.roundedRect(rectX, rectY, width + 6, lineHeight + 2, 2, 2, 'F');

  doc.save('form_data.pdf');
};

export default convertToPDF;
