import { Injectable } from '@angular/core';
import { Transaction } from '../../shared/models/finance.model';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  async exportToPdf(transactions: Transaction[], title: string = 'Transactions Report') {
    // Dynamic imports to reduce initial bundle size
    const { default: jsPDF } = await import('jspdf');
    const { default: autoTable } = await import('jspdf-autotable');
    
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.setTextColor(30, 41, 59); // Slate 800
    doc.text('FinExpense Report', 14, 22);
    
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(title, 14, 30);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 38);

    const tableData = transactions.map(t => [
      new Date(t.transaction_date).toLocaleDateString(),
      t.main_category,
      t.note || t.sub_category || '-',
      t.type === 'expense' ? `-₹${t.amount.toLocaleString('en-IN')}` : `+₹${t.amount.toLocaleString('en-IN')}`
    ]);

    autoTable(doc, {
      startY: 45,
      head: [['Date', 'Category', 'Description', 'Amount']],
      body: tableData,
      theme: 'striped',
      headStyles: { 
        fillColor: [30, 41, 59],
        textColor: [255, 255, 255],
        fontSize: 10,
        fontStyle: 'bold'
      },
      columnStyles: {
        3: { halign: 'right', fontStyle: 'bold' }
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252]
      }
    });

    doc.save(`FinExpense_${new Date().getTime()}.pdf`);
  }

  async exportToExcel(transactions: Transaction[], fileName: string = 'Transactions') {
    // Dynamic import to reduce initial bundle size
    const XLSX = await import('xlsx');
    
    const worksheetData = transactions.map(t => ({
      'Date': new Date(t.transaction_date).toLocaleDateString(),
      'Category': t.main_category,
      'Sub-category': t.sub_category,
      'Description': t.note,
      'Amount': t.amount,
      'Type': t.type
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');
    
    // Auto-size columns
    const wscols = [
      {wch: 15}, {wch: 20}, {wch: 20}, {wch: 30}, {wch: 15}, {wch: 10}
    ];
    worksheet['!cols'] = wscols;

    XLSX.writeFile(workbook, `FinExpense_${new Date().getTime()}.xlsx`);
  }
}
