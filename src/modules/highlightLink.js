const highlightLinks = () => {
    window.addEventListener('load', () => {

        const links = document.querySelectorAll('.nav-link');

        links.forEach( (link) =>{
            if (link.href === window.location.href.split("?")[0]) {
                link.classList.add('active');
            }
        });
    });
};

export default highlightLinks;