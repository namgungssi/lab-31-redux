import React from 'react';



class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || {name:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.handler, this.state);
    this.props.handler(Object.assign({}, this.state));
    this.setState({name: '', budget: ''})
  }


  handleChange(e) {
    this.setState({[e.target.name]:e.target.value});
  }


  render() {
    return (
      <form className="categoryForm" onSubmit={this.handleSubmit}>
      <input
      class='catInputs'
      type="text"
      name="name"
      value={this.state.name}
      placeholder="column name"
      onChange={this.handleChange}
      onBlur={this.handleSubmit}
      />
      </form>
    )
  }
}



export default CategoryForm;
