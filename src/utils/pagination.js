const paginationLogic =(currentPage, residents) =>{
    // CANTIDAD DE RESIDENTES POR PAGINA
    const RESIDENTS_PER_PAGE = 14

    //cantidad total de paginas
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

    // residentes que se van a mostrar en la pag actual
    const sliceEnd = currentPage * RESIDENTS_PER_PAGE;
    const sliceStart = sliceEnd - RESIDENTS_PER_PAGE;
    const residentsInCurrentPage = residents.slice(sliceStart, sliceEnd)

    // generacion de arreglo con los numeros de las pags que se van a mostrar
    const pages =[]
    for(let i = 1; i <= totalPages; i++){
        pages.push(i)
    }
    return {pages, residentsInCurrentPage}
}

export{paginationLogic};