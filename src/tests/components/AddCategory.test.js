import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('debe de mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto ', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('Do not must post the information on submit ', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('it must to call setCategories function and clear the input ', () => {
        const value = 'Hola mundo';

        //1.similar el input change
        wrapper.find('input').simulate('change', { target: { value } });

        //2.simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        //3.setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //4.input value will be ''
        const input = wrapper.find('input');
        // input.simulate('change', { target: {  } });
        expect(wrapper.find('input').prop('value')).toBe('');
    })




})