'use strict';


module.exports = {

    assign: function(){

        var obj = {
            number: 5,
            square: 25,
            'ping': function() {
                return 'Number: ' + this.number;
            },
            'pong': function(){
                return 'Number: ' + this.square;
            },
        };

        function Obj2() {
            this.number = 6,
            this.string = 'Trust me! I am a engineer!';
        }

        Obj2.prototype.square = 36;

        return [obj, new Obj2()];
    },

    //alias _.extend
    assignIn: function(){
        var obj = {
            number: 5,
            'square': function(){
                return 'Square: ' + Math.pow(Math, this.number);
            },

        };

        function Obj2() {
            this.number = 4;
            this.cube = 64;
        }

        Obj2.prototype.fourthPower = 256;

        Obj2.prototype.square = function(){
            return 'Square: ' + Math.pow(Math, this.number);
        };

        return [obj, new Obj2()];
    },

    //alias _.extendWith
    assignInWith: function(){
        return [];
    },

    assignWith: function(){
        return [];
    },

    findKey1: function(obj){

        var filter = function (n){
            return n.number > 20 ;
        };

        return [obj, filter];

    },

    findKey2: function(obj) {

        var value = { number: 15 };

        return [obj, value];
    },

    findKey3: function(obj) {

        var arr = ['bool', false];

        return [obj, arr];
    },

    findKey4: function(obj) {

        var filterStr = 'cube';

        return [obj, filterStr];
    },

    findLastKey1: function(obj){
        var filter  = function(o){
            return o.pizza === true && o.pasta === false;
        };

        return [obj, filter];
    },

    findLastKey2: function(obj){

        var filterObj = {pizza: true, lasagne: true};

        return [obj, filterObj];
    },

    findLastKey3: function(obj){

        var filterArr = ['number', 17];

        return [obj, filterArr];
    },

    findLastKey4: function(obj){

        var filterStr = 'pasta';

        return [obj, filterStr];
    },

    get1: function(obj){

        var filterStr = 'exercises.tasks[2].thirdTask';

        return [obj, filterStr];
    },

    get2: function(obj) {

        var filterArray = ['exercises', 'tasks', '2', 'thirdTask'];

        return [obj, filterArray];
    },

    get3: function(obj){

        var filterStr = 'month.January.Monday',
            defaultValue = 'default value';

        return [obj, filterStr, defaultValue];
    },

    invert: function(obj1){

        return [obj1];
    },

    invertBy1: function(obj1){

        return [obj1];
    },

    invoke: function(obj1){

        return [obj1];
    },

    keys: function(){

        function Classroom() {
            this.teacher = 'Mr. Tom';
            this.students = 27;
            this.girs = 15;
            this.boys = 12;
        }

        Classroom.prototype.animals = 1; //properties

        return [new Classroom()];
    },

    keysIn: function(){

        function Animal() {
            this.arms = 4;
            this.legs = 8;
            this.heads = 2;
        }

        Animal.prototype.limbs = function(){
            return this.arms + this.legs;
        };

        Animal.prototype.tails = 1;

        return [new Animal()];
    },

    mapKeys1: function(obj){

        var filter  = function(value, key){
            return key + ' - number: ' + value;
        };

        return [obj, filter];
    },

    mapValues: function(){

        return [];
    },

    merge: function(){

        var owners = {
            'data': [{ 'owner': 'Adam' }, { 'owner': 'Tom' }, { 'owner': 'John'}]
        };
        var animals = {
            'data': [{ 'cats': 3 }, { 'dogs': 5 }, { 'ostrich': 1 }]

        };

        return [owners, animals];
    },

    omit1: function(obj){

        var str = '';

        return [obj, str];
    },

    omit2: function(obj){
        var arr = ['number5', 'number44'];

        return [obj, arr];
    }
};
