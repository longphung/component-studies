import React from 'react';
import { Select as SelectComponent } from 'components';

const Select = () => {
  const testData = [
    {
      text: 'Test 1',
      value: 'test1',
    },
    {
      text: 'Test 2',
      value: 'test2',
    },
    {
      text: 'Test 3',
      value: 'test3',
    },
  ];
  return (
    <div style={{ width: '1180px', margin: '0 auto' }}>
      <SelectComponent options={testData} placeholder="Test placeholder" label="Label 1" />
      <br />
      <br />
      <br />
      <SelectComponent options={testData} label="Label 2" />
    </div>
  );
};

export default Select;
