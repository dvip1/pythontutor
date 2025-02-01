'use client';
export class LocalStorageItem {
    setItem(key: string, value: string) {
        try {
            const item = typeof value === 'object' ? JSON.stringify(value) : value;
            localStorage.setItem(key, item);
        } catch (error) {
            console.error('Error setting localStorage item:', error);
        }
    };


    getItem(key: string) {
        try {
            const item = localStorage.getItem(key);
            if (item)
                return JSON.parse(item)
            else return item;
        } catch (error) {
            console.error('Error getting localStorage item:', error);
            return null;
        }
    };


    hasItem(key: string) {
        return localStorage.getItem(key) !== null;
    };

    removeItem(key: string) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing localStorage item:', error);
        }
    };
}

