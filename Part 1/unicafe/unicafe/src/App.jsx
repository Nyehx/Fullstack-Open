import { useState } from 'react'


const Header = ({text}) => {
  return (<h1>{text}</h1>)
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>)

}

const Statistics = ({stats, total}) => {
  
  if (total === 0) {
    return <p>No feedback given :/</p>
  }
  
  return ( 
    <table>
      <tbody>
        {stats.map((item) => <StatisticLine key={item.name} text={item.name} value={item.value}/>)} 
      </tbody>
    </table>
  ) // key is needed when rendering an array dynamically or something otherwise react error in console
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addValue = (value, setValue) => {
    return () => setValue(value + 1) 
  }

  const total = good + neutral + bad
  const average = total > 0 ? ((good - bad) / total).toFixed(1) : 0 // good*1 + neutral*0 + (-1)*bad 
  const positivePercent = total > 0 ? (good / total * 100).toFixed(1) : 0

  const stats = [ 
    {name: "good", value: good}, 
    {name: "neutral", value: neutral}, 
    {name: "bad", value: bad}, 
    {name: "total", value: total}, 
    {name: "average", value: average}, 
    {name: "positive", value: positivePercent + "%"}]

  return (
    <div>
      <Header text="Give feedback" />
      <Button text="good" onClick={addValue(good, setGood)}/>
      <Button text="neutral" onClick={addValue(neutral, setNeutral)}/>
      <Button text="bad" onClick={addValue(bad, setBad)}/>
      <Header text="Statistics" />
      {/* <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positivePercent + "%"} /> */}
      <Statistics stats={stats} total={total}/>
    </div>
  )
}

export default App