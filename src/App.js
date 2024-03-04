import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer'
import Blog from './Components/Blog'
import AddBlog from './Components/AddBlog'
import BlogsDetail from './Components/BlogsDetail'
import './index.css'
import EditBlog from './Components/EditBlog';
function App() {
  return (
    <Router>
      <div className='bg-gray-400 block'>
        <NavigationBar />
        <div>
          <Switch>
            <Route exact path='/'>
                <Blog/>
            </Route>
            <Route exact path='/add'>
                <AddBlog/>
            </Route>
            <Route exact path='/get/:id'>
                <BlogsDetail/>
            </Route>
            <Route exact path='/update/:id'>
                <EditBlog/>
            </Route>


          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );


}

export default App;













