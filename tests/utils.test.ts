import { mainTest } from '../src/lib/utils/utils';

describe('Tests', () => {
	test('should pass', () => {
		expect(mainTest()).toBe('this builds and pushes');
	});
});
