import UserProfileImage from '../assets/user.jpg'

export function ChatMessage({message, sender}) {
  return (
    <div>
      {message}
      <img src={UserProfileImage} width={45} alt="" />
    </div>
  )
}