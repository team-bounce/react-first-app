import { createRoot } from 'react-dom/client';
import { AppRoot } from './components/approot';
import './static/css/team-bounce.css';

const root = createRoot(document.getElementById('app-root') as HTMLDivElement);
root.render(<AppRoot />);
