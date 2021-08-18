import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import AddPost from './components/AddPost';
import PostView from './components/PostView';
import PostsProvider from './components/PostsProvider';

function App() {
  return (
    <PostsProvider>
      <Router>
        <div className="page">
          <Switch>
            <Route path="/posts/new" component={AddPost} />
            <Route path="/posts/:id" component={PostView} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </Router>
      </PostsProvider>
  );
}

export default App;
