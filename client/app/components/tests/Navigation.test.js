import { isOpen, isActive } from '../Navigation';

describe('return class methods', () => {
  test('#isOpen', () => {
    expect(isOpen(true)).toEqual('open');
    expect(isOpen()).toEqual('');
  });
  test ('#isActive', () => {
    expect(isActive(3, 3)).toEqual('active');
    expect(isActive(0, 3)).toEqual('');
  });
});
