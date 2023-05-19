function Footer() {
    return(
        <div className="footer">
            {<span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />}{'Ramon Saura'}
        </div>
    )
}

export default Footer;