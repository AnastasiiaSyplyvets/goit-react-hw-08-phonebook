import React from 'react';
import { useDispatch } from 'react-redux';

import { changeFilterAction } from '../../redux/filterSlice';

import css from './Filter.module.css';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(changeFilterAction(e.target.value));
  };

  return (
    <label className={css.findOption}>
      <p>Find contacts by name</p>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="#BAF0BC"></Search2Icon>
        </InputLeftElement>
        <Input
          size="sm"
          width="30%"
          className={css.filterInput}
          type="text"
          onChange={changeFilter}
        ></Input>
      </InputGroup>
    </label>
  );
};
