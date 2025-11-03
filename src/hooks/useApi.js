import { useEffect, useState } from 'react';

export function useApi(url) {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    let mounted = true;
    setState({ loading: true, error: null, data: null });
    fetch(url)
      .then(r => r.json())
      .then(d => { if (mounted) setState({ loading: false, error: null, data: d }); })
      .catch(e => { if (mounted) setState({ loading: false, error: e.message || 'Error', data: null }); });
    return () => { mounted = false; };
  }, [url]);

  return state;
}
