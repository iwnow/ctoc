export class NavBar {
    static init():void{
        $("#collapseMenu").children().each((i, e) => {
            NavBar.addClickActive(e);
        });
        var activePage = NavBar.getActiveText();
        NavBar.setMenuHeaderText(activePage);
        NavBar.loadView(activePage;
        NavBar.useOnDisplayChanged();
        $(window).trigger('resize');
    }
    
    static addClickActive(e: Element): void {
        e.addEventListener('click', (ev) => {
            ev.preventDefault();
            $.each(e.parentElement.children, (i, el) => {
               var current = <Element>el;
               current.classList.remove('active'); 
            });
            e.classList.add('active');  
            NavBar.setMenuHeaderText(e.textContent);        
            if ($('#collapseMenyHead').css('display') == 'block')
                e.parentElement.classList.remove('in');
            NavBar.loadView(e.textContent);
        });
    }
    
    static getActiveText(): string {
        return $('#collapseMenu .active a').text();
    }
    
    static setMenuHeaderText(txtActive: string){
        $('#collapseMenyHead a').text(txtActive);
    }
    
    static useOnDisplayChanged(){
        $(window).on('resize', () => {
            if ($(window).width() < 768) {
                if ($('#collapseMenu').hasClass('in')){
                    $('#collapseMenyHead a').trigger('click');
                }
                    
            }
            else if (!$('#collapseMenu').hasClass('in'))
                    $('#collapseMenyHead a').trigger('click');
        });
    }
    
    static loadView(name: string){
        $('#dataContainer').load('view/' + name + '.html');
    } 
}