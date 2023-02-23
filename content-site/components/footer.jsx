import Link from 'next/link'

export default function Footer () {
  return (
    <p className="footer">
      Thanks for reading!{' '}
      <Link href="/about">About</Link> this site.
    </p>
  )
}
