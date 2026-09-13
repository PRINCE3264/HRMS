import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {

  exportToExcel(data: any[], fileName: string = 'export_data'): void {
    if (!data || data.length === 0) {
      console.warn('No data available to export');
      return;
    }

    // Extract headers
    const headers = Object.keys(data[0]);

    // Format rows into CSV format compatible with Microsoft Excel
    const csvRows: string[] = [];

    // Header row
    csvRows.push(headers.map(h => `"${this.formatHeader(h)}"`).join(','));

    // Data rows
    for (const row of data) {
      const values = headers.map(header => {
        const val = row[header];
        let strVal = val === null || val === undefined ? '' : String(val);
        strVal = strVal.replace(/"/g, '""'); // Escape double quotes
        return `"${strVal}"`;
      });
      csvRows.push(values.join(','));
    }

    // Add BOM for UTF-8 Excel support
    const csvContent = '\uFEFF' + csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Trigger browser file download
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${fileName}_${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  private formatHeader(key: string): string {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
      .trim();
  }
}
