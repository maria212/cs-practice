// Task 1
import { Link } from "./link.js";

export class IterablyLinkedList {
    #first: Link = null;
    #last: Link = null;

    isEmpty(): boolean {
        return !this.#first;
    }

    showList() {
        let current = this.#first;
        while (current) {
            current.display();
            current = current.next;
        }
        console.log('first - ', this.#first.data);
        console.log('last - ', this.#last.data);
    }

    addFirst(data: unknown) {
        const newData = new Link(data);
        if (this.isEmpty()) {
            this.#last = newData;
        } else {
            this.#first.prev = newData;
        }
        newData.next = this.#first;
        this.#first = newData;
    }

    addLast(data: unknown) {
        const newData = new Link(data);
        if (this.isEmpty()) {
            this.#first = newData;
        } else {
            this.#last.next = newData;
            newData.prev = this.#last;
        }
        this.#last = newData;
    }

    removeFirst() {
        if (this.isEmpty()) {
            console.log('Nothing to delete')
        } else {
            const temp = this.#first;
            if (!this.#first.next) {
                this.#last = null;
            } else {
                this.#first.next.prev = null;
            }
            this.#first = this.#first.next;
            return temp;
        }
    }

    removeLast() {
        if (this.isEmpty()) {
            console.log('Nothing to delete')
        } else {
            if (!this.#last.prev) {
                this.#first = null;
            } else {
                this.#last.prev.next = null;
            }
            const temp = this.#last;
            this.#last = this.#last.prev;
            return temp;
        }
    }

    getIterator(): ListIterator {
        return new ListIterator(this, this.#first);
    }

    getFirst(): Link {
        return this.#first;
    }
}

class ListIterator {
    #current: Link = null;
    #first: Link = null;
    #linkList: IterablyLinkedList

    constructor(list: IterablyLinkedList, first: Link) {
        this.#linkList = list;
        this.#first = first;
        this.#current = first;
    }

    reset(): void {
        this.#current = this.#first;
    }

    getFirst(): Link {
        return this.#linkList.getFirst();
    }

    getCurrent(): Link {
        return this.#current;
    }

    nextLink(): void {
        this.#current = this.#current.next;
    }

    atEnd(): boolean {
        return !this.#current.next;
    }
}

export const checkIterator = () => {
    const myList = new IterablyLinkedList();
    myList.addLast(1);
    myList.addLast(2);
    myList.addLast(3);
    myList.addLast(4);
    myList.addLast(5);
    myList.addFirst(0);
    myList.addFirst(-1);
    myList.showList();
    console.log('--------------------------------')
    myList.removeLast();
    myList.removeFirst()

    const iterator = myList.getIterator();
    while (!iterator.atEnd()) {
        console.log('current iterator', iterator.getCurrent())
        iterator.nextLink();
    }
}


