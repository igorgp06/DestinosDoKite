import { Header } from '../components/Header';
import { HomePage } from './public/HomePage';

export const Main = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Header />

            <main>
                <HomePage />
            </main>
        </div>
    )
}