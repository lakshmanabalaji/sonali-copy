import './Home.css';
import BlockRenderer from '../components/BlockRenderer';
import { useApi } from '../hooks/useApi';

export default function Home() {
  const { loading, error, data } = useApi('http://localhost:5000/api/pages/home');

  if (loading) return <div style={{ padding: 24 }}>Loading…</div>;
  if (error) return <div style={{ padding: 24, color: 'red' }}>Error: {error}</div>;

  // data = { _id, pageId, blocks: [...] }
  return <BlockRenderer blocks={data.blocks || []} />;
}
