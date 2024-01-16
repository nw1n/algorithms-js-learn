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
  public next?: QueueItem
  public previous?: QueueItem
  public content:any

  constructor(content: any) {
    this.content = content
  }
}
class Queue {
  private head?: QueueItem
  private tail?: QueueItem
  public length : number = 0

  peek(): any {
    return this.tail ? this.tail.content : undefined;
  }

  enqueue(content: any) {
    const item = new QueueItem(content)
    if(this.length === 0) {
      this.head = this.tail = item
      this.length++
      return
    }
    const head = this.head as QueueItem
    item.next = head
    head.previous = item
    this.head = item
    this.length++
  }

  dequeue(): any {
    if(this.length === 0) {
      return null
    }
    if(this.length === 1) {
      const item = this.tail as QueueItem
      this.tail = this.head = undefined
      return item.content
    }
    const tail = this.tail as QueueItem
    this.tail = tail.previous
    return tail.content
  }
}

const queue = new Queue()
console.log(queue)
queue.enqueue('one')
queue.enqueue('two')
queue.enqueue('three')
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.peek())
queue.enqueue('four')
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.peek())
