import React, { lazy } from "react";
import { withRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";
import * as b from "basiclightbox";
import CalculatorPage from "../../pages/pageCalculator/pageCalculator";
import HomePage from "../../pages/pageHome";
import Modal from "../Modal/Modal";
import List from "../List/List";
import { fetchPicturesWithQuery, fetchGenresId } from "../../api";
import "./App.css";

// const App = () => new Calculator({title: "calcuulator"}).render();

// axios.defaults.baseURL = "https://api.themoviedb.org/3";

const split = s => s.split('');
const remSpace = arr => arr.filter(e => e !== " ");
const backToStr = arr => arr.join("");
const compose = (...fns) => str => fns.reduceRight((acc, fn) => fn(acc), str)
const withCompose = compose(
  backToStr,
  remSpace,
  split
)

class App extends React.Component {
  state = {
    isModal: false,
    genres: [],
  };

  componentDidMount() {
    fetchGenresId().then((res) => this.setState({ genres: res.data.genres }));
  }

  getIsModal = (isModal) => {
    this.setState({ isModal });
  };

  render() {
    const { genres } = this.state;
    console.log('withCompose :>> ', withCompose("Mon d ay Mon Mo"));

    return (
      <>
        <List>
          <li>
            <NavLink
              to={{
                pathname: "/",
                state: {
                  genres,
                },
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: "/calculator",
                state: {
                  genres: genres ? genres : null,
                },
              }}
            >
              Calculator
            </NavLink>
          </li>
        </List>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/calculator"
            component={CalculatorPage}
          />
          <Route exact path="/next" component={HomePage} />
          {/* <Calculator title="Calculator" getIsModal={this.getIsModal} /> */}
          {/* {this.state.isModal && <Modal getIsModal={this.getIsModal}/>} */}
        </Switch>
      </>
    );
  }
}

// export default withRouter(App);
export default App;

// <Header genres={genres}/>
