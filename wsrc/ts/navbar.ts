export class NavBar {
    static addClickActive(e: Element): void {
        e.addEventListener('click', () => {
            $.each(e.parentElement.children, (i, el) => {
               var current = <Element>el;
               current.classList.remove('active'); 
            });
            e.classList.add('active');
            
        });
    }
}