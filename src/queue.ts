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


const queue = new QueueByChatGPT()
console.log(queue.isEmpty)
queue.enqueue('a')
queue.enqueue('b')
console.log(queue)
console.log(queue.isEmpty())
console.log(queue.front())
console.log(queue.dequeue())
console.log(queue)