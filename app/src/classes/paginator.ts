/**
 * The class is responsible to correctly show the pagination alongside its proper buttons.
 * In this problem the paginator is used to traverse all the generation solutions
 */
class Paginator {
    currentPage: number;
    lastPage: number;
    paginatorLength: number;

    constructor(lastPage:number, currentPage: number = 0) {
        this.currentPage = currentPage;
        this.lastPage = lastPage;
        this.paginatorLength = 3;
    }

    /**
     * Returns whether the paginator should show the first page button.
     * It is convinient when the user is in the last pages but would like to skip to the first page, but when the user
     * is in the first pages the button should not be shown twice
     * 
     * @returns boolean
     */
    hasFirstPage(): boolean {
        if (this.currentPage > 1) {
            return true;
        }

        return false;
    }

    /**
     * Returns whether the paginator should show the last page button.
     * It is convinient when the user is in the early pages but would like to skip to the end, but when the user
     * is in the last pages the button should not be shown twice
     * 
     * @returns boolean
     */
    hasLastPage(): boolean {
        if (this.currentPage < (this.lastPage - 1)) {
            return true;
        }

        return false;
    }

    /**
     * Creates and returns the buttons used in pagination
     * 
     * @returns PaginatorButton[]
     */
    getButtons(): PaginatorButton[] {
        const buttons: PaginatorButton[] = [];
        let counter: number;

        if (this.currentPage === 0) {
            counter = 0;
        } else if (this.currentPage === this.lastPage) {
            counter = this.lastPage - this.paginatorLength + 1;
        } else {
            counter = this.currentPage - Math.floor(this.paginatorLength / 2);
        }

        if (counter < 0) {
            counter = 0;
        }

        for (let i=0; i<this.paginatorLength; i++) {
            if (this.currentPage === (counter + i)) {
                buttons.push(new PaginatorButton(counter + i, true));
            } else {
                buttons.push(new PaginatorButton(counter + i));
            }
        }

        return buttons;
    }

    /**
     * Returns the previous page number based on the current page
     * In case the current page is 1, the previous page returned will also be 1
     * 
     * @returns number
     */
    getPreviousPage(): number {
        return this.currentPage === 0 ? 0 : this.currentPage - 1;
    }

    /**
     * Returns the next page number based on the current page
     * In case the current page is equal to the last page, the next page returned will also be the last page
     * 
     * @returns number
     */
    getNextPage(): number {
        return this.currentPage === this.lastPage ? this.lastPage : this.currentPage + 1;
    }
}