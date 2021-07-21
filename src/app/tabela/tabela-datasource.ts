import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TabelaItem {
  name: string;
  id: string;
  telefone: number;
  email: string;
  data: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TabelaItem[] = [
{name: 'Carlos', id: 'AAY-1821', telefone: 11999235996, email:'carlos@gmail.com', data:'10/07/1995' },
{name: 'Fernando', id: 'KDI-8563', telefone: 11998256348, email:'fernando@gmail.com', data:'05/08/1993' },
{name: 'Emanuel', id: 'UHM-5692', telefone: 11997526587, email:'emanuel@gmail.com', data:'16/09/1987' },
{name: 'Larissa', id: 'OUV-0268', telefone: 11997523654, email:'larissa@gmail.com', data:'31/10/1998' },
{name: 'Marcos', id: 'PLL-2285', telefone: 11997856325, email:'marcos@gmail.com', data:'24/11/2000' },
{name: 'Pedro', id: 'ARW-2036', telefone: 11999256987, email:'pedro@gmail.com', data:'15/12/2001' },
{name: 'Debora', id: 'JHT-0235', telefone: 11999584236, email:'debora@gmail.com', data:'19/01/1985' },
{name: 'Felipe', id: 'OPR-8852', telefone: 11999663548, email:'felipe@gmail.com', data:'05/02/1979' },
{name: 'Cristian', id: 'ADO-1521', telefone: 11995235896, email:'cristian@gmail.com', data:'02/03/1998' },
{name: 'Matheus', id: 'AGH-1923', telefone: 11998526528, email:'matheus@gmail.com', data:'29/04/1999' },
{name: 'Roberto', id: 'BBN-1852', telefone: 11996352845, email:'roberto@gmail.com', data:'18/08/2000' },
{name: 'Marcelo', id: 'DBH-2585', telefone: 11995632501, email:'marcelo@gmail.com', data:'23/08/2001' },
{name: 'Douglas', id: 'OPA-6695', telefone: 1199632585, email:'douglas@gmail.com', data:'15/04/1976' },
{name: 'Igor', id: 'OLO-0595', telefone: 11997582563, email:'igor@gmail.com', data:'06/07/1988'},
];


/**
 * Data source for the Tabela view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TabelaDataSource extends DataSource<TabelaItem> {
  data: TabelaItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TabelaItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TabelaItem[]): TabelaItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TabelaItem[]): TabelaItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
