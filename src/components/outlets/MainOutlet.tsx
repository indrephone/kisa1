import { Outlet } from 'react-router-dom';
import Footer from '../UI/organisms/Footer';

const MainOutlet = () => {
    return ( 
        <>
         <header></header>
         <main>
              <Outlet />
         </main>
         <Footer />
       </>
     );
}
 
export default MainOutlet;