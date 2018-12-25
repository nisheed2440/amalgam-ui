import React from 'react';
import { shallow } from 'enzyme';
import Component from './Component.component';

describe('Component', () => {
  test('should initialize with default props', () => {
    const componentCamelCase = shallow(<Component />);
    expect(componentCamelCase.text()).toEqual('Hello Component');
  });

  test('should initialize with set props', () => {
    const componentCamelCase = shallow(<Component foo="Hello World" />);
    expect(componentCamelCase.text()).toEqual('Hello World');
  });
});
