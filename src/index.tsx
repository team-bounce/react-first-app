import { createRoot } from 'react-dom/client';
import { AppRoot } from './components/approot';
import './css/index.css';

const root = createRoot(document.getElementById('app-root') as HTMLDivElement);
root.render(<AppRoot muibuttons='hidden' rbsnavbar='hidden' prdatatable='hidden' />);
