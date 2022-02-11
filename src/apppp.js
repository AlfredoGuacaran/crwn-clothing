import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push('topics')}>Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = (props) => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>13</Link>
      <Link to={`${props.match.url}/17`}>17</Link>
      <Link to={`${props.match.url}/21`}>21</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
    </div>
  );
};

function Apppp() {
  return (
    <div>
      <Route path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicsList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default Apppp;
