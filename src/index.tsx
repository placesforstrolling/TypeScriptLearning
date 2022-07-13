interface Product {
    name: string;
    price: number;
}

type Optional<T> = {
    [K in keyof T]?: T[K]
}

type Nullable<T> = {
    [K in keyof T]?: T[K] | null
}

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K]
}

let product: ReadOnly<Product> = {
    name: 'a',
    price: 1
};