var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Sorter } from './sorter';
import { EventEmitter, Output, Input } from '@angular/core';
var GridComponent = (function () {
    function GridComponent() {
        this.pages = 5;
        this.defaultPages = 5;
        this.pageSize = 15;
        this.rowsCount = 0;
        this.currentPage = 1;
        this.pageStart = 1;
        this.itemsCount = 0;
        this.pageSizes = [10, 15, 20, 25, 50, 100];
        this.onSelect = new EventEmitter();
        this.onDetails = new EventEmitter();
        this.sorter = new Sorter();
    }
    Object.defineProperty(GridComponent.prototype, "DataSource", {
        set: function (items) {
            this.dataRows = items;
            if (items) {
                this.setPagination();
            }
        },
        enumerable: true,
        configurable: true
    });
    GridComponent.prototype.setRows = function (items) {
        this.dataRows = items;
        if (items) {
            this.setPagination();
        }
    };
    GridComponent.prototype.sort = function (key) {
        this.sorter.sort(key, this.rows);
    };
    GridComponent.prototype.select = function (row) {
        this.onSelect.emit(row);
    };
    GridComponent.prototype.details = function (row) {
        this.onDetails.emit(row);
    };
    GridComponent.prototype.setPagination = function () {
        this.currentPage = 1;
        this.pageStart = 1;
        this.rowsCount = Math.ceil(this.dataRows.length / this.pageSize);
        if (this.pages < this.defaultPages) {
            this.pages = this.defaultPages;
        }
        if (this.rowsCount < this.pages) {
            this.pages = this.rowsCount;
        }
        if (this.pages == 0) {
            this.currentPage = 0;
        }
        this.setPageRows();
    };
    GridComponent.prototype.setPageRows = function () {
        this.rows = this.dataRows.slice((this.currentPage - 1) * this.pageSize, (this.currentPage) * this.pageSize);
        this.pagesIndex = this.getPageItems();
        this.itemsCount = this.dataRows.length;
    };
    GridComponent.prototype.getPageItems = function () {
        var pageItems = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            pageItems.push(index);
        }
        return pageItems;
    };
    GridComponent.prototype.prevPage = function () {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        if (this.currentPage < this.pageStart) {
            this.pageStart = this.currentPage;
        }
        this.setPageRows();
    };
    GridComponent.prototype.nextPage = function () {
        if (this.currentPage < this.rowsCount) {
            this.currentPage++;
        }
        if (this.currentPage >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentPage - this.pages + 1;
        }
        this.setPageRows();
    };
    GridComponent.prototype.setPage = function (index) {
        this.currentPage = index;
        this.setPageRows();
    };
    GridComponent.prototype.setPageSize = function (value) {
        this.pageSize = value;
        if (this.dataRows) {
            this.setPagination();
            this.setPage(1);
        }
    };
    return GridComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GridComponent.prototype, "DataSource", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], GridComponent.prototype, "onSelect", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], GridComponent.prototype, "onDetails", void 0);
GridComponent = __decorate([
    Component({
        selector: 'grid',
        inputs: ['rows: rows', 'columns: columns'],
        templateUrl: './grid.component.html'
    }),
    __metadata("design:paramtypes", [])
], GridComponent);
export { GridComponent };
