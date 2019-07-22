import Link from 'next/link';

const about = () => (
  <div>
    <h1 style={{fontSize: '20px', color: 'purple'}}>About page</h1>
    <Link href="/">
      <button>Back</button>
    </Link>
  </div>
)

export default about;