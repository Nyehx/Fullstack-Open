const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
    </div>
  )
}

const App = () => {

  const name = "Peter"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George' age={30+37}/>
            <Hello name={name} age = {age}/>
                  <Hello />

    </div>
  )
}

export default App