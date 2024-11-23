import { buttonVariants } from '@repo/design-system/components/ui/button';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div>
      <h1>Oops, Could not find requested resource</h1>
      <Link href="/" className={buttonVariants()}>
        Return Home
      </Link>
    </div>
  );
}
