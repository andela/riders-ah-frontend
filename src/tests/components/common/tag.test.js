import React from 'react';
import {shallow} from 'enzyme';
import {Tags} from '../../../components/common/tag.jsx'

test('Tags Component', () => {
    const props = {
        tags: ['amandazi', 'aaa']
    }
    
    const checkTags = shallow(<Tags  {...props}/>)
    expect(checkTags).toHaveLength(1);
})
