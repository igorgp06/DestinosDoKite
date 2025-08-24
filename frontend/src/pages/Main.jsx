import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export const Main = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />

            <main>
                <Outlet />
            </main>

            
        </div>
    )
}