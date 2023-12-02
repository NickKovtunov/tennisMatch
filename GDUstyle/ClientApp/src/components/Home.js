import React, { Component } from 'react';
import { Users } from './Users'

export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (
          <div>
              <h1>5.2. Внутренние визуальные коммуникации</h1>
              <Users></Users>
          </div>
    );
  }
}
