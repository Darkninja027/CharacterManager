import { Outlet, ReactLocation, Router, Route as QRoute, Navigate } from '@tanstack/react-location'
import { elementsToRoutes, Route } from 'react-location-elements-to-routes'
import Alert from './common/util/Alerts'
import { CharactersPage } from './pages/Characters'
import ClassesPage from './pages/Classes'
import HomePage from './pages/Home'
import ItemsPage from './pages/Items'
import EditItem from './pages/Items/EditItem'
import LanguagesPage from './pages/Languages'
import SyncPage from './pages/Sync'
import Navigation from './common/util/Navigation'
import AddCharacter from './pages/Characters/AddCharacter'
import { Kitchensink } from './pages/Kitchensink'



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
			<Route path="new" element={<AddCharacter />} />
		</Route>,
		<Route path='classes'>
			<Route path='/' element={<ClassesPage />} />
		</Route>,
		<Route path='items'>
			<Route path='/' element={<ItemsPage />} />
			<Route path=':id' element={<EditItem />} />
		</Route>,
		<Route path="languages">
			<Route path="/" element={<LanguagesPage />} />
		</Route>,
		<Route path="sink">
			<Route path="/" element={<Kitchensink />} />
		</Route>,
		<Route path='*' element={<Navigate to="/home" />} />
	]


	) as QRoute[]
	return (
		<Router location={location} routes={routes}>
			<div className='flex bg-dnd-brown-100'>
				<Navigation />
				<main className="grow m-5">
					<Alert />
					<Outlet />
				</main>
			</div>
		</Router>
	)
}

