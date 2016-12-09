import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../../../src/client/jsx/components/App';

describe('<App />', () => {
  it('renders App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#app-root')).to.have.length(1);
  });
});
