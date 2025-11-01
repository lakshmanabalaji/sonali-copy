import Hero from './blocks/Hero';
import Chat from './blocks/Chat';
import About from './blocks/About';
import Applications from './blocks/Applications';
import Products from './blocks/Products';
import News from './blocks/News';
import Certs from './blocks/Certs';

const registry = {
  hero: Hero,
  chat: Chat,
  about: About,
  applications: Applications,
  products: Products,
  news: News,
  certs: Certs
};

export default function BlockRenderer({ blocks }) {
  return (
    <>
      <div className="home-container">
        {blocks.filter(b => b.type === 'hero').map((b, i) => {
          const C = registry[b.type];
          return <C key={`${b.type}-${i}`} data={b.data} />;
        })}
        {blocks.filter(b => b.type === 'chat').map((b, i) => {
          const C = registry[b.type];
          return <C key={`${b.type}-${i}`} data={b.data} />;
        })}
      </div>

      {blocks.filter(b => b.type !== 'hero' && b.type !== 'chat').map((b, i) => {
        const C = registry[b.type];
        if (!C) return null;
        return <C key={`${b.type}-${i}`} data={b.data} />;
      })}
    </>
  );
}
