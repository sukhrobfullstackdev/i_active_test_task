import {GlobalStyles, MainDiv} from "./styles/GlobalStylesApp";

import Messages from "./components/Messages/Messages";

const App = () => {
    return (
            <MainDiv>
                <GlobalStyles/>
                <Messages/>
            </MainDiv>
    );
};

export default App;