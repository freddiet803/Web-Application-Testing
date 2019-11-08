import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'
import {Dashboard} from './components/Dashboard.js'
import {Display} from './components/Display.js'
import {shallow, configure} from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test('render without crashing', () =>{
  const container = render(<App/>);
  console.log(container);
  expect(container.firstChild).toMatchSnapshot();
});

test('render dashboard without crashing', ()=>{
  const dashboard = render(<Dashboard/>);
  expect(dashboard.firstChild).toMatchSnapshot();
});

test('render display without crashing', () =>{
  // const theDisplay = render(<Display/>);
  // console.log(theDisplay);

  const wrapper = shallow(
    <Display batInfo={{balls: 0,
      strikes: 0, 
      hits: 0, 
      fouls: 0}}/>
  )
  console.log(wrapper.debug());
  //expect(theDisplay.firstChild).toMatchSnapshot();
    expect(toJson(wrapper)).toMatchSnapshot()
});


