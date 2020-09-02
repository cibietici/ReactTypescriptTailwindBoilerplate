import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface PersonProps extends RouteComponentProps<{id: string}>{}

interface PersonState {
  id: string;
  person?: string;
  name?: string;
}

export class NewInfo extends Component<PersonProps, PersonState> {

  constructor(props: PersonProps) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    }
  }

  render() {
    return (
      <>
        <h1 className="w-full text-center p-8 text-lg">
          Detail on
        </h1>
        <p className="w-full text-center text-2xl font-bold">
           {this.state.id}
        </p>
      </> 
    )
  }
}

export default NewInfo;