import UserProfileImage from '../assets/user.jpg'
import RobotProfileImage from '../assets/robot.jpg'


export const chatMessages = [{
      message: 'Hello chatBot',
      sender: 'user',
      id: crypto.randomUUID()
    }, {
      message: 'hello how can i help you?',
      sender: 'robot',
      id: crypto.randomUUID()
    }, {
      message: 'Hello chatBot',
      sender: 'user',
      id: crypto.randomUUID()
    }, {
      message: 'hello how can i help you?',
      sender: 'robot',
      id: crypto.randomUUID()
    }];
    
export function ChatMessage({message, sender}) {
  return (
    <div>
      {sender ==='robot' && <img src={RobotProfileImage} alt="" width={45} /> }
      {message}
      {sender ==='user' && <img src={UserProfileImage} width={45} alt="" />}
    </div>
  )
} 