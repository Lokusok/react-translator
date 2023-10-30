import React from 'react';

import TextArea from '@/layout/TextArea';

import { InputCompProps } from '@/models/inputs';

const FromText: React.FC<InputCompProps> = ({ placeholder, addLine, value, setValue }) => {
  return <TextArea placeholder={placeholder} addLine={addLine} value={value} setValue={setValue} />;
};

export default FromText;
