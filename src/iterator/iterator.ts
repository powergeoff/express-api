export interface IIterator<T> {
    hasNext: () => boolean;
    current: () => T;
    next: () => void;
}