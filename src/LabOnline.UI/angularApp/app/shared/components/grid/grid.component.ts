import { Component } from '@angular/core';
import { Column } from './column';
import { Sorter } from './sorter';
import { EventEmitter, Output, Input} from '@angular/core';

@Component({
    selector: 'grid',
    inputs: ['rows: rows', 'columns: columns'],
    templateUrl: './grid.component.html'
})
export class GridComponent {
    public columns: Array<Column>;
    public rows: Array<any>;
    public sorter: Sorter;
	public dataRows: Array<any>;
    public pages = 5;
    public defaultPages = 5;
    public pageSize = 15;
    public rowsCount = 0;
    public currentPage = 1;
	public pagesIndex: Array<number>;
    public pageStart = 1;
    public itemsCount = 0;
    public pageSizes: number[] = [10, 15, 20, 25, 50, 100];

	@Input()
	set DataSource(items: Array<any>) {
		this.dataRows = items;
		if (items) {
			this.setPagination();
		}
    }

    @Output()
    onSelect = new EventEmitter<any>();
    @Output()
    onDetails = new EventEmitter<any>();

    constructor() {
        this.sorter = new Sorter();
    }
    public setRows(items: Array<any>) {
		this.dataRows = items;
		if (items) {
			this.setPagination();
		}
    }
    public sort(key: string) {
        this.sorter.sort(key, this.rows);
    }
	public select(row: any) {
		this.onSelect.emit(row);
    }
    public details(row: any) {
        this.onDetails.emit(row);
    }
	public setPagination() {
		this.currentPage = 1;
        this.pageStart = 1;
        this.rowsCount = Math.ceil(this.dataRows.length / this.pageSize);

        if (this.pages < this.defaultPages) {
            this.pages = this.defaultPages;
        }
		if (this.rowsCount < this.pages) {
           this.pages =  this.rowsCount;
        }
        if (this.pages == 0) {
            this.currentPage = 0;
        }
		this.setPageRows();
	}
	public setPageRows() {
        this.rows = this.dataRows.slice((this.currentPage - 1) * this.pageSize, (this.currentPage) * this.pageSize);
        this.pagesIndex = this.getPageItems();
		this.itemsCount = this.dataRows.length;
    }
	public getPageItems(): any {
        let pageItems = new Array();
        for (let index = this.pageStart; index < this.pageStart + this.pages; index ++) {
			pageItems.push(index);
        }
        return pageItems;
    }
	public prevPage() {
        if (this.currentPage > 1) {
            this.currentPage --;
        }
        if (this.currentPage < this.pageStart) {
            this.pageStart = this.currentPage;
        }
        this.setPageRows();
    }
	public nextPage() {
        if (this.currentPage < this.rowsCount) {
                this.currentPage ++;
        }
        if (this.currentPage >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentPage - this.pages + 1;
        }
        this.setPageRows();
    }
	public setPage(index: number) {
        this.currentPage = index;
        this.setPageRows();
    }
    public setPageSize(value: number) {
        this.pageSize = value;

        if (this.dataRows) {
            this.setPagination();
            this.setPage(1);
        }
    }
}