import * as React from 'react';
import * as enzyme from 'enzyme';
import Draftable from './Draftable';
import { DisplayDraftable } from './DisplayDraftable';

const draftable: DisplayDraftable = {
  DraftableId: 1,
  ImageUrl: 'https://d327rxwuxd0q0c.cloudfront.net/m/mlb_65/392121.png',
  Name: 'Someone',
  Position: 'P',
  Salary: 41847
};

// it('renders the correct text when no enthusiasm level is given', () => {
//   const hello = enzyme.shallow(<Draftable name="Daniel" />);
//   expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
// });

// it('renders the correct text with an explicit enthusiasm of 1', () => {
//   const hello = enzyme.shallow(<Draftable name="Daniel" enthusiasmLevel={1} />);
//   expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
// });

// it('renders the correct text with an explicit enthusiasm level of 5', () => {
//   const hello = enzyme.shallow(<Draftable name="Daniel" enthusiasmLevel={5} />);
//   expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
// });

it('renders a draftable with the image', () => {
  const wrapper = enzyme.shallow(<Draftable draftable={draftable} />);
  expect(wrapper.find('img')).toHaveLength(1);
  expect(wrapper.find('img').props().src).toBe(draftable.ImageUrl);
});