import { connect } from 'react-redux'
import Home from '../components/Home'
import { getCharacters } from "../actions/marvel";

const mapStateToProps = state => {
  console.log(state.marvel)
  return {
    
    characters: state.marvel.characters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: (name) => {
      dispatch(getCharacters(name))
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer