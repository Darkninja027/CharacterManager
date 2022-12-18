import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import { ReactLocationDevtools } from 'react-location-devtools'
import { HomePage } from './pages/Home'

type LocationGenerics = {

}

export function App() {
	const location = new ReactLocation<LocationGenerics>()
	return (
		<Router location={location} routes={[
			{ path: '/', element: <HomePage /> }
		]}>
			<Outlet />
			<ReactLocationDevtools initialIsOpen={false} />
		</Router>
	)
}

