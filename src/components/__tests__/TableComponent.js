import React from 'react';
import render from '@testing-library/react';
import TableComponent from '../TableComponent';

it('Renders the expected term',()=>{
    const expectedTerm = 'this is a test'
    const {getByText} = render(<TableComponent term ={expectedTerm}/>)
    expect(getByText(expectedTerm).toBeInTheDocument())
})
