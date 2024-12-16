```javascript
import {useRouter} from 'next/router';

const MyComponent = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>Hello</div>
  );
};

export default MyComponent;```