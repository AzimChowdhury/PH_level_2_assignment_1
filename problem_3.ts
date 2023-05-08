function reverser<T>(...elements: T[]): T[] {
    return elements.reverse()
}

const reverse = reverser('a','b','c','d')
console.log(reverse);