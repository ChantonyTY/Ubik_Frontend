import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantTableService } from '../../service/restaurant-table.service';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})
export class TableDetailComponent implements OnInit {
  table: any = {};
  id: number | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tableService: RestaurantTableService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam; // Convertit l'ID en nombre
        this.loadTable(this.id);
      } else {
        console.error('ID parameter is missing');
        this.router.navigate(['/tables']);
      }
    });
  }

  loadTable(id: number): void {
    this.tableService.getTable(id).subscribe(
      data => {
        this.table = data;
        this.loading = false;
      },
      error => {
        console.error('Error loading table', error);
        this.loading = false;
        this.router.navigate(['/tables']);
      }
    );
  }

  save(): void {
    if (this.id !== null) {
      this.tableService.updateTable(this.id, this.table).subscribe(
        () => {
          this.router.navigate(['/tables']);
        },
        error => {
          console.error('Error updating table', error);
        }
      );
    } else {
      console.error('ID parameter is missing');
      this.router.navigate(['/tables']);
    }
  }

  delete(): void {
    if (this.id !== null) {
      this.tableService.deleteTable(this.id).subscribe(
        () => {
          this.router.navigate(['/tables']);
        },
        error => {
          console.error('Error deleting table', error);
        }
      );
    } else {
      console.error('ID parameter is missing');
      this.router.navigate(['/tables']);
    }
  }
}
