import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}> 
            <div className="redes">
                <a href="https://github.com/AbigailSalazar">
                    <img src="/img/github-mark.png" alt="Github" />
                </a>
            </div>
            <strong>Desarrollado por Andrea Salazar</strong>
        </footer>
    )
}

export default Footer