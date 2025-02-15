import { headers } from 'next/headers';
import Link from 'next/link';

export const runtime = 'edge';

export default function Home() {
  const headersList = headers();
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Full CSP{' '}
          <small>
            (<code>content-security-policy</code>)
          </small>
        </h2>

        <dl>
          <dt>
            <code className="font-bold">x-nonce</code> header:
          </dt>
          <dd className="mb-8">
            <code>{headersList.get('x-nonce') || 'Not found'}</code>
          </dd>
          <dt>
            <code className="font-bold">content-security-policy</code> header:
          </dt>
          <dd className="mb-8">
            <pre className="whitespace-pre-wrap">
              <code>{headersList.get('content-security-policy')}</code>
            </pre>
          </dd>
        </dl>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="mt-4 text-center text-gray-500">
          <Link href="/csp" className="text-blue-500 underline">
            Full CSP
          </Link>{' '}
          |{' '}
          <Link href="/csp-report-only" className="text-blue-500 underline">
            Report Only
          </Link>
        </p>
      </div>
    </div>
  );
}
