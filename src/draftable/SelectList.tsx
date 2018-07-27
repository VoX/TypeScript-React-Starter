import * as React from 'react';

interface State {
    readonly selected: Identity[];
}

export interface Identity {
    id: string;
}

export interface Selectable extends Identity {
    onSelect?: () => void;
    selected?: boolean;
}

export interface GenericListProps<T extends Identity> {
    items: T[];
    itemRenderer: (item: T) => JSX.Element;
}

export class SelectList<T extends Identity> extends React.Component<GenericListProps<T>, State> {
    readonly state: State = {
        selected: [],
    };

    handleSelect = (selected: Identity) => {
        this.setState({ selected: [selected] });
    }

    render() {
        const { items, itemRenderer } = this.props;
        const { handleSelect } = this;
        const { selected } = this.state;

        return (
            <div>
                {items.map(itemRenderer)}
            </div>
        );
    }
}