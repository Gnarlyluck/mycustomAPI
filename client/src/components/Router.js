import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Landing from '../pages/Landing'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import { __CheckSession } from '../services/UserServices'
import ProtectedRoute from './ProtectedRoute'


class Router extends Component {
    constructor () {
        super()
        this.state = {
            authenticated: false,
            currentUser: null,
            pageLoading: true
        }
    }
    verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const session = await __CheckSession()
                this.setState(
                    {
                        currentUser: session,
                        authenticated: true
                    }, () => this.props.history.push('/profile')
                )
            }catch (error){
                this.setState({ currentUser: null, authenticated: false })
                localStorage.clear()
            }
        }
    }

    toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user }, () => done())
    }

    componentDidMount() {
        this.verifyTokenValid()
        this.setState({ pageLoading: false})
    }

    verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const session = await __CheckSession()
                console.log('session', session)
                this.setState(
                    { currentUser: session.user, authenticated: true},
                    () => this.props.history.push('/profile')
                )
            }catch (error) {
                this.setState({ currentUser: null, authenticated: false })
                localStorage.clear()
            }
        } 
    }

    toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user }, () => done())
      }


      render() {
          return (
              <main>
                  {this.state.pageLoading ? (
                    <h3>Loading...</h3>
                  ) : (
                    <Switch>
                        {/* <Route  exact path="/" 
                            component={(props) => (
                                <Landing>
                                    <Home {...props}/>
                                </Landing>
                            )}
                            />
                        <Route path="/login" component={(props) => (
                            <Landing>
                                <SignIn toggleAuthenticated={this.toggleAuthenticated}
                                {...props}/>
                            </Landing>
                        )}
                        /> */}
                    <Route exact path='/' component={Landing}/>
                    <Route path='/SignIn' component={SignIn}/>
                    <Route path='/SignUp' component={SignUp}/>
                    <Route path='/Home' component={Home}/>
                   
                    </Switch>
                  )}
              </main>
          )
      }
}

export default withRouter(Router)