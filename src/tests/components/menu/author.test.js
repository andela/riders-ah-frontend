import React from 'react';
import { shallow } from 'enzyme';
import { store } from '../../../../helpers/utils/testUtils';
import Author from '../../../components/menu/author'

test('Author Component', () => {
    const wrapper = shallow(<Author store={store}/>);
    expect(wrapper.exists()).toBe(true);
})
