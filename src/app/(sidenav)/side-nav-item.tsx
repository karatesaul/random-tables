import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideNavItem = ({ href, label }: { href: string, label: string }) => {
  const pathname = usePathname()

  return (
    <li>
      <Link
        className={'inline-block w-full h-full p-4 hover:bg-background-hover' + (pathname === href ? ' bg-secondary hover:bg-secondary' : '')}
        href={href}>
        {label}
      </Link>
    </li>
  )
}

export default SideNavItem
