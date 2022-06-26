import reverse from '../src/index.js';

test('reverse', () => {
    expect(reverse('hellou')).toEqual('uolleh');
    expect(reverse('')).toEqual('');
});