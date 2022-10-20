import './App.css'

let user_1 = {
  id: 123,
  name: "Chris",
  data: "a23bd3sdf",
}

export default function App() {
  return (
    <div>
      <h1>Welcome to WebVillages!</h1>
      <UserCard />
      <MyButton />
    </div>
  )
}

function UserCard() {
  let user = user_1;
  return (
    <div className='usercard'>
      <div className='usercard_name'>{user.name}</div>
      <div className='usercard_body'>{user.data}</div>
    </div>
  )
}


function MyButton() {
  function handleClick() {
    alert('hi');
  }
  return (
    <button onClick={handleClick}>I'm a button</button>
  );
}