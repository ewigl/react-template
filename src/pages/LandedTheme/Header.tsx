export default function Header() {
    return (
        <header id="head-bar">
            <h1 id="logo"><a href="/">Licht</a></h1>
            <ul id='nav-ul'>
                <li onClick={() => {
                    location.href = '/'
                }}>Home
                </li>
                <li>Layouts</li>
                <li>Elements</li>
                <li>
                    <button>Sign Up</button>
                </li>
            </ul>
        </header>
    );
}
