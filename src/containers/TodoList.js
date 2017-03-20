import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStatetoProps = state => ({
  todos: state.todos,
})

export default connect(mapStatetoProps)(TodoList)
