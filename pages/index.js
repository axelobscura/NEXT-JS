import Link from 'next/link';

const Index = () => (
  <div>
    <h1>SSR Magician</h1>
    <Link href="/about">
      <a>ABOUT</a>
    </Link>
    <Link href="/robots">
      <button>Robots</button>
    </Link>
    {/*<a href="/about">ABOUT</a>*/}
  </div>
)

export default Index;