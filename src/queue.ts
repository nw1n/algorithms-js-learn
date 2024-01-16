class QueueByChatGPT<T> {
  private items: T[] = [];

  // Add an element to the end of the queue
  enqueue(item: T): void {
    this.items.push(item);
  }

  // Remove and return the front element from the queue
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // Return the front element without removing it
  front(): T | undefined {
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size(): number {
    return this.items.length;
  }
}

//const queue = new QueueByChatGPT()
//console.log(queue.isEmpty)
//queue.enqueue('a')
//queue.enqueue('b')
//console.log(queue)
//console.log(queue.isEmpty())
//console.log(queue.front())
//console.log(queue.dequeue())
//console.log(queue)

class QueueItem {
  public next:QueueItem
  public previous:QueueItem
  public content:any

  constructor(content?) {
    this.content = content ?? content
  }
}
class Queue {
  private head:QueueItem
  private tail:QueueItem
  public length:number = 0

  peek() {
    return this.tail;
  }

  enqueue(content) {
    const item = new QueueItem(content)
    if(this.length === 0) {
      this.head = this.tail = item
      this.length++
      return this
    }
    item.next = this.head
    this.head.previous = item
    this.head = item
    this.length++
    return this
  }
}

const queue = new Queue()
console.log(queue)
//const item1 = new QueueItem('one')
//const item2 = new QueueItem('two')
//const item3 = new QueueItem('three')
//console.log(item1)
queue.enqueue('one')
queue.enqueue('two')
queue.enqueue('three')
console.log(queue);
console.log(queue.peek().content)
console.log(queue.peek().previous.content)