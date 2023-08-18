import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  date: string;
  Total: number;
  Profit: number;
  ProfitPercentage: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { date: "Mon Aug 03 2023 15:45:26 GMT+0530 (India Standard Time)", Total: 987, Profit: 6.941, ProfitPercentage: 5 },
  { date: "Mon july 1 2023 15:45:26 GMT+0530 (India Standard Time)", Total: 987, Profit: 9.0122, ProfitPercentage: 53 },
  { date: Date(), Total: 987, Profit: 1.0079, ProfitPercentage: 2 },
  { date: Date(), Total: 987, Profit: 4.0026, ProfitPercentage: 3 },


];


@Component({
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.css'],
})
export class TablesPageComponent {
  displayedColumns: string[] = ['date', 'Total', 'Profit', 'profit %'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyLastWeekFilter() {
    const currentDate = new Date();
    const lastWeekDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7);
    // console.log(lastWeekDate);
    this.dataSource.filterPredicate = (data) => {
      const rowDataDate = new Date(data.date); // Adjust this based on your data structure
      return rowDataDate >= lastWeekDate;
    };
    this.dataSource.filter = 'lastWeekFilter';
  }

  applyLastMonthFilter() {
    const currentDate = new Date();
    const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
    console.log(lastMonthDate);
    this.dataSource.filterPredicate = (data) => {
      const rowDataDate = new Date(data.date); // Adjust this based on your data structure
      console.log(rowDataDate);
      return rowDataDate >= lastMonthDate;
    };
    this.dataSource.filter = 'lastMonthFilter';
  }


}
