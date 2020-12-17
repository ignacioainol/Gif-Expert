import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = "Some Title";
    const url = 'https://localhost/image.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el title', () => {
        const paraph = wrapper.find('p');
        expect(paraph.text().trim()).toBe(title);
    })

    test('debe de tener la imagen igual al url y alt de los props ', () => {
        const img = wrapper.find('img');
        // console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('src')).toBe(url);
    });

    test('Debe de tener animate__fadeIn ', () => {
        const div = wrapper.find('div');
        // console.log(div.prop('className').includes('animate__fadeIn'));
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    })




})