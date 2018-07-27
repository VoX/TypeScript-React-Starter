import * as React from 'react';
import * as enzyme from 'enzyme';
import Draftable from './Draftable';
import { DisplayDraftable } from './DisplayDraftable';
import { Selectable } from './SelectList';

const draftable: DisplayDraftable & Selectable = {
  DraftableId: 1,
  ImageUrl: 'https://d327rxwuxd0q0c.cloudfront.net/m/mlb_65/392121.png',
  Name: 'Someone',
  Position: 'P',
  Salary: 41847,
  id: '1',
  selected: false,
  onSelect: jest.fn()
};

it('renders a draftable with the image', () => {
  const wrapper = enzyme.shallow(<Draftable {...draftable} />);
  const el = wrapper.find('img');
  expect(el).toHaveLength(1);
  expect(el.props().src).toBe(draftable.ImageUrl);
});

it('has selected class when selected', () => {
  const wrapper = enzyme.shallow(<Draftable {...draftable} />);
  const el = wrapper.find('div.draftable');
  expect(el).toHaveLength(1);
  expect(wrapper.find('img').props().src).toBe(draftable.ImageUrl);
});