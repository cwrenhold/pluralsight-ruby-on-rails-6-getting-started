const ready = () => {
    const links = document.getElementsByClassName('wikiLink');
    for (const link of links) {
        link.addEventListener('click', e => {
            e.preventDefault();
            if (!confirm("Are you sure?")) {
                return;
            }

            window.location.href = link.href;
        });
    }
}

document.addEventListener("DOMContentLoaded", ready);