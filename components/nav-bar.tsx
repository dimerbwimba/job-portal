import { MenuItems } from "@/constants/nav-items"

export const NavBar = () => {
    return (
        <nav className=" flex p-4  justify-between items-center px-30">
            <section>
                Logo
            </section>
            <section className=" ">
                <div>
                    <ul className=" flex space-x-2 ">
                        {
                            MenuItems.map((item, index) => (
                                <li key={index} className=" transition ease-in-out duration-500  hover:text-gray-800 py-1 px-2 rounded-lg text-center font-semibold cursor-pointer">
                                    {item.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </nav>

    )
}