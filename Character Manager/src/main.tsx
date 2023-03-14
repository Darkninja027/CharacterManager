import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'
import { AlertProvider, useAlert } from './common/util/Alerts'

function Main() {

	const alert = useAlert();
	const queryClient = useMemo(() => {

		return new QueryClient({
			defaultOptions: {
				mutations: {
					onSettled: () => {
						queryClient.invalidateQueries({
							predicate: query => query.queryKey[0] !== 'user'
						});

					},
					onError: (err: any) => {
						alert.show('error', `Mutation Error: ${err[0].message}`, Infinity)
					}
				},
				queries: {
					staleTime: 1000 * 60,
					refetchInterval: 1000 * 60,
					onError: (err: any) => {
						alert.show('error', `Query Error: ${err[0].message}`, Infinity)
					},
				},

			}
		})
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<AlertProvider>
			<Main />
		</AlertProvider>
	</React.StrictMode>,
)
