import './App.css'
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Welcome to WebVillages!</h1>
      <VillageForum />
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

interface ThreadData {
  id: string,
  title: string,
  start_time: number,
  latest_time: number,
  user: string,
  comment_count: number,
}

interface CommentData {
  user: string,
  time: number,
  message: string,
}
        
const EXAMPLE_FORUM_DATA = {
  threads: [
    {id: "007", title: "Cool Post!", start_time: 1666796672, latest_time: 1666969472, user: "user5", comment_count: 2},
    {id: "111", title: "Welcome", start_time: 1666793072, latest_time: 1666879472, user: "iamyou", comment_count: 1},
    {id: "123", title: "Post Intros", start_time: 1664114400, latest_time: 1664323200, user: "lolerz", comment_count: 3},
  ],
  comments_by_thread: {
    "007": [
      {user: "user5", time: 1666796672, message: "Just making a cool thread, post anything!"},
      {user: "somebody1", time: 1666969472, message: "I am making a response. Hi."},
    ],
    "111": [
      {user: "iamyou", time: 1666793072, message: "Welcome to the village forums!"},
    ],
    "123": [
      {user: "iamyou", time: 1666796672, message: "I am you. If you know you, then you know me."},
      {user: "user5", time: 1666796672, message: "I am user5, and i have 5 fingers on each hand"},
      {user: "lolerz", time: 1666796672, message: "Please post intros! I am lolerz, I lol in free time."},
    ],
  }
}

function VillageForum() {
  const data = EXAMPLE_FORUM_DATA;
  const threads = [];
  data.threads.forEach((x) => {
    threads.push(
      <Thread 
        thread_data={x}
        key={x.id}
      />
    );
  });
  return (
    <section>
    <h1>Village Forum</h1>
      {threads}
    </section>
  );
}

function Thread({thread_data}) {
  return (
    <div className="thread">
      <div className="thread_title">{thread_data.title}</div>
      <div className='thread_time'>{thread_data.start_time}</div>
      <div className='thread_counter'>{thread_data.comment_count}</div>
    </div>
  );
}