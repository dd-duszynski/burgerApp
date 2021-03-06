import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
	let wrapper;
   
   beforeEach(() => {
		wrapper = shallow(<NavigationItems />);
	});

	it('should render 2x <NavigationItem/> elements if not authenticated.', () => {
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});

	it('should render 3x <NavigationItem/> elements if authenticated.', () => {
		//metoda 1
		// wrapper = shallow(<NavigationItems isAuthenticated />);
		//metoda 2 - odpowiednik powyższego
		wrapper.setProps({ isAuthenticated: true });
		expect(wrapper.find(NavigationItem)).toHaveLength(3);
   });
   
	it('should an exact logout button.', () => {
		wrapper.setProps({ isAuthenticated: true });
		expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
	});
});
