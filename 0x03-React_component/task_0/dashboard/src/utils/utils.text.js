import { getFullYear } from './utils';
import { getFooterCopy } from './utils';
import { getLatestNotification } from './utils';


test('should return the current year', () => {
    expect(getFullYear()).toBe(2024);
});

test('should return the correct footer when isIndex is true or false', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('should return the correct notification string', () => {
    const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedNotification);
});