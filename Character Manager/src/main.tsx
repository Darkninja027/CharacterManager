import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'

function Main() {




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
            console.log(err[0].message)
          }
        },
        queries: {
          staleTime: 1000 * 60,
          refetchInterval: 1000 * 60,
          onError: (err: any) => {
            console.log(err[0].message)
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
    <Main />
  </React.StrictMode>,
)
