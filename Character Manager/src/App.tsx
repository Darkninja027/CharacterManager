import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import { ReactLocationDevtools } from 'react-location-devtools'
import { CharactersPage } from './pages/Characters'
import HomePage from './pages/Home'



export function App() {
	const location = new ReactLocation()
	return (
		<Router location={location} routes={[
			{ path: '/', element: <HomePage /> },
			{ path: 'characters', element: <CharactersPage /> },

		]}>
			<Outlet />
		</Router>
	)
}

