import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('should create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('hello')).toEqual('olleh');
  });
});
