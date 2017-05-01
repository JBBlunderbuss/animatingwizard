(function(){

    angular.module('app', ['ngAnimate'])
        .component('mainComponent', {
            template: `
            <div class="mainComponent" ng-style="$ctrl.style">
                <div class="actions">
                    <button ng-click="$ctrl.toggle()">toggle</button>
                </div>
                <comp-one ng-if="$ctrl.viewState == 1" class="comp">/</comp-one>
                <comp-two ng-if="$ctrl.viewState == 2" class="comp"></comp-two>
            </div>
            `,
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