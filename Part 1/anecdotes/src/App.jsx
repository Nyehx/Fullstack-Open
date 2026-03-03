import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Anecdote = ({text, vote}) => {
  return (
  <div>
    <p>{text}</p>
    <p>has {vote} votes</p>
  </div>
  )
}

const Header = ({text}) => <h2>{text}</h2>

const getRandomInt = (max) => Math.floor(Math.random()*max)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy) 
  }
  
  const highestVoteCount = Math.max(...votes)
  const winnerIndex = votes.indexOf(highestVoteCount)  
  
  return (
    <div>
      <Header text="Anecdote of the day"/>
      <Anecdote text={anecdotes[selected]} vote={votes[selected]}/>
      <Button text="Vote for this anecdote" onClick={handleVote}/>
      <Button onClick={() => setSelected(getRandomInt(anecdotes.length))} text="Get a new anecdote"/>
      <Header text="Anecdote with most votes"/>
      <Anecdote text={anecdotes[winnerIndex]} vote={votes[winnerIndex]}/>
    </div>
  )
}

export default App