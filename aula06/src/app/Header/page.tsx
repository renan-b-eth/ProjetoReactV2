import Link from "next/link";

const Header = () =>{
    return(
        <>
            <header>
                <h1>Cabeçalho</h1>
                <nav>
                    <ul>
                        <li>
                        <Link href="/">Home</Link>    
                            <Link href="/Produtos">produtos</Link>    
                            <Link href="/Sobre">Sobre</Link>   
                            <Link href="/Contato">Contato</Link>   
                        </li>    
                    </ul>    
                </nav>     
            </header>
        </>
    )

}

export default Header;