(function() {

    'use strict';

    angular
        .module('coolArch')
        .controller('roomStatus', getRoomStatus);

    function getRoomStatus($mdDialog, room) {
        var vm = this;
        vm.room = room;
        vm.closeDialog =closeDialog; 
        
         function closeDialog() {
          $mdDialog.hide();
        }
    }
} ());