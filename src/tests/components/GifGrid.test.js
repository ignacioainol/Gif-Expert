import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Unit Test in <GifGrid />', () => {
    test('It must to do match with snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const category = 'Another Night'
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('it should show items when images are loaded with useFetchGifs', () => {

    })


});
