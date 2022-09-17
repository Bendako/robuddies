
const Scroll = ({ children }) => {
    return (
        <div style={{
            overflowY: 'scroll',
            border: '5px solid black',
            height: '400px'
        }}>
            { children }
        </div>
    )
};

export default Scroll;