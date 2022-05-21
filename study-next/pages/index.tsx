import type { NextPage } from 'next'
import TodoContainer from '../components/TodoContainer';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TodoContainer />
    </div>
  )
}

export default Home
