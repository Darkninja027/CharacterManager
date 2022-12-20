import { Outlet, ReactLocation, Router, Route as QRoute, Navigate } from '@tanstack/react-location'
import { elementsToRoutes, Route } from 'react-location-elements-to-routes'
import { CharactersPage } from './pages/Characters'
import ClassesPage from './pages/Classes'
import HomePage from './pages/Home'
import ItemsPage from './pages/Items'
import SyncPage from './pages/Sync'
import Navigation from './util/Navigation'



export default function App() {
	const location = new ReactLocation()
	const layout = { element: <Navigation /> }
	const routes = elementsToRoutes([
		<Route path='/' element={<Navigate to={"home"} replace={true} />} />,
		<Route path="sync" element={<SyncPage />} />,
		<Route path='home' {...layout}>
			<Route path='/' element={<HomePage />} />
		</Route>,
		<Route path='characters'  {...layout}>
			<Route path='/' element={<CharactersPage />} />
		</Route>,
		<Route path='classes'  {...layout}>
			<Route path='/' element={<ClassesPage />} />
		</Route>,
		<Route path='items'  {...layout}>
			<Route path='/' element={<ItemsPage />} />
		</Route>,
		<Route path='*' element={<Navigate to="/home" />} />
	]


	) as QRoute[]
	return (
		<Router location={location} routes={routes}>
			<Outlet />
		</Router>
	)
}

