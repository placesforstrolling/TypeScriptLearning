let i: number = 25;
function reject (message: string): never {
    throw new Error(message);
}

function processEvents(): never {
    while (true) {
        // Read message from a queue
    }
}

reject('...');
i = 20;
console.log('Hello World!');
console.log(1);
i = 45;