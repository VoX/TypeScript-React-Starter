import * as React from 'react';
import './Draftable.css';
import { DisplayDraftable } from './DisplayDraftable';
import { Selectable } from './SelectList';

export interface Props extends DisplayDraftable, Selectable {
}

function Draftable(props: Props) {
  return (
    <div className={`draftable ${props.selected ? 'selected' : ''}`} onClick={props.onSelect}>
      <img src={props.ImageUrl} />
      <span>{props.Name}</span>
      <span>${props.Salary}</span>
      <span>{props.Position}</span>
    </div>
  );
}

export default Draftable;
