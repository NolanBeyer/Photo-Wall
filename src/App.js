import './App.css'
import Lists from './components/Lists'
import Title from './components/Title'

const App = () => {
  return (
    <>
      <Title header={'Todos'} />
      <Lists tasks={['Mow the yard', 'Clean the dishes', 'Wash the laundry']} />
      <Lists tasks={['Cook dinner', 'Wash the car']} />
      <Lists tasks={['Finish Homework', 'Take shower']} />
    </>
  )
}

export default App
