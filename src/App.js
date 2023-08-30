import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'


const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>

  

  return (
    <ChatEngine
              height = "100vh"
              projectID="99682e4b-68ff-4984-9746-16d78e23c66d"
              userName={localStorage.getItem('username')}
              userSecret={localStorage.getItem('password')}
              renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App