import { BrowserRouter, Routes, Route, Router, createBrowserRouter } from 'react-router-dom';

import HomePage_86 from './pages/HomePage_86';
import HomeLayout_86  from './pages/HomeLayout_86';
import SupaGetBlog_86 from './pages/demo_86/SupaGetBlog_86';
import Mid1SupaBlog_86 from './pages/mid1_86/Mid1SupaBlog_86';
import Mid2NodeBlog_86 from './pages/mid1_86/Mid2NodeBlog_86';

const queryClient = new QueryClient({
  defaultoptions: {
    queries: {
    staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element:<HomeLayout_86/>,
    children:[
      {
        index: true,
        element:<HomeLayout_86/>,
      },
      {
        path: 'mid1Blog_86',
        element:<Mid1SupaBlog_86/>,
      },
      {
        path: 'mid2Blog_86',
        element:<Mid2NodeBlog_86/>,
      },
      {
        path: 'demoGetBlog_86',
        element:<SupaGetBlog_86/>,
      },
    ]
  }
]);

const App_86 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider Router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>

    /* <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_86 />} />
        <Route path='/mid2Blog_86' element={<Mid2NodeBlog_86 />} />
        <Route path='/mid1Blog_86' element={<Mid1SupaBlog_86 />} />
        <Route path='/demoGetBlog_86' element={<SupaGetBlog_86 />} />
      </Routes>
    </BrowserRouter> */
  );
};

export default App_86;
