import React from 'react';
import { shallow } from 'enzyme';
import { CommentEditHistory } from '../../../components/comment/editHistory'

const props = {
    onClose: jest.fn(),
    display: jest.fn(),
    state:{comment:{history:[{body:'hhh', createdAt: new Date()}]}}
}

test('editHistory Component', () => {
    const checkeditHistory = shallow(<CommentEditHistory {...props} />);
    checkeditHistory.setProps(props);
});
