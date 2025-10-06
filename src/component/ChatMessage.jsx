import UserProfileImage from '../assets/user.jpg'
import RobotProfileImage from '../assets/robot.jpg'

export function ChatMessage({message, sender}) {
  return (
    <div>
      {sender ==='robot' && <img src={RobotProfileImage} alt="" width={45} /> }
      {message}
      {sender ==='user' && <img src={UserProfileImage} width={45} alt="" />}
    </div>
  )
}