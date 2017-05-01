(function(){

    angular.module('app', ['ngAnimate'])
        .component('mainComponent', {
            templateUrl: 'app/mainComponent.html',
            controller: function(){
                this.viewState = 0
                this.toggle = function(){
                    switch (this.viewState){
                        case 0:
                            this.viewState = 1; 
                            break;
                        case 1:
                            this.viewState = 2; 
                            break;
                        case 2:
                            this.viewState = 0; 
                            break;
                    }
                }
            }
        })

}())