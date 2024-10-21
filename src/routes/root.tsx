import { Link } from 'react-router-dom'
import useAuthStore from '@/stores/authStore'
export default function Root() {
  const { logout, isLoggedIn } = useAuthStore()

  const handleLogOut = () => {
    console.log('logged out')
    logout()
  }
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        {isLoggedIn && <div>Я залогген</div>}
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <Link to="/onboarding/who-needs-help">Who needs help</Link>
            <Link to="/onboarding/personal-data-intro">
              /personal-data-intro
            </Link>
            <Link to="/onboarding/form">/form</Link>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/login`}>Your login</a>
            </li>
            <li>
              <a href={`/registration`}>Your registration</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
      <button onClick={handleLogOut}>Logout</button>
    </>
  )
}
