export default function HomePage() {

    function login() {
        console.log('login');
    }

    return (
        <div className="flex flex-column">
            <div>this is home page</div>
            <button onClick={login}>login</button>
        </div>
    )
}