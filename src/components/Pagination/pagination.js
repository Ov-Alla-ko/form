import React, { Component } from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
class Pagination extends Component {


  state = {
    users: null,
    total: null,
    per_page: null,
    current_page: 1
  }


  componentDidMount() {
    this.makeHttpRequestWithPage(1);

  }


  makeHttpRequestWithPage = async pageNumber => {
    const response = await fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    this.setState({
      users: data.data,
      total: data.total,
      per_page: data.per_page,
      current_page: data.page,

    });

    console.log(data.current_page)
  }


  render() {

    let users, renderPageNumbers;



    if (this.state.users !== null) {
      users = this.state.users.map(user => (

        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.text}</td>

        </tr>


      ));

    }

    const pageNumbers = [];
    if (this.state.total !== null) {
      for (let i = 1; i <= Math.ceil(this.state.total / this.state.per_page); i++) {
        pageNumbers.push(i);

      }


      renderPageNumbers = pageNumbers.map(number => {
        let classes = this.state.current_page === number ? styles.active : '';

        return (

          <span key={number} className={classes} onClick={() => this.makeHttpRequestWithPage(number)}>{number}</span>
        );
      });




    }


    return (

      <Router>
        <div className={styles.app}>

          <Switch>
            <Route path="/navigation">
              <table className={styles.table}>
                <tbody>
                  {users}
                </tbody>
              </table></Route>
          </Switch>

          <div className={styles.pagination}>


            <Link to="/navigation"> <span onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</span>
              {renderPageNumbers}
              <span onClick={() => this.makeHttpRequestWithPage(1)}>&raquo;</span> </Link>
          </div>

        </div> </Router>
    );
  }

}

export default Pagination;