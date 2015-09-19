'use strict';

module.exports = {

    add: function () {

        var capacity = function(x) {
            if(x < 0){
                return 0;
            }else{
                return x*x*x;
            }

        };

        var area = function (x) {
            if(x < 0){
                return 0;
            }else{
                return 6*x*x;
            }
        };

        return [capacity, area];
    },

    ceil: function (x, y, precision) {

        var area = function (x,y) {
            if(x <= 0 || y <= 0){
                return 0;
            }
            return (2*x+2*y);
        };

        return [area, precision];
    },

    divide: function () {
        return [3, 0];
    },

    floor: function (callback, precision) {

        var capacity = function (x, y, z) {
            if(typeof x !== 'number' && typeof y !== 'number' && typeof z !== 'number' && x <= 0 && y <= 0 && z <= 0){
                return 0;
            }else if(x < 0 || y < 0 || z < 0){
                return 0;
            }else{
                return x*y*z;
            }
        };

        return [capacity, precision];
    },

    max: function () {

        var tab = [4,2,5,-1];

        return [tab];
    },

    maxBy1: function (array) {
        return [array];
    },
    /*
    maxBy2: function (array) {
        return [array];
    },
    */
    maxBy3: function () {

        var objects = [{ 'Name': 'Jack', 'Gold': 1500 }, { 'Name': 'Edwin', 'Gold': 2500 }, { 'Name': 'Bob', 'Gold': 200 }];

        return [objects, 'Gold'];
    },

    maxBy4: function () {

        var string = ['This', 'is', 'a', 'simple', 'word', 'in', 'string'];
        return [string];
    },

    mean: function () {
        var array = [3,2,4,4];
        return [array];
    },

    meanBy1: function () {
        var array = [3,2,4,4];
        return [array];
    },
    /*
    meanBy2: function () {
        return [];
    },
    */
    meanBy3: function () {
        // poprawic
        var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

        return [objects, 'n'];
    },

    meanBy4: function () {
        return [];
    },

    min: function () {
        var array = [4,3,6,0,-3,3];
        return [array];
    },

    minBy1: function () {

        var array = [4,2,5,2,-1,5];
        return [array];
    },
    /*
    minBy2: function () {

        return [];
    },
    */

    minBy3: function () {
        var objects = [{ 'Name': 'Jack', 'Gold': 1500 }, { 'Name': 'Edwin', 'Gold': 2500 }, { 'Name': 'Bob', 'Gold': 200 }];
        return [objects, 'Gold'];
    },

    minBy4: function () {
        var string = 'qwertyuiop';
        return [string];
    },

    multiply: function (a, b) {
        return [a ,b];
    },

    round: function (number, precision) {

        var sqrt = function (number) {
            if(typeof number !== 'number'){
                return NaN;
            }else{
                return Math.sqrt(number);
            }
        };

        return [sqrt, precision];
    },

    subtract: function () {
        return [15,0];
    },

    sum: function () {
        var tab = [1,2,3,4];
        return [tab];
    },

    sumBy1: function () {
        var tab = [1,2,3,4];
        return [tab];
    },
    /*
    sumBy2: function () {
        return [];
    },
    */
    sumBy3: function () {

        var objects = [{ 'gold': 25, 'name': 'Jack'}, { 'gold': 50, 'name': 'Edwin'}, { 'gold': 85 , 'name': 'Bill' }, { 'gold': 33 , 'name': 'Bob' }];

        return [objects, 'gold'];
    },

    sumBy4: function () {

        var string = 'This is a simple string text';
        string = string.split(' ');

        return [string];
    }
};
