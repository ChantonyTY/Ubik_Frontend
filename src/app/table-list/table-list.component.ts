import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantTableService } from '../../service/restaurant-table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  tables: any[] = [];
  loading: boolean = true;

  constructor(private tableService: RestaurantTableService, private router: Router) { }

  ngOnInit(): void {
    this.loadTables();
  }

  loadTables(): void {
    this.tableService.getTables().subscribe(
      data => {
        this.tables = data;
        this.loading = false;
      },
      error => {
        console.error('Error loading tables', error);
        this.loading = false;
      }
    );
  }

  viewDetails(id: number): void {
    this.router.navigate([`/table/${id}`]);
  }
}
