import * as React from 'react';
import './Draftable.css';
import { DisplayDraftable } from './DisplayDraftable';

export interface Props {
  draftable: DisplayDraftable;
  selected?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Draftable(props: Props) {
  return (
    <div className="draftable">
      <img src={props.draftable.ImageUrl} />
    </div>
  );
}

export default Draftable;
