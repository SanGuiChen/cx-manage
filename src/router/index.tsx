import { lazy, Suspense } from 'react'
import App from "App";
import Loading from 'components/Loading/Loading';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

interface IRoute {
  path: string,
  component: React.FC,
  children?: IRoute[],
}

const routerArr: IRoute[] = [
  {
    path: '/', component: App, children: [
      { path: '/list', component: lazy(() => import('pages/List')) },
      { path: '/edit', component: lazy(() => import('pages/Edit')) },
      { path: '/means', component: lazy(() => import('pages/Means')) },
  ] },
  { path: '/login', component: lazy(() => import('pages/Login/Login')) },
  { path: '/register',component: lazy(() => import('pages/Register/Register')) },
]

const MyRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading></Loading>}>
      <Routes>
        {
          routerArr.map((route, index) => {
            return (
              route.children ?
              <Route key={index} path={route.path} element={<route.component />}>
                {
                  route.children.map((e, i) => <Route key={i} path={e.path} element={<e.component />}></Route>)    
                }   
              </Route>
              :
              <Route  key={index} path={route.path} element={<route.component />}></Route>
            )
          })
        }
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default MyRouter