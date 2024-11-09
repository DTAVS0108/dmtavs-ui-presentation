import { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import chroma from 'chroma-js';
import { components } from 'react-select';
import React from 'react';

type OptionType = { value: string; label: string };

const CustomMenuList = (props) => {
  const { children, innerRef, selectProps } = props;
  const { onCreateOption, inputValue, onInputChange } = selectProps;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      onCreateOption(inputValue.trim());
      event.preventDefault();
    }
  };

  return (
    <components.MenuList {...props} innerRef={innerRef}>
      {children}
      <div style={{ padding: '8px', borderTop: '1px solid #ddd', display: "none" }}>
        <input
          type="text"
          placeholder="Add other skill..."
          value={inputValue}
          onChange={(event) => onInputChange(event.target.value)}
          onKeyDown={handleKeyDown}
          style={{ width: '100%', boxSizing: 'border-box', padding: '8px'}}
        />
      </div>
    </components.MenuList>
  );
};

const MultiFiledSelector = ({ onSkillsChange, optionList, placeHolder, inputValue, setInputValue, initialSkills }) => {
  const [options, setOptions] = useState(optionList || []);
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

  useEffect(() => {
    const initialSelectedOptions = (initialSkills || []).map(skill => ({
      label: skill,
      value: skill.toLowerCase(),
    }));
    setSelectedOptions(initialSelectedOptions);
    
    const filteredOptions = (optionList || []).filter(
      option => !initialSkills.includes(option.label)
    );
    setOptions(filteredOptions);
  }, [initialSkills, optionList]);

  const handleChange = (selected) => {
    console.log('Selected options:', selected);
    setSelectedOptions(selected || []);
    sendSkillsToParent(selected);
  };

  const handleCreate = (inputValue) => {
    if (inputValue.trim()) {
      const newOption = { value: inputValue.toLowerCase(), label: inputValue };
      setOptions([...options, newOption]);
      const newSelected = [...selectedOptions, newOption];
      console.log('New selected options:', newSelected);
      setSelectedOptions(newSelected);
      sendSkillsToParent(newSelected);
      setInputValue('');
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const sendSkillsToParent = (selected) => {
    const selectedSkills = selected.map(option => option ? option.label : null).filter(label => label !== null);
    console.log('Selected skills:', selectedSkills);
    onSkillsChange(selectedSkills); // Send array of labels
  };

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color || '#000000');
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color || '#FF8B00');
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
        color: "#000000"
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color || '#000000',
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color || '#000000',
      ':hover': {
        backgroundColor: data.color || '',
        color: '#000000',
      },
    }),
    menu: (styles) => ({
        ...styles,
        zIndex: 999, // Add z-index here
      }),
  };

  return (
    <CreatableSelect
      isMulti
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      onCreateOption={handleCreate}
      styles={colourStyles}
      closeMenuOnSelect={false}
      isSearchable
      placeholder={placeHolder}
      components={{ MenuList: CustomMenuList }}
      onInputChange={handleInputChange}
      inputValue={inputValue}
    />
  );
};

export default MultiFiledSelector;
