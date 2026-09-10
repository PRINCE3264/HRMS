import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class AdminBranchesComponent {
  showAdd = false;
  branches = [
    { name: 'Headquarters', address: '123 Business Ave, New York, NY 10001', employeeCount: 120, phone: '+1 (212) 555-0100', manager: 'James Roberts', status: 'ACTIVE', color: 'linear-gradient(135deg, #6366f1, #818cf8)' },
    { name: 'West Coast Office', address: '456 Innovation Blvd, San Francisco, CA 94102', employeeCount: 65, phone: '+1 (415) 555-0200', manager: 'Patricia Kim', status: 'ACTIVE', color: 'linear-gradient(135deg, #06b6d4, #22d3ee)' },
    { name: 'European Hub', address: '78 Technology Lane, London, UK EC1A 1BB', employeeCount: 38, phone: '+44 20 7946 0300', manager: 'Thomas Mueller', status: 'ACTIVE', color: 'linear-gradient(135deg, #10b981, #34d399)' },
    { name: 'Asia Pacific Office', address: '10 Raffles Place, Singapore 048616', employeeCount: 25, phone: '+65 6555 0300', manager: 'Wei Zhang', status: 'ACTIVE', color: 'linear-gradient(135deg, #f59e0b, #fbbf24)' },
    { name: 'South Branch', address: '200 Peachtree St, Atlanta, GA 30303', employeeCount: 0, phone: '+1 (404) 555-0400', manager: 'Unassigned', status: 'INACTIVE', color: 'linear-gradient(135deg, #94a3b8, #cbd5e1)' },
  ];
}
