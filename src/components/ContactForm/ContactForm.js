import { Component } from 'react';
/*const ContactForm = () => {};*/
import { v4 as uuid } from 'uuid';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, number });
    this.resetForm();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !number) {
      alert(`Some field is empty`);
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState(this.state);

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone"
          value={number}
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
