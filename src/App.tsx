import * as React from 'react';
import './App.css';
import Draftable from './draftable/Draftable';
import { DisplayDraftable } from './draftable/DisplayDraftable';
import { SelectList, Identity, Selectable } from './draftable/SelectList';
import { DraftableProvider } from './draftable/DraftableProvider';
import Enumerable from 'typescript-dotnet-commonjs/System.Linq/Linq';

const logo = require('./logo.svg');

export interface AppConfigurationProps {
  apiConnectionString: string;
}

interface State {
  readonly draftables: DisplayDraftable[];
}

export default class App extends React.Component<AppConfigurationProps, State> {
  readonly state: State = {
    draftables: [],
  };

  async getDraftables() {
    const response = await new DraftableProvider(this.props.apiConnectionString).getDraftables(20556);
    const mapped = Enumerable.from(response.draftables).where(x => x.isDisabled === false).select(x => {
      return {
        ImageUrl: x.playerImageFull,
        DraftableId: x.draftableId,
        Name: x.displayName,
        Position: x.position,
        Salary: x.salary,
        id: x.draftableId.toString()
      };
    }).take(20);
    this.setState({ draftables: mapped.toArray() });
  }

  render() {
    return (
      <div className="App" >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
        <button onClick={() => this.getDraftables()} > getDraftables </button>
        <SelectList items={this.state.draftables} itemRenderer={Draftable} />
      </div >
    );
  }
}