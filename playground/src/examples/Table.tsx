import React from 'react';
import { Table, TableRow as TR, TableCell, Text } from '../component-lib'
import { AllHTMLElementProps } from '../component-lib/types';

const rwStyle: AllHTMLElementProps = { borderColor: 'border-color1-400', borderStyle: 'border-solid', borderWidth: 'border' }

const TH = ({ children }: any) => {
  return (
    <TD as='th' rwStyle={{ padding: 'p-2' }}>
      <Text
        rwStyle={{ 
          fontWeight: 'font-bold'
        }}
      >
      {children}
      </Text>
    </TD>
  )
}

const TD = ({ children }: any) => {
  return (
    <TableCell as='td' rwStyle={{ padding: 'p-2' }}>
      <Text>
      {children}
      </Text>
    </TableCell>
  )
}

const TableExample = () => {
  return (
    <Table rwStyle={rwStyle}>
      <thead>
        <TR rwStyle={rwStyle}>
          <TH>Column 1</TH>
          <TH>Column 2</TH>
          <TH>Column 3</TH>
        </TR>
      </thead>
      <tbody>
        <TR rwStyle={rwStyle}>
          <TD>Column 1</TD>
          <TD>Column 2</TD>
          <TD>Column 3</TD>
        </TR>
        <TR rwStyle={rwStyle}>
          <TD>Column 1</TD>
          <TD>Column 2</TD>
          <TD>Column 3</TD>
        </TR>
        <TR rwStyle={rwStyle}>
          <TD>Column 1</TD>
          <TD>Column 2</TD>
          <TD>Column 3</TD>
        </TR>
      </tbody>
    </Table>
  );
};

export default TableExample
