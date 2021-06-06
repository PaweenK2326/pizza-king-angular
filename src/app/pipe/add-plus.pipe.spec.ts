import { AddPlusPipe } from './add-plus.pipe';

describe('AddPlusPipe', () => {
  it('create an instance', () => {
    const pipe = new AddPlusPipe();
    expect(pipe).toBeTruthy();
  });
});
