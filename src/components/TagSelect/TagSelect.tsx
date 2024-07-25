import React from "react";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


interface TagSelectProps {
  defaultOption: OptionType;
  data: OptionType[];
  className: string;
}

interface OptionType {
  value: string;
  label: string;
}

const TagSelect: React.FunctionComponent<TagSelectProps> = ({ defaultOption, data, className }) => {
  const animatedComponents = makeAnimated()

  return (
    <div className={className}>
      <Select<OptionType, true>
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={defaultOption}
        isMulti
        options={data}
      />
    </div>
  );
}

export default TagSelect;