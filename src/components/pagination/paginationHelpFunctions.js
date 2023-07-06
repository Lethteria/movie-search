function createPages(currentPage, totalPages){
    let pages = [];
    if ( totalPages > 7) {

        if ( +currentPage > 4 ){

            if( +currentPage < totalPages - 3 ){
                for (let i = +currentPage - 2; i <= +currentPage + 2; i++) {
                    pages.push(i);
                    if (i === totalPages - 1) break;
                }
            }
            else {
                for (let i = totalPages - 5; i <= totalPages-1 ; i++) {
                    pages.push(i);
                }
            }

        }
        else {
            for (let i = 2; i < 7; i++) {
                pages.push(i);
            }
        }

    }
    else {
        for (let i = 2; i < totalPages; i++) {
            pages.push(i);
        }
    }
    return pages;
}

export {createPages}