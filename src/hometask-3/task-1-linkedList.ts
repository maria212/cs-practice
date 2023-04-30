class Link {
    data: any;
    next: Link = null;
    prev: Link = null;

    constructor(data) {
        this.data = data;
    }
    display() {
        console.log(`data: ${this.data}, prev: ${this.prev?.data}, next: ${this.next?.data}`)
    }
}

class IterableLinkedList {
    first: Link = null;
    last: Link = null;
    count: number = 0;
    current: Link = this.first;

    isEmpty(): boolean {
        return !this.first;
    }

    showList() {
        this.current = this.first;
        while (this.current) {
            this.current.display();
            this.current = this.current.next;
        }
        this.current = this.first;
    }

    add(data: any) {
        const newData = new Link(data);
        // insert in the end
        if (this.isEmpty()) {
            this.first = newData;
        } else {
            this.last.next = newData;
            newData.prev = this.last;
        }
        this.last = newData;
    }

    remove() {

    }

}
export function ht3_1() {
    const myList = new IterableLinkedList();
    myList.add(1);
    myList.add(2);
    myList.add(3);
    myList.showList();
}


