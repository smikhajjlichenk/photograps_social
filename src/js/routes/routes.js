import { AuthGuard } from './../guard/auth.guard';
import { AdminGuard } from './../guard/admin.guard';
import { HomeComponent } from '../components/home/home';
import { NotFoundComponent } from '../components/404/notfound';
import { LoginComponent } from '../components/login/login';
import { SignupComponent } from '../components/signup/signup';
import { UserComponent } from '../components/user/user';
import { NewsComponent } from '../components/news/news';
import { WinnersComponent } from '../components/winners/winners';
import { AdminProfile } from '../components/adminProfile/admin.profile';

const authGuard = new AuthGuard();
const adminGuard = new AdminGuard();

export const routes = {
		'/': {
			component: new HomeComponent(),
		},
		'/login': {
			component: new LoginComponent(),
		},
		'/users/:id': {
			component: new UserComponent(),
			guards: [authGuard],
		},
		'/news': {
			component: new NewsComponent(),
			guards: [authGuard],
		},
		'/signup': {
			component: new SignupComponent(),
		},
		'/winners': { 
			component: new WinnersComponent(), 
		},
		'/admin-panel': {
			component: new AdminProfile(),
			guards: [authGuard, adminGuard],
		},			
		'404': {
			component: new NotFoundComponent(),
		},
};