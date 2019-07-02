import React from 'react';
import {shallow} from 'enzyme';
import  NotFound  from '../../views/notFound';


describe('not found page', ()=>{
    it('Should render a not found page', () => {
        const wrapper = shallow(<NotFound />)
        wrapper.find('#notFound')
    });
});
