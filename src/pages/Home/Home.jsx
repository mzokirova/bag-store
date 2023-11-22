import Category from '../../components/Category/Category';
import CreativeBag from '../../components/CreativeBag/CreativeBag';
import Join from '../../components/Join/Join';
import Partners from '../../components/Partners/Partners';
import Products from '../../components/Products/Products';
import Showcase from '../../components/Showcase/Showcase'
function Home() {
    return ( 
        <div>
            
            <Showcase />
            <Category />
            <CreativeBag />
            <Products />
            <Join />
            <Partners/>
        </div>
     );
}

export default Home;