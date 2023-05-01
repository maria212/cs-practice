// Task 1
import { Link } from "../hometask-3/link.js";
import { DoublyLinkedList } from "../hometask-3/DoublyLinkedList.js";

class Queue {
    #list: DoublyLinkedList = new DoublyLinkedList();
    readonly head = this.#list.getFirst();

    push(data: unknown) {
        if (this.#list.isEmpty()) {
            //    this.head =
        }
        this.#list.addLast(data);
    }

    pop(): Link {
        if (this.#list.isEmpty()) {
            throw Error('Queue is empty');
        } else {
            return this.#list.removeFirst();
        }
    }
}


const queue = new Queue();

queue.push(10);
queue.push(11);
queue.push(12);

console.log('head', queue.head);  // 10

console.log(queue.pop()); // 10

console.log('head', queue.head);  // 11

console.log(queue.pop()); // 11
console.log(queue.pop()); // 12
console.log(queue.pop()); // Exception
