import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user
    const { year, photos } = this.props.page
    return (
      <div>
        <div>Привет, { name } ты вкурсе что ты же { surname } и тебе { age }</div>
        <div>У тебя { photos.length } за { year } год</div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App)