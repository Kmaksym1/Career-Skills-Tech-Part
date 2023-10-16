import { useState } from 'react';
import Select from 'react-select';

const DropDownMenu = ({ flexDirection, filter }) => {
  const optionValue = [
    { value: 'showall', label: 'show all' },
    { value: true, label: 'following' },
    { value: false, label: 'follow' },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    valueContainer: provided => ({
      ...provided,
      display: 'flex',
      //   flexDirection: flexDirection,

      width: 200,
    }),
    control: provided => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
      borderColor: 'transparent',
      boxShadow: 'none',
      width: 210,
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      backgroundColor: '#471ca9',
      borderRadius: 20,
      // color: isFocused ? '#ffffff' : '#040210',
      color: isFocused ? '#ffffff' : '#8376da',
      display: 'flex',
      alignItems: 'flex-start',
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: '#471ca9',
      borderRadius: 20,
      width: 200,
      zIndex: 999,
    }),
    singleValue: provided => ({
      ...provided,
      color: '#F3F3F3',
    }),
    placeholder: provided => ({
      ...provided,
      color: '#F3F3F3',
      fontSize: '25px',
      textTransform: 'uppercase',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      cursor: 'pointer',
      '&:hover': {
        color: '#F3F3F3',
      },
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
    }),
  };

  const selectContainer = {
    position: 'relative',
    top: '-50px',
    left: '980px',
  };
  return (
    <div style={selectContainer}>
      <Select
        options={optionValue}
        placeholder="show all"
        styles={{ ...customStyles }}
        onChange={selectedOption => {
          console.log('selectedOption', selectedOption.value);
          filter(selectedOption.value);
        }}
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default DropDownMenu;
