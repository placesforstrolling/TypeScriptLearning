interface Result<T> {
    data: T | null,
    error: string | null,
    from: string
}

function fetch<T>(url: string): Result<T> {
    return {data: null, error: null, from: url}
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

let result = fetch<Product>('url');
result.data?.title