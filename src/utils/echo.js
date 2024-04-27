/* eslint-disable no-unused-vars */
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
const echo = (token) => {
    const options = {
      authEndpoint : 'http://localhost/broadcasting/auth',
      auth: {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      },
      broadcaster: 'pusher',
      key: 'app-key',
      wsHost: 'localhost',
      wsPort: '6001',
      wssPort: '6001',
      forceTLS: false,
      encrypted: true,
      disableStats: true,
      enabledTransports: ['ws', 'wss'],
      cluster: 'mt1'
  }

  
  try{
    const echo = new Echo(options)
    return echo
  } catch(error) {
    console.log('Error', error)
    throw error
  }
}

export default echo