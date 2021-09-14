// importando componentes
import NavBar from './NavBar';
import Categories from './Categories';
import FeaturedCard from './FeaturedCard';

function Home() {
    return (
        <div>
            <Categories />
            <FeaturedCard />
        </div>
    );
}

export default Home;
