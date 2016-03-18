(function() {
    'use strict';

    angular
        .module('coolArch')
        .directive('floorPlanThree', FloorPlanThree);

    function FloorPlanThree($document, $mdDialog) {
        return {
            restrict: 'EA',
            // templateUrl: '../app/directives/templates/floorPlanThree.html',
            link: function(scope, el, attrs) {
                
                 var roomStatus = [];
                for(var i=0 ; i<30; i++){
                    roomStatus.push( { 
                        roomNumber: 300 + i,
                        clean: Math.random() >= 0.5,
                        inspected: Math.random() >= 0.5,
                        occupied: Math.random() >= 0.5,
                });
                }
                
                var svgNS = "http://www.w3.org/2000/svg";
                var svg = $('<svg id="svgFoolPlanOne" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="800"/>');
                el.append(svg);

                var floorPO = el.find('#svgFoolPlanOne');

                for (var i = 0; i < 10; i++) {
                    createRooms(i);
                    createRooms2(i + 10);
                }

                for (var i = 0; i < 5; i++) {
                    createRooms3(i);
                    createRooms4(i + 5);
                }

                for (var i = 0; i < 3; i++) {
                    createElevators(i);

                }


                function createRooms(i) {
                    var svgRoom = document.createElementNS(svgNS, "rect"); //to create a circle. for rectangle use "rectangle"
                    svgRoom.setAttributeNS(null, "id", 300 + i);
                    svgRoom.setAttributeNS(null, "width", 50);
                    svgRoom.setAttributeNS(null, "height", 70);
                    svgRoom.setAttributeNS(null, "x", 50 * i);
                    svgRoom.setAttributeNS(null, "y", 100);
                    svgRoom.setAttributeNS(null, "fill", setBackground(300 + i));
                    svgRoom.setAttributeNS(null, "stroke", "black");

                    var svgRoomNumber = document.createElementNS(svgNS, "text");
                    svgRoomNumber.setAttributeNS(null, 'x', 50 * i + 15);
                    svgRoomNumber.setAttributeNS(null, 'y', 140);
                    svgRoomNumber.setAttributeNS(null, "fill", "black");
                    svgRoomNumber.setAttributeNS(null, "stroke", "black");
                    svgRoomNumber.setAttributeNS(null, "font-family", "Calibri");
                    svgRoomNumber.setAttributeNS(null, "font-size", "14");


                    var textNode = document.createTextNode(300 + i);
                    svgRoomNumber.appendChild(textNode);

                    floorPO.append(svgRoom);
                    floorPO.append(svgRoomNumber);
                }

                function createRooms2(i) {
                    var svgRoom = document.createElementNS(svgNS, "rect"); //to create a circle. for rectangle use "rectangle"
                    svgRoom.setAttributeNS(null, "id", 300 + i);
                    svgRoom.setAttributeNS(null, "width", 50);
                    svgRoom.setAttributeNS(null, "height", 70);
                    svgRoom.setAttributeNS(null, "x", 50 * (i - 10));
                    svgRoom.setAttributeNS(null, "y", 230);
                    svgRoom.setAttributeNS(null, "fill", setBackground(300 + i));
                    svgRoom.setAttributeNS(null, "stroke", "black");

                    var svgRoomNumber = document.createElementNS(svgNS, "text");
                    svgRoomNumber.setAttributeNS(null, 'x', 50 * (i - 10) + 15);
                    svgRoomNumber.setAttributeNS(null, 'y', 270);
                    svgRoomNumber.setAttributeNS(null, "fill", "black");
                    svgRoomNumber.setAttributeNS(null, "stroke", "black");
                    svgRoomNumber.setAttributeNS(null, "font-family", "Calibri");
                    svgRoomNumber.setAttributeNS(null, "font-size", "14");

                    var textNode = document.createTextNode(300 + i);
                    svgRoomNumber.appendChild(textNode);

                    floorPO.append(svgRoom);
                    floorPO.append(svgRoomNumber);
                }

                function createRooms3(i) {
                    var svgRoom = document.createElementNS(svgNS, "rect"); //to create a circle. for rectangle use "rectangle"
                    svgRoom.setAttributeNS(null, "id", 320 + i);
                    svgRoom.setAttributeNS(null, "width", 70);
                    svgRoom.setAttributeNS(null, "height", 70);
                    svgRoom.setAttributeNS(null, "x", 70 * i + 620);
                    svgRoom.setAttributeNS(null, "y", 100);
                    svgRoom.setAttributeNS(null, "fill", setBackground(300 + i));
                    svgRoom.setAttributeNS(null, "stroke", "black");

                    var svgRoomNumber = document.createElementNS(svgNS, "text");
                    svgRoomNumber.setAttributeNS(null, 'x', 70 * i + 645);
                    svgRoomNumber.setAttributeNS(null, 'y', 140);
                    svgRoomNumber.setAttributeNS(null, "fill", "black");
                    svgRoomNumber.setAttributeNS(null, "stroke", "black");
                    svgRoomNumber.setAttributeNS(null, "font-family", "Calibri");
                    svgRoomNumber.setAttributeNS(null, "font-size", "14");


                    var textNode = document.createTextNode(320 + i);
                    svgRoomNumber.appendChild(textNode);

                    floorPO.append(svgRoom);
                    floorPO.append(svgRoomNumber);
                }

                function createRooms4(i) {
                    var svgRoom = document.createElementNS(svgNS, "rect"); //to create a circle. for rectangle use "rectangle"
                    svgRoom.setAttributeNS(null, "id", 320 + i);
                    svgRoom.setAttributeNS(null, "width", 70);
                    svgRoom.setAttributeNS(null, "height", 70);
                    svgRoom.setAttributeNS(null, "x", 70 * (i - 5) + 620);
                    svgRoom.setAttributeNS(null, "y", 230);
                    svgRoom.setAttributeNS(null, "fill", setBackground(300 + i));
                    svgRoom.setAttributeNS(null, "stroke", "black");

                    var svgRoomNumber = document.createElementNS(svgNS, "text");
                    svgRoomNumber.setAttributeNS(null, 'x', 70 * (i - 5) + 645);
                    svgRoomNumber.setAttributeNS(null, 'y', 270);
                    svgRoomNumber.setAttributeNS(null, "fill", "black");
                    svgRoomNumber.setAttributeNS(null, "stroke", "black");
                    svgRoomNumber.setAttributeNS(null, "font-family", "Calibri");
                    svgRoomNumber.setAttributeNS(null, "font-size", "14");


                    var textNode = document.createTextNode(320 + i);
                    svgRoomNumber.appendChild(textNode);

                    floorPO.append(svgRoom);
                    floorPO.append(svgRoomNumber);
                }


                function createElevators(i) {
                    var svgE = document.createElementNS(svgNS, "rect"); //to create a circle. for rectangle use "rectangle"
                    svgE.setAttributeNS(null, "width", 40);
                    svgE.setAttributeNS(null, "height", 30);
                    svgE.setAttributeNS(null, "x", 40 * i + 500);
                    svgE.setAttributeNS(null, "y", 100);
                    svgE.setAttributeNS(null, "fill", "white");
                    svgE.setAttributeNS(null, "stroke", "black");

                    var svgELable = document.createElementNS(svgNS, "text");
                    svgELable.setAttributeNS(null, 'x', 40 * i + 515);
                    svgELable.setAttributeNS(null, 'y', 120);
                    svgELable.setAttributeNS(null, "fill", "black");
                    svgELable.setAttributeNS(null, "stroke", "black");
                    svgELable.setAttributeNS(null, "font-family", "Calibri");
                    svgELable.setAttributeNS(null, "font-size", "14");

                    var textNode = document.createTextNode('E');
                    svgELable.appendChild(textNode);

                    floorPO.append(svgE);
                    floorPO.append(svgELable);
                }




                var svgWall = document.createElementNS(svgNS, "line");
                svgWall.setAttributeNS(null, 'x1', 1);
                svgWall.setAttributeNS(null, 'y1', 100);
                svgWall.setAttributeNS(null, 'x2', 1);
                svgWall.setAttributeNS(null, 'y2', 300);
                svgWall.setAttributeNS(null, "stroke", "black");
                svgWall.setAttributeNS(null, "stroke-width", "2");
                floorPO.append(svgWall);

                svgWall = document.createElementNS(svgNS, "line");
                svgWall.setAttributeNS(null, 'x1', 970);
                svgWall.setAttributeNS(null, 'y1', 100);
                svgWall.setAttributeNS(null, 'x2', 970);
                svgWall.setAttributeNS(null, 'y2', 300);
                svgWall.setAttributeNS(null, "stroke", "black");
                svgWall.setAttributeNS(null, "stroke-width", "2");
                floorPO.append(svgWall);

                svgWall = document.createElementNS(svgNS, "line");
                svgWall.setAttributeNS(null, 'x1', 500);
                svgWall.setAttributeNS(null, 'y1', 300);
                svgWall.setAttributeNS(null, 'x2', 620);
                svgWall.setAttributeNS(null, 'y2', 300);
                svgWall.setAttributeNS(null, "stroke", "black");
                svgWall.setAttributeNS(null, "stroke-width", "2");
                floorPO.append(svgWall);
                
                function setBackground(roomId){
                    var room = _.find(roomStatus, function(room) { return room.roomNumber == roomId; });
                    if(room.clean)
                    {
                        if(room.inspected)
                        {
                        return "#00cc66";
                        }else{
                            return "#e6e600";
                        }
                    } else{
                        return "#ff4d4d";
                    }
                };
                
                floorPO.find('rect').each(function(index, rec) {
                    var id = rec.id;
                    rec.addEventListener("click", function(ev) {
                        var room = _.find(roomStatus, function(room) { return room.roomNumber == id; });

                        $mdDialog.show({
                            templateUrl: './directives/templates/roomStatusDialog.html',
                            parent: angular.element(id),
                            locals: {
                                room: room
                            },
                            controller: 'roomStatus as vm',
                            targetEvent: ev,
                            clickOutsideToClose: true
                        });
                    })
                })
            }
        }
    };
} ());



