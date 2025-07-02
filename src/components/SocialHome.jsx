function SocialHome({url, src, alt}) {
    return (
        <li>
            <a href={url}></a>
            <img src={src} alt={alt} />
        </li>
    )
}

export default SocialHome