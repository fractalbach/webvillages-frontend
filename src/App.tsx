import './App.css'
import { useState } from 'react';

let user_1 = {
  id: 123,
  name: "Chris",
  data: "a23bd3sdf",
};

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Welcome to WebVillages!</h1>
      <UserCard />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <NumberDisplayer count={count} />
    </div>
  );
}

function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      You've Pressed Me {count} Times!
    </button>
  );
}

function NumberDisplayer({count}) {
  return (
    <p>Hello, You have pressed a button {count} times on this page!</p>
  );
}

function UserCard() {
  let user = user_1;
  return (
    <div className='usercard'>
      <div className='usercard_name'>{user.name}</div>
      <div className='usercard_body'>{user.data}</div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About WebVillages</h1>
      <p>WebVillages is a website where you can customize your own 
      homepage with a house, join a village with others, and explore
      new villages!</p>
    </>
  );
}

