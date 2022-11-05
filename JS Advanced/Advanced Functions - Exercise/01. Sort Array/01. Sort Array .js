function solve(array, sortBy) {
    return sortBy == 'asc' ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);
}