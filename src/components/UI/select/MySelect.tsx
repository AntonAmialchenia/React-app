import React, { ChangeEvent } from 'react';

type Option = {
  value: string;
  name: string;
};

interface MySelectProps {
  defaultValue: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const MySelect: React.FC<MySelectProps> = ({ defaultValue, options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}>
      <option disabled value="value">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
