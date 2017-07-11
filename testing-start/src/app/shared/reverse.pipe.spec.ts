import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('should be reversed', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('hello')).toEqual('olleh');
  })
})

