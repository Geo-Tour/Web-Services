
import { mount } from 'enzyme';
import Index from '../pages/index';
import { returnFive } from '../test_function/sample_function';
// const sum = (a: number, b: number) => a + b;

// describe('sum()', () => {
//   it('should return 5 if given 2 and 3 ', () => {
//     expect(sum(2, 3)).toBe(5)
//   })
// })

describe('Index Page', () => {
  it('should render', () => {
    const wrapper = mount(<Index />);
    console.log(wrapper);
    // expect(wrapper.find('h1')).toHaveLength(1);
  });
});

describe("returnFive", () => {
  it('should return 5', () => {
    expect(returnFive()).toBe(5);
  })
})