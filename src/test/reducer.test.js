import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';
import reducer from '../appState/reducer';



describe('Reducer Test', () => {
  let category = {name: 'Selena', createDate: new Date(), id: uuid()};
  let state;


  test('add new category', () => {
    let action = {type: 'CATEGORY_ADD', payload: category};
    state = reducer(state, action);

    expect(state.length).toEqual(1);
    expect(state[0].name).toEqual('Selena');
  });


  test('update category', () => {
    let newCategory = {name: 'Gomez'};
    state = reducer(state, {
      type: 'CATEGORY_UPDATE',
      payload: {
        name: newCategory.name,
        createDate: new Date(),
        id: category.id,
      }
    });

    expect(state[0].name).toEqual('Gomez');
    expect(state.length).toEqual(1);
  });


  test('remove category', () => {
    let catOne = {name: 'catOne', id: uuid()};
    let catTwo = {name: 'catTwo', id: uuid()};
    state = [{...catOne}, {...catTwo}];

    state = reducer(state, {
      type: 'CATEGORY_DESTORY',
      payload: catOne.id
    });

    expect(state.length).toEqual(1);
    expect(state[0].name).toEqual('catTwo');
  });
});
