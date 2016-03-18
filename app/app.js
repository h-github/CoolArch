/**
 * Created by hamid on 2016-03-16.
 */
(function() {
    'use strict';

    angular.module('coolArch', ['ngMaterial']);
    angular.module('coolArch').controller('mainCtrl', MainController)
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey')
                .accentPalette('orange');
        });


    function MainController($scope, $mdSidenav) {
        var vm = this;
        vm.showOne = true;
        vm.showTwo = false;
        vm.showThree = false;
        vm.plan =  { id: 1, name: 'Floor Plan One' };
        vm.switchFloorPlan = switchFloorPlan;

        initiate();

        function initiate() {
            switchFloorPlan(1)
        }


        vm.floorPlans = [
            { id: 1, name: 'Floor Plan One' },
            { id: 2, name: 'Floor Plan Two' },
            { id: 3, name: 'Floor Plan Three' }
        ];

        function switchFloorPlan(id) {
            vm.showOne = id == 1 ? true : false;
            vm.showTwo = id == 2 ? true : false;
            vm.showThree = id == 3 ? true : false;
        }
        
        
       

    };
} ());