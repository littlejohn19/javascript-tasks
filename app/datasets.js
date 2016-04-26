'use strict';

module.exports = {

    add: function () {
        return [3, -5];
    },

    ceil: function () {
        return [1.8476,2];
    },

    divide: function () {
        return [3, 0];
    },

    floor: function () {
        return [5.47886, 2];
    },

    max: function () {
        var array = [4,2,5,-1,0];

        return [array];
    },

    maxBy1: function () {

        var obj = [{a: 3, b: 3}, {a:1, b:4}, {a: 0, b: -3}];

        var fun = function (o) {
            return o.a + o.b;
        };

        return [obj, fun];
    },

    maxBy2: function () {
        var objects = [{ 'Name': 'Jack', 'Gold': 1500 }, { 'Name': 'Edwin', 'Gold': 2500 }, { 'Name': 'Bob', 'Gold': 200 }];

        return [objects, 'Gold'];
    },

    mean: function () {
        var array = [3,2,4,4];
        return [array];
    },

    meanBy1: function () {
        var array = [{ 'name': 'Kate' ,'age': 25 }, { 'name': 'Mark' ,'age': 23 }, { 'name': 'Jack' ,'age': 34 }];

        var fun = function (o) {
            return o.age;
        };

        return [array, fun];
    },

    meanBy2: function () {
        var objects = [{ 'n': 1 }, { 'n': 2 }, { 'n': 3 }, { 'n': 6 }];

        return [objects, 'n'];
    },
    
    min: function () {
        var array = [2,5,3,-3,0,9];
        return [array];
    },

    minBy1: function () {

        var array = [{ 'name': 'Kate' ,'age': 25 }, { 'name': 'Mark' ,'age': 23 }, { 'name': 'Justin' ,'age': 21 }];
        var fun = function (o) {
            return o.age;
        };
        
        return [array, fun];
    },

    minBy2: function () {
        var objects = [{ 'Name': 'Jack', 'Gold': 1500 }, { 'Name': 'Edwin', 'Gold': 2500 }, { 'Name': 'Bob', 'Gold': 200 }];
        return [objects, 'Gold'];
    },

    multiply: function () {
        return [-0.5, -30];
    },

    round: function () {
        return [8.2456, 3];
    },

    subtract: function () {
        return [15,0];
    },

    sum: function () {
        var tab = [1,2,3,4];
        return [tab];
    },

    sumBy1: function () {
        var tab = [{'name': 'Jack', 'money': 1100}, {'name': 'Edwin', 'money': 0}, {'name': 'Bill', 'money': 2240.5}];
        var fun = function (o) {
            return o.money;
        };
        
        return [tab, fun];
    },
    
    sumBy2: function () {
     var objects = [{'name': 'Jack', 'gold': 25}, {'name': 'Edwin', 'gold': 50}, {'name': 'Bill', 'gold': 85}, {'name': 'Bob', 'gold': 33}];

     return [objects, 'gold'];
    }

};
