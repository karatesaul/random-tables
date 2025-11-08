import SideNavItem from './side-nav-item'

const SideNav = ({ isSideNavOpen }: { isSideNavOpen: boolean }) => {
  return (
    <nav className={'bg-background-nav flex-none overflow-hidden ' + (isSideNavOpen ? 'w-0' : '')}>
      <ul>
        <SideNavItem href="/tables/add" label="Add Table"></SideNavItem>
      </ul>
    </nav>
  )
}

export default SideNav
