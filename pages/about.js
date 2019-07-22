import Link from 'next/link';
import Image from '../components/image';

const about = () => (
  <div>
    <h1 style={{fontSize: '20px', color: 'purple'}}>About page</h1>
    <Image />
    <Link href="/">
      <button>Back</button>
    </Link>
  </div>
)

export default about;