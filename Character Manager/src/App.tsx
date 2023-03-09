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
	const routes = elementsToRoutes([
		<Route path='/' element={<Navigate to={"home"} replace={true} />} />,
		<Route path="sync" element={<SyncPage />} />,
		<Route path='home'>
			<Route path='/' element={<HomePage />} />
		</Route>,
		<Route path='characters'>
			<Route path='/' element={<CharactersPage />} />
		</Route>,
		<Route path='classes'>
			<Route path='/' element={<ClassesPage />} />
		</Route>,
		<Route path='items'>
			<Route path='/' element={<ItemsPage />} />
		</Route>,
		<Route path='*' element={<Navigate to="/home" />} />
	]


	) as QRoute[]
	return (
		<Router location={location} routes={routes}>
			<div className='flex bg-slate-100'>
				<Navigation />
				<main className="grow m-5">
					<Outlet />
				</main>
			</div>
		</Router>
	)
}

