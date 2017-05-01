(function(){

    angular.module('app', ['ngAnimate'])
        .component('mainComponent', {
            templateUrl: 'app/mainComponent.html',
            controller: ['$timeout', function($timeout){
                var vm = this;
                vm.viewState = 0
                vm.height = '50px';
                vm.style = {height: vm.height};
                vm.toggle = function(){
                    switch (vm.viewState){
                        case 0:
                            vm.viewState = 1; 
                            vm.height = '250px'
                            break;
                        case 1:
                            vm.viewState = 2; 
                            vm.height = '500px'
                            break;
                        case 2:
                            vm.viewState = 0; 
                            vm.height = '50px'
                            break;
                    }
                    vm.style = {overflow: 'hidden', height: vm.height}
                    
                    $timeout(function(){
                        console.log('blah')
                        vm.style = {overflow: 'visible', height: vm.height}
                    }, 1000)
                }
            }]
        })

}())