var Sorter = (function () {
    function Sorter() {
        this.direction = 1;
    }
    Sorter.prototype.sort = function (key, data) {
        var _this = this;
        this.direction = (this.key === key) ? this.direction * -1 : 1;
        this.key = key;
        data.sort(function (a, b) {
            if (a[key] === b[key]) {
                return 0;
            }
            else {
                return _this.direction * ((a[key] > b[key]) ? 1 : -1);
            }
        });
    };
    return Sorter;
}());
export { Sorter };
