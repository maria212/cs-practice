export class Link {
    data: unknown;
    next: Link = null;
    prev: Link = null;

    constructor(data: unknown) {
        this.data = data;
    }

    display() {
        console.log(`data: ${this.data}, prev: ${this.prev?.data}, next: ${this.next?.data}`)
    }
}
