import React, {useState, useRef} from 'react';
import classNames from 'classnames/bind';
import SelectedOption from './SelectedOption';
import {ReactComponent as TriangleIcon} from '../../../assets/images/triangle.svg';
import {ReactComponent as ClearSelectIcon} from '../../../assets/images/clear-select.svg';
import styles from './SelectInput.module.scss';

const cx = classNames.bind(styles);

const SelectInput = ({
  id,
  selectValue,
  onChange,
  onBlur,
  errorMsg,
  fullWidth,
  multi,
  options,
  children,
}) => {
  const [focused, setFocused] = useState(false);
  const selectedOptions = options.filter(option =>
    selectValue.includes(option.id)
  );
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState('');
  console.log(errorMsg);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleChange = evt => {
    setValue(evt.target.value);
  };

  const handleBlur = evt => {
    setFocused(false);
    setTouched(true);
    onBlur(evt);
  };

  const selectOption = optionId => {
    console.log(id);
    onChange({target: {name: id, value: optionId}});
  };

  const deleteOption = optionId => {
    if (!multi) {
      onChange({target: {name: id, value: ''}});
    } else {
      onChange({
        target: {
          name: id,
          value: selectedOptions.filter(option => option.id !== optionId),
        },
      });
    }
  };

  const clearOptions = () => {
    onChange({target: {name: id, value: ''}});
  };

  const inputClass = cx({
    input: true,
    input_invalid: errorMsg,
    'full-width': fullWidth,
    focused: focused,
  });
  return (
    <div className={inputClass} onBlur={handleBlur}>
      <input
        id={id}
        name={id}
        className={styles['input__input-field']}
        type="text"
        value={value}
        placeholder={selectedOptions.length ? '' : children}
        onChange={handleChange}
        onFocus={handleFocus}
        required
      />
      {errorMsg ? (
        <div className={styles['input__error-message']}>{errorMsg}</div>
      ) : null}
      <div className={styles['input__dropdown-icon']}>
        <TriangleIcon />
      </div>
      {selectedOptions.length ? (
        <>
          <div className={styles['input__selected-options']}>
            {selectedOptions.map(option => (
              <SelectedOption
                key={option.id}
                option={option}
                onClick={deleteOption}
              />
            ))}
          </div>
          <div
            className={styles['input__clear-selection']}
            onClick={clearOptions}
          >
            <ClearSelectIcon />
          </div>
        </>
      ) : null}
      <ul className={styles['input__select-options']}>
        {options.map(option => (
          <li key={option.id} onMouseDown={() => selectOption(option.id)}>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectInput;
