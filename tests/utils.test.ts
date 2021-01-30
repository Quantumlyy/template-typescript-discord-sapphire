import { utilsMainTest } from '../src/lib/utils/utils';

describe('Tests', () => {
	test('should pass', () => {
		expect(utilsMainTest()).toBe('this builds and pushes');
	});
});
