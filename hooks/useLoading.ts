import { useEffect, useState } from 'react';

const useLoading = () => {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
        try {
          // Artificially delay for 2 seconds to show the splash screen
          await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (e) {
          console.warn(e);
        } finally {
          setAppIsReady(true);
        }
      }

      prepare();
    }, []);

    return{
        appIsReady
    }
}

export default useLoading