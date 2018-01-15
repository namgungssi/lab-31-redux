import React from 'react';
import CategoryForm from './Category-form';



class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="category-item">
      <header id="categoryHeader">
      <CategoryForm handler={this.props.handleUpdate} category={this.props.category}/>
      <a id='deleteButton' href="#" onClick{()=>this.props.handleDelete(this.props.category.id)}>X</a>
      </header>
      </div>
    )
  }
}



export default CategoryItem;
