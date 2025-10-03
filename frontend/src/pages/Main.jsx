import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { ScrollTop } from '../lib/ScrollTop';

export const Main = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />
            <ScrollTop />

            <main>
                <Outlet />
            </main>
            
        </div>
    )
}