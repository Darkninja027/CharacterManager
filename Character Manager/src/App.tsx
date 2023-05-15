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
import AddCharacter from './pages/Characters/PlayerCharacters/AddCharacter'
import { Kitchensink } from './pages/Kitchensink'
import { AddItem } from './pages/Items/AddItem'
import WorldsPage from './pages/World'
import AddWorld from './pages/World/AddWorld'
import Npc from './pages/Characters/Npc'
import PlayerCharacters from './pages/Characters/PlayerCharacters'
import Locations from './pages/World/Locations'

const routes = elementsToRoutes([
	<Route path='/' element={<Navigate to={"home"} replace={true} />} />,
	<Route path="sync" element={<SyncPage />} />,
	<Route path='home'>
		<Route path='/' element={<HomePage />} />
	</Route>,
	<Route path='characters'>
		<Route path='/' element={<CharactersPage />} />
		<Route path="npc" element={<Npc />}>
			<Route path='new' element={<AddCharacter />} />
		</Route>
		<Route path="playerCharacters">
			<Route path="/" element={<PlayerCharacters />} />
			<Route path="new" element={<AddCharacter />} />
		</Route>
	</Route>,
	<Route path='worlds'>
		<Route path='/' element={<WorldsPage />} />
		<Route path="new" element={<AddWorld />} />
		<Route path='locations'>
			<Route path="/" element={<Locations />} />
		</Route>
	</Route>,
	<Route path='classes'>
		<Route path='/' element={<ClassesPage />} />
	</Route>,
	<Route path='items'>
		<Route path='/' element={<ItemsPage />} />
		<Route path="new" element={<AddItem />} />
		<Route path=':id' element={<EditItem />} />
	</Route>,
	<Route path="languages">
		<Route path="/" element={<LanguagesPage />} />
	</Route>,
	<Route path="sink">
		<Route path="/" element={<Kitchensink />} />
	</Route>,
	<Route path='*' element={<Navigate to="home" />} />
]


) as QRoute[]
const location = new ReactLocation()


export default function App() {

	return (
		<Router location={location} routes={routes}>
			<div className='flex bg-dnd-brown-100'>
				<div className='flex fixed z-50'>
					<Navigation />
				</div>
				<main className="grow ml-[300px] min-h-screen">
					<Alert />
					<Outlet />
				</main>
			</div>
		</Router>
	)
}

