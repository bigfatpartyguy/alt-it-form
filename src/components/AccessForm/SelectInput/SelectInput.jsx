import React, {useState, useRef} from 'react';
import classNames from 'classnames/bind';
import SelectedOption from './SelectedOption';
import {ReactComponent as TriangleIcon} from '../../../assets/images/triangle.svg';
import {ReactComponent as ClearSelectIcon} from '../../../assets/images/clear-select.svg';
import {ReactComponent as CheckboxIcon} from '../../../assets/images/checkbox.svg';
import {ReactComponent as CheckboxActiveIcon} from '../../../assets/images/checkbox-active.svg';
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
  const [activeOptions, setActiveOptions] = useState([]);
  const [selectionHappens, setSelectionHappens] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleFocus = () => {
    setFocused(true);
  };

  const handleChange = evt => {
    setValue(evt.target.value);
  };

  const handleBlur = evt => {
    setFocused(prev => {
      if (selectionHappens) {
        inputRef.current.focus();
        return prev;
      }
      return false;
    });
    onBlur(evt);
  };

  const selectOption = optionId => {
    if (!multi) {
      onChange({target: {name: id, value: optionId}});
    } else {
      setSelectionHappens(true);
      setActiveOptions(prev => {
        if (prev.includes(optionId)) {
          return prev.filter(id => id !== optionId);
        }
        return [...prev, optionId];
      });
      setTimeout(() => setSelectionHappens(false), 200);
    }
  };

  const addSelectedOptions = () => {
    onChange({target: {name: id, value: activeOptions}});
  };

  const deleteOption = optionId => {
    if (!multi) {
      onChange({target: {name: id, value: ''}});
    } else {
      setActiveOptions(prev => {
        return prev.filter(id => id !== optionId);
      });
      onChange({
        target: {
          name: id,
          value: selectedOptions
            .filter(option => option.id !== optionId)
            .map(option => option.id),
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
        ref={inputRef}
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
        <>
          {options.map(option => (
            <li key={option.id} onMouseDown={() => selectOption(option.id)}>
              {multi ? (
                <span className={styles['option-icon']}>
                  {activeOptions.includes(option.id) ? (
                    <CheckboxActiveIcon />
                  ) : (
                    <CheckboxIcon />
                  )}
                </span>
              ) : null}
              {option.name}
            </li>
          ))}
          {multi ? (
            <button
              type="button"
              className={styles['input__select-options__accept-btn']}
              onMouseDown={addSelectedOptions}
            >
              Применить
            </button>
          ) : null}
        </>
      </ul>
    </div>
  );
};

export default SelectInput;
