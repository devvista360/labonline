export class Sorter {
    public direction: number;
    public key: string;

    public constructor() {
        this.direction = 1;
    }
    public sort(key: string, data: Array<any>) {
        this.direction = (this.key === key) ? this.direction * -1 : 1;
        this.key = key;

        data.sort((a: any, b: any) => {
            if (a[key] === b[key]) {
                return 0;
            } else {
                return this.direction * (( a[key] > b[key] ) ? 1 : -1);
            }
        });
    }
}