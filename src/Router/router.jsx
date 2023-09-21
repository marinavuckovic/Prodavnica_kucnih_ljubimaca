import { AppLayout } from '../layout';
import { ShopPage } from '../pages/shop';
import { WhoAreWePage } from '../pages/whoAreWe';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { UsersPage } from '../pages/users';
import { PetsPage } from '../pages/pets';
import { DogsPage } from '../categories/dogs';
import { CatsPage } from '../categories/cats';
import { FishPage } from '../categories/fish';
import { BirdsPage } from '../categories/birds';
import { RabbitPage } from '../categories/rabbit';
import { PostNewAdPage } from '../pages/postNewAd';

import { ProtectedRoute, PublicRoute } from './Routes';

export const appRoutes = [
  {
    path: '',
    element: <PublicRoute element={<AppLayout />} />,
    children: [
      {
        index: true,
        element: <HomePage />,
        exact: true,
      },
  
      {
        path: 'shop',
        children: [

          {path: '', element:<ShopPage/>},
          {path: 'dogs', element: <DogsPage/>},
          {path: 'cats', element: <CatsPage/>, name:"cats"},
          {path: 'birds', element: <BirdsPage/>},
          {path: 'fish', element: <FishPage/>},
          {path: 'rabbit', element: <RabbitPage/>},

        ]
      },

      { path: 'whoAreWe', element: <WhoAreWePage /> },
       { path: 'postNewAd', element:  <ProtectedRoute element={<PostNewAdPage />}/> },
      { path: '*', element: <h1>404 Not found</h1> },
      { path: 'users', element: <UsersPage /> },
      { path: 'pets', element: <PetsPage /> },
    
    ],
  },
  { path: 'login', element: <PublicRoute element={<LoginPage />} /> },
  { path: 'register', element: <PublicRoute element={<RegisterPage />} /> },
  { path: '*', element: <h1>404 Not found</h1> },
 
];