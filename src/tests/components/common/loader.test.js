import React from 'react';
import {shallow} from 'enzyme';
import {Loader} from '../../../components/common/loader.jsx'

test('loader Component', () => {
    const checkLoader = shallow(<Loader/>)
    checkLoader.find('img');
})
