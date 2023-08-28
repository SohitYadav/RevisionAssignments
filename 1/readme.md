1.  Node.js is an open-source, server-side, runtime environment built on the V8 JavaScript engine developed by Google. It allows you to execute JavaScript code on the server, which traditionally runs in web browsers

2.  
Node.js is non-blocking because it doesn't wait for tasks like reading files or making network requests to finish before moving on to other tasks. Instead, it starts tasks, continues with other work, and then comes back to finish those tasks when they're done. 


3.  Throughput refers to the rate at which your application can process tasks or requests. It measures the number of tasks completed or requests handled within a specific unit of time.


4.  Node.js achieves high I/O throughput primarily due to its non-blocking, event-driven architecture.

5.  CPU-intensive tasks are computing operations that require a significant amount of processing power and computational resources from the central processing unit (CPU) of a computer or server

6.  Blocking the main thread in Node.js can lead to performance issues and unresponsiveness of your application. This occurs when a particular operation takes a significant amount of time to complete and, during that time, the main thread is occupied and unable to handle other tasks.

7.   The event loop is a loop that continuously checks for events (like I/O operations, timers, or callbacks) in the event queue and processes them one by one. Each event corresponds to a task that needs to be executed.