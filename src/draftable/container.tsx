import Draftable from './Draftable';
import * as actions from './actions';
import { StoreState } from './store';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ selected }: StoreState) {
  return {
    selected: selected > 0
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Draftable);

// import * as React from ‘react’;
// export interface StatefulCounterProps {
//   label: string;
// }

// // By making state a class we can define default values.
// class StatefulCounterState {
//   readonly count: number = 0;
// };

// // A stateful counter can be a React.PureComponent
// export class StatefulCounter
//   extends React.PureComponent<StatefulCounterProps, StatefulCounterState>
// {
//   // Define
//   readonly state = new State();

//   // Callbacks should be defined as readonly fields initialized with arrow functions, so you don’t have to bind them
//   // Note that setting the state based on previous state is done using a callback.
//   readonly handleIncrement = () => {
//     this.setState((prevState) => { 
//       count: prevState.count + 1 } as StatefulCounterState);
//   }

//   // We explicitly include the return type
//   render(): React.ReactNode {
//     return (
//       <div>
//         <span>{this.props.label}: {this.props.count} </span>
//         <button type=”button” onClick={this.handleIncrement}>
//            {`Increment`}
//         </button>
//       </div>
//      );
//   }
// }