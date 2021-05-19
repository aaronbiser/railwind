import React from 'react';
import { Table, TableRow as TR, TableCell as TD } from '../component-lib'
import { AllHTMLElementProps } from '../component-lib/types';

const rwStyle: AllHTMLElementProps = { borderColor: 'border-color1-400', borderStyle: 'border-solid', borderWidth: 'border' }

const TableExample = () => {
  return (
    <Table rwStyle={rwStyle} dataTestId='testingz'>
      <thead>
        <TR rwStyle={rwStyle}>
          <TD as='th'>Column 1</TD>
          <TD as='th'>Column 2</TD>
          <TD as='th'>Column 3</TD>
        </TR>
      </thead>
      <tbody>
        <TR rwStyle={rwStyle}>
          <TD as='td'>Column 1</TD>
          <TD as='td'>Column 2</TD>
          <TD as='td'>Column 3</TD>
        </TR>
        <TR>
          <TD as='td'>Column 1</TD>
          <TD as='td'>Column 2</TD>
          <TD as='td'>Column 3</TD>
        </TR>
        <TR>
          <TD as='td'>Column 1</TD>
          <TD as='td'>Column 2</TD>
          <TD as='td'>Column 3</TD>
        </TR>
      </tbody>
    </Table>
  );
};

export default TableExample
