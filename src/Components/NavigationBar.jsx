import { Link } from 'react-router-dom'  

export default function NavigationBar() {
    return (
      <div id='navbar' className=" bg-gray-500 text-white text-xl font-bold flex flex-wrap justify-between p-4">
               <div className="logo">BB BLOG</div>
                <div >
                    <ul className="flex justify-evenly gap-5">
                      <Link to="/">  <li className="nav-button">
                            Home
                        </li></Link>
                        <Link to="/add"> <li className="nav-button">
                            Add Blog
                        </li></Link>
                        <a href="#contact"> <li className="nav-button">
                            Contact
                        </li></a>
                    </ul>
                </div>
         
      </div>
      
    );
  
  
  }