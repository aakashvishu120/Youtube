import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store"
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import SearchPage from "./components/SearchPage";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <><Head/><Body/></>,
    children : [
      {
        path : "/",
        element : <MainContainer/>
      },
      {
        path : "watch",
        element : <WatchPage/>
      },
      {
        path : "demo",
        element : <><Demo/><Demo2/></>
      },
      {
        path : "results",
        element : <SearchPage/>
      },
    ],
    errorElement : <Error/> 
  }
])

function App() {
  return (
    
    <Provider store={store}>

    <div className="App">
        {/* <Head/> */}
        <RouterProvider router={appRouter}></RouterProvider>
        {/* <Body/> */}

        {
          /**
           * Head
           * Body
           *  Sidebar
           *    MenuItems
           *  MainContainer
           *    ButtonsList
           *    VideoContainer
           *      VideoCard
          */
        }




    </div>
        </Provider>
  );
}

export default App;
