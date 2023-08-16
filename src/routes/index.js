import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import  Profile  from '~/pages/Profile';
import  Upload  from '~/pages/Upload';
import  Search  from '~/pages/Search';

// không cần đăng nhập vẫn xem đc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

//đăng nhập mới xem đc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
