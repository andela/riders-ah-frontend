/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux'
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Routes from '../../views/routes';
import Home from '../../views/home'
import NotFound from '../../views/notFound'
import {Login} from '../../components/authentication/login';
import ViewArticles from '../../components/articles/viewArticles'
import configureStore from '../../store';

describe('Routes', ()=> {
    test('it should render the Home component', ()=>{
        const component = mount(<Provider store = { configureStore() } >
        <MemoryRouter initialEntries={['/']}>
            <Routes />
        </MemoryRouter>
        </Provider>);
        expect(component.find(Home)).toHaveLength(1)
    });
    test('it should render the notfound component', ()=>{
        const component = mount(<Provider store = { configureStore() } >
        <MemoryRouter initialEntries={['/bbbb']}>
            <Routes />
        </MemoryRouter>
        </Provider>);
        expect(component.find(NotFound)).toHaveLength(1)
    });
    test('it should render the login component', ()=>{
        const component = mount(<Provider store = { configureStore() } >
        <MemoryRouter initialEntries={['/login']}>
            <Routes />
        </MemoryRouter>
        </Provider>);
        expect(component.find(Login)).toHaveLength(1)
    });
    test('it should render the ViewArticles component', ()=>{
        const component = mount(<Provider store = { configureStore() } >
        <MemoryRouter initialEntries={['/articles']}>
            <Routes />
        </MemoryRouter>
        </Provider>);
        expect(component.find(ViewArticles)).toHaveLength(1)
    });
});
