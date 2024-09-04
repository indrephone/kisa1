import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../UI/organisms/Footer';
import Header from '../UI/organisms/Header';

const StyledMain = styled.main`
    min-height: calc(100vh - 80px - 100px); /* Account for header and footer */
    padding: 20px; /* Add some padding for visual spacing */
`;

const CreateButton = styled.button`
    position: fixed;
    top: 100px; /* Place below the header (80px height + some extra space) */
    left: 20px; /* Left corner of the screen */
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    z-index: 2000; /* Ensure it's above the header and other elements */

    &:hover {
        background-color: #0056b3;
    }
`;

const MainOutlet = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Check if the current route is Shop, AddNewProduct, SpecProduct, or EditProduct
    const showCreateButton = 
        location.pathname.startsWith('/shop') && // Match anything starting with '/shop'
        !location.pathname.includes('/shop/create'); // Exclude '/shop/create' itself

    const handleCreateClick = () => {
        navigate('/shop/create'); // Navigate to AddNewProduct page
    };

    return ( 
        <>
            <Header />
            <StyledMain>
                <Outlet />
                {showCreateButton && (
                    <CreateButton onClick={handleCreateClick}>
                        Create New
                    </CreateButton>
                )}
            </StyledMain>
            <Footer />
        </>
    );
}

export default MainOutlet;
