import "tailwindcss"

function NavBar() {
    return (
        <>
            <nav className="fixed flex bg-siteGreen w-full h-15 content-center">
                <h1 className="text-4xl font-dotoBold text-siteBg ml-4 m-2 mt-2">
                NL.Desktop
                </h1>
            </nav>
        </>
    )
}

export default NavBar