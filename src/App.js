import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <div className="blur" style={{ top: '-10%', right: 0 }}></div>
            <div className="blur" style={{ top: '40%', left: '-20rem' }}></div>
            <div className="blur" style={{ right: '20%', bottom: '-10%' }}></div>
            <Home />
        </div>
    );
}

export default App;
