```javascript
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

const MyComponent = () => {
  const router = useRouter();
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const handleRouteChange = () => {
      setQuery(router.query);
    };

    if (router.isReady) {
      handleRouteChange();
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.isReady, router]);

  return (
    <div>
      {query ? <p>Query parameters: {JSON.stringify(query)}</p> : <p>Loading...</p>}
    </div>
  );
};

export default MyComponent;```