import { Outlet } from 'react-router-dom';
import { Header } from "../../components/Header";
import { 
    DefaultLayoutContainer, 
    WrapperContainer 
} from "./default-layout.styles";

export function DefaultLayout() {
    return (
        <WrapperContainer>
            <DefaultLayoutContainer>
                <Header />
                <Outlet />
            </DefaultLayoutContainer>
        </WrapperContainer>
    )
}