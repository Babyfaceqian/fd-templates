import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('render', () => {
  const component = renderer.create(
    <Main />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('shallow', () => {
    const MainShallow = shallow(<Main />);
    expect(MainShallow.find('div').text()).toEqual('A React Front-End Project');
})