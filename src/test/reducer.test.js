import React from 'react';
import Enzyme from 'enzyme';
import uuid from 'uuid/v1';
import reducer from '../appState/reducer';



describe('Reducer tests', () => {
  let category = {name: 'Pebbles', createDate: new Date(), id: uuid()};
  let state;



  test('add a new category', () => {
    let action = {type: 'CATEGORY_ADD', payload: category};
    state = reducer(state, action);

    expect(state.length).toEqual(1);
    expect(state[0].name).toEqual('Pebbles');
  });



  test('update a category', () => {
    let newCategory = {name: 'updated successfully'};
    state = reducer(state, {
      type: 'CATEGORY_UPDATE',
      payload: {
        name: newCategory.name,
        createDate: new Date(),
        id: category.id,
      }
    });

    expect(state[0].name).toEqual('updated successfully');
    expect(state.length).toEqual(1);
  });



  test('remove a category', () => {
    let dog1 = {name: 'Dog1', id: uuid()};
    let dog2 = {name: 'Dog2', id: uuid()};
    state = [{...dog1}, {...dog2}];

    state = reducer(state, {
      type: 'CATEGORY_DESTROY',
      payload: dog2.id
    });

    expect(state.length).toEqual(2);
    expect(state[0].name).toEqual('Dog1');
  });
});
