import React, {useState, useRef} from 'react';
import classNames from 'classnames/bind';
import SelectedOption from './SelectedOption';
import {ReactComponent as TriangleIcon} from '../../../assets/images/triangle.svg';
import {ReactComponent as ClearSelectIcon} from '../../../assets/images/clear-select.svg';
import styles from './SelectInput.module.scss';

const cx = classNames.bind(styles);

const SelectInput = ({
  id,
  onChange,
  onBlur,
  errorMsg,
  fullWidth,
  multi,
  options,
  children,
}) => {
  const [focused, setFocused] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState('');

  const inputRef = useRef();
  const inputWrapperRef = useRef();

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

  const addSelectedOptions = options => {
    console.log('click');
    if (!multi) {
      setSelectedOptions(options);
    }
  };

  const deleteOption = id => {
    setSelectedOptions(prevOptions => {
      return prevOptions.filter(option => option.id !== id);
    });
  };

  const clearOptions = () => {
    setSelectedOptions([]);
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
        placeholder={children}
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
          <li key={option.id} onMouseDown={() => addSelectedOptions([option])}>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectInput;
