import routesConfig from '~/config/routes'

import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import  Profile  from '~/pages/Profile';
import  Upload  from '~/pages/Upload';
import  Search  from '~/pages/Search';

// không cần đăng nhập vẫn xem đc
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

//đăng nhập mới xem đc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
