import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from './Category-form';
import CategoryList from './Category-list';
import {createCategory, updateCategory, deleteCategory} from '../../appState/actions';



class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="categoryWrapper">
      <CategoryForm handler={this.props.handleAddCategory}/>
      <CategoryList
        categories={this.props.categories}
        handleDelete={this.props.handleDeleteCategory}
        handleUpdate={this.props.handleUpdateCategory}
        handleCategories={this.props.categories}/>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  categories: state
});



const mapDispatchToProps = (dispatch, getState) => ({
  handleAddCategory: category => dispatch(createCategory(category)),
  handleUpdateCategory: category => dispatch(updateCategory(category)),
  handleDeleteCategory: category => dispatch(deleteCategory(category))
});



export default connect(mapStateToProps,mapDispatchToProps)(Categories);
