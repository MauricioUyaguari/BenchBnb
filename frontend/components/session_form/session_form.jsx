import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  navLink() {
    if(this.props.formType === 'login'){
      return <Link to="/signup"> sign up</Link>;
    }else{
      return  <Link to="/login"> sign up</Link>;
    }
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
        </li>) )}
      </ul>
    );
  }

  update(field) {
    return e => this.setState(
    {[field]: e.currentTarget.value}
    );
  }

  componentWillReceiveProps(nextProps) {
    if( nextProps.loggedIn){
      this.props.history.push('/');
    }
  }


  render () {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome My Hoes
          <br/>
          please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div>
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                >
              </input>
            </label>
            <br />
            <label> Password
              <input type="text"
                value={this.state.password}
                onChange={this.update('password')}
                >
              </input>
            </label>
            <br/>
            <input type="submit" value="Submit"></input>
          </div>

        </form>
      </div>
    );
  }


}


export default withRouter(SessionForm);
