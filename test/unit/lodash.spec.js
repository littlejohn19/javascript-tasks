'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
var Guy = require('./Guy');
var chance = require('chance').Chance();



describe('Lodash training Object', function ()
{

    describe('assign', function () {
        var params;
        beforeEach(function(){
            params = datasets.assign();
        });

        it('should check types ', function(){
            var elem1 = params[0];
            var elem2 = params[1];

            expect(typeof elem1).to.eql('object');
            expect(elem2 instanceof Object).to.eql(true);
        });

        it('should check if first object has right properties', function(){
            expect(_.assign(params[0])).to.have.ownProperty('number');
            expect(params[0].number).to.equal(5);
            expect(_.assign(params[0])).to.have.ownProperty('square', 25);
            expect(_.assign(params[0])).to.have.ownProperty('ping');
            expect(_.assign(params[0])).to.have.ownProperty('pong');
        });
        
        it('should check if obj function (ping) return right value', function(){
            expect(params[0].ping()).to.eql('Number: ' + params[0].number);
        });
        
        it('should check if obj function (pong) return right value', function(){
            expect(params[0].pong()).to.eql('Number: ' + params[0].square);
        });
        
        it('should check if Cube have right properties', function(){
            expect(_.assign(params[1])).to.have.ownProperty('number', 6);
        });
        
        it('should check if Cube have right prototype properties', function(){
            expect(_.assign(params[1])).to.have.property('square', 36);
            expect(_.assign(params[1])).not.to.have.ownProperty('square', 36);
        });

        it('should return new object with properties both objects', function(){
            expect(_.assign.apply(_, params)).to.have.ownProperty('number', 6);
            expect(_.assign.apply(_, params)).to.have.ownProperty('square', 25);
            expect(_.assign.apply(_, params)).to.have.ownProperty('string', "Trust me! I am a engineer!")
            expect(_.assign.apply(_, params).ping()).to.eql('Number: 6');
            expect(_.assign.apply(_, params).pong()).to.eql('Number: 25');
        });

    });

    describe('assignIn', function () {

        var params;
        beforeEach(function(){
            params = datasets.assignIn();
        });

        it('should check types ', function(){
            var elem1 = params[0];
            var elem2 = params[1];

            expect(typeof elem1).to.eql('object');
            expect(elem2 instanceof Object).to.eql(true);
        });

        it('should check properties obj1', function(){
            expect(_.assign(params[0])).to.have.ownProperty('number', 5);
            expect(_.assign(params[0])).to.have.ownProperty('square');
            expect(params[0].square()).to.eql('Square: ' + Math.pow(Math, this.number));
        });

        it('should check properties obj2', function(){
            expect(_.assign(params[1])).to.have.ownProperty('number', 4);
            expect(_.assign(params[1])).to.have.ownProperty('cube', 64);
            expect(_.assign(params[1])).to.have.property('square');
            expect(_.assign(params[1])).not.to.have.ownProperty('square');
            expect(params[1].square()).to.eql('Square: ' + Math.pow(Math, this.number));
        });
        
        it('should check if obj2 have prototype properties', function(){
            expect(_.assign(params[1])).not.to.have.ownProperty('fourthPower', 256);
            expect(_.assign(params[1])).to.have.property('fourthPower', 256);
        });

        it('should return new object with properties with both objects', function(){
            expect(_.assignIn.apply(_, params)).to.have.ownProperty('number', 4);
            expect(_.assignIn.apply(_, params)).to.have.ownProperty('cube', 64);
            expect(_.assignIn.apply(_, params)).to.have.ownProperty('fourthPower', 256);
            expect(_.assignIn.apply(_, params).square()).to.eql('Square: ' + Math.pow(Math, this.number));
        });
    });

    describe('findKey', function () {
        describe('findKey1', function () {

            var params;
            beforeEach(function(){
                params = datasets.findKey1();
            });
            it('should check types', function(){
                var elem1 = params[0];
                var elem2 = params[1];

                expect(elem2 instanceof Function).to.eql(true);
            });


            it('should return person who has number greather than 20', function(){
                var obj1 = {};

                _.times(100,function(index) {
                    obj1['key' + index] = {number: _.random(20)};
                });
                var expectedKey = _.keys(obj1)[_.random(99)];
                obj1[expectedKey]={number:21+ _.random(10)};
                expect(_.findKey.apply(_, datasets.findKey1(obj1))).to.eql(expectedKey);
            });

        });

        describe('findKey2', function () {

            var params;
            beforeEach(function(){
                params = datasets.findKey2();
            });

            it('should check types', function(){
                var elem1 = params[0];
                var elem2 = params[1];

                expect(typeof elem2).to.eql('object');
            });


            it('should return random value', function(){
                var obj1 = {};

                _.times(100, function(index) {
                    obj1['key' + index] = {number: _.random(20)};
                });
                var expectedKey = _.keys(obj1)[_.random(99)];
                obj1[expectedKey] = {number: 21 + _.random(10)};
                var newObject = obj1;
                var expected = _.findKey(newObject, params[1]);
                expect(_.findKey.apply(_, datasets.findKey2(obj1))).to.eql(expected);
            });

        });

        describe('findKey3', function () {
            var params;
            beforeEach(function(){
                params = datasets.findKey3();
            });

            it('should check types', function(){
                var elem1 = params[0];
                var elem2 = params[1];

                expect(elem2 instanceof Array).to.eql(true);
            });
            it('should return wanted value from object', function(){
                var obj1 = {};

                var randomBool = function(){
                    return _.random() < 0.5;
                };

                _.times(100, function(index) {
                    obj1['key' + index] = {number: _.random(20), bool: randomBool()};
                });
                var expectedKey = _.keys(obj1)[_.random(99)];
                obj1[expectedKey] = {number: 21 + _.random(10)};
                var newObject = obj1;
                var expected = _.findKey(newObject, params[1]);
                expect(_.findKey.apply(_, datasets.findKey3(obj1))).to.eql(expected);
            });
        });

        describe('findKey4', function () {
            var params;
            beforeEach(function(){
                params = datasets.findKey4();
            });

            it('should check types', function(){
                var elem1 = params[0];
                var elem2 = params[1];

                expect(typeof elem2).to.eql('string');
            });
            it('should return key of matched element', function(){
                var obj1 = {},
                    random = _.random((20));

                var randomBool = function(){
                    return _.random() < 0.5;
                };

                _.times(100, function(index){
                    obj1['key' + index] = {number: random, square: random * random, cube: randomBool()};
                });

                expect(_.findKey.apply(_, datasets.findKey4(obj1))).to.eql(_.findKey(obj1, params[1]));

            });

        });
    });


    describe('findLastKey', function () {
        describe('findLastKey1', function () {
            var params;
            beforeEach(function(){
                params = datasets.findLastKey1();
            });
            it('should check types', function(){
                var element2 = params[1];
                expect(element2 instanceof Function).to.eql(true);
            });
            it('should create object with random values of orders', function(){
                var randomBool = function(){
                    return _.random() < 0.5;
                };

                var orders  = {};
                _.times(100, function(index){
                    orders['order' + index] = {pizza: randomBool(), pasta: randomBool(), lasagne: randomBool()};
                });

                expect(_.findLastKey.apply(_, datasets.findLastKey1(orders))).to.eql(_.findLastKey(orders, params[1]));
            });
        });

        describe('findLastKey2', function () {
            var params;
            beforeEach(function(){
                params = datasets.findLastKey2();
            });
            it('should check types', function(){
                var elem2 = params[1];
                expect(typeof elem2).to.eql('object');
            });
            it('should return new object filtred thru given obj', function(){
                var randomBool = function(){
                    return _.random() < 0.5;
                };

                var orders  = {};
                _.times(100, function(index){
                    orders['order' + index] = {pizza: randomBool(), pasta: randomBool(), lasagne: randomBool()};
                });

                expect(_.findLastKey.apply(_, datasets.findLastKey2(orders))).to.eql(_.findLastKey(orders, params[1]));
            });
        });

        describe('findLastKey3', function () {
            var params;
            beforeEach(function(){
                params = datasets.findLastKey3();
            });

            it('should check types', function(){
                var elem2 = params[1];

                expect(elem2 instanceof Array).to.eql(true);
                expect(params).to.have.length(2);
            });
            it('should return object filtred thru given array', function(){
                var randomBool = function(){
                    return _.random() < 0.5;
                };

                var orders  = {};
                _.times(100, function(index){
                    orders['order' + index] = {number: _.random(1,100), pizza: randomBool(), pasta: randomBool(), lasagne: randomBool()};
                });

                expect(_.findLastKey.apply(_, datasets.findLastKey3(orders))).to.eql(_.findLastKey(orders, params[1]));
            });
        });

        describe('findLastKey4', function () {
            var params;
            beforeEach(function(){
                params = datasets.findLastKey4();
            });

            it('should check types', function(){
                var elem2 = params[1];

                expect(typeof elem2).to.eql('string');
                expect(params).to.have.length(2);
            });
            it('should return object filtred thru given array', function(){
                var randomBool = function(){
                    return _.random() < 0.5;
                };

                var orders  = {};
                _.times(100, function(index){
                    orders['order' + index] = {number: _.random(1,100), pizza: randomBool(), pasta: randomBool(), lasagne: randomBool()};
                });

                expect(_.findLastKey.apply(_, datasets.findLastKey4(orders))).to.eql(_.findLastKey(orders, params[1]));
            });
        });
    });


    describe('get', function () {
        describe('get1', function () {
            var params;
            beforeEach(function(){
                params = datasets.get1();
            });
            it('should check types', function(){
                var elem = params[1];

                expect(params).to.have.length(2);
                expect(typeof elem).to.eql('string');
            });
            it('should check filter value', function(){
                expect(params[1]).to.have.length(28);
            });
            it('should return the resolved value from second argument', function(){
                var month = ['January', 'February', 'March', 'Aprlil', 'May'],
                    day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Friday'];

                var randMonth = function(){
                    return _.random(0, 4);
                };

                var randNameDay = function(){
                    return _.random(0, 6);
                };

                var randDay = function(){
                    return _.random(1,31);
                };

                var obj = {
                    month: month[randMonth()],
                    nameDay: day[randNameDay()],
                    day: randDay(),
                    exercises: {tasks: [{firstTask: 'write a code'},{secondTask: 'learn lodash'}, {thirdTask: 'be cool'}]}
                };

                expect(_.get.apply(_, datasets.get1(obj))).to.eql('be cool');
            });
        });

        describe('get2', function () {
            var params;
            beforeEach(function(){
                params = datasets.get2();
            });

            it('should check types', function(){
                var elem = params[1];

                expect(elem instanceof Array).to.eql(true);
                expect(elem).to.have.length(4);
            });
            it('should return the resolved value from object', function(){

                var month = ['January', 'February', 'March', 'Aprlil', 'May'],
                    day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Friday'];

                var randMonth = function(){
                    return _.random(0, 4);
                };

                var randNameDay = function(){
                    return _.random(0, 6);
                };

                var randDay = function(){
                    return _.random(1,31);
                };

                var obj = {
                    month: month[randMonth()],
                    nameDay: day[randNameDay()],
                    day: randDay(),
                    exercises: {tasks: [{firstTask: 'write a code'},{secondTask: 'learn lodash'}, {thirdTask: 'be cool'}]}
                };
                expect(_.get.apply(_, datasets.get2(obj))).to.eql('be cool');
            });
        });


        describe('get3', function () {
            var params;
            beforeEach(function(){
                params = datasets.get3();
            });

            it('should check types', function(){
                var elem2 = params[1],
                    elem3 = params[2];

                expect(typeof elem2).to.eql('string');
                expect(typeof elem3).to.eql('string');
            });
            it('should return the resolved value from object', function(){

                var month = ['January', 'February', 'March', 'Aprlil', 'May'],
                    day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Friday'];

                var randMonth = function(){
                    return _.random(0, 4);
                };

                var randNameDay = function(){
                    return _.random(0, 6);
                };

                var randDay = function(){
                    return _.random(1,31);
                };

                var obj = {
                    month: month[randMonth()],
                    nameDay: day[randNameDay()],
                    day: randDay(),
                    exercises: {tasks: [{firstTask: 'write a code'},{secondTask: 'learn lodash'}, {thirdTask: 'be cool'}]}
                };
                expect(_.get.apply(_, datasets.get3(obj))).to.eql('default value');
            });
        });
    });


    describe('invert', function () {

        var params;
        beforeEach(function(){
            params = datasets.invert();
        });

        it('should returns inverted object', function(){

            var obj1 = {};

            _.times(100, function(index){
                obj1['key' + index] = _.random(20);
            });

            var newObject = obj1;
            var expected = _.invert(newObject);
            expect(_.invert.apply(_, datasets.invert(obj1))).to.eql(expected);
        });
    });

    describe('invertBy', function () {
        describe('invertBy1', function () {

            var params;
            beforeEach(function(){
                params = datasets.invert();
            });

            it('should return inverted object', function(){

                var obj1 = {};

                _.times(100, function(index){
                    var indexInside = 0,
                        counter = 0;
                    obj1['key' + indexInside] = _.random(20);

                    if(counter === 33 || counter === 66){
                        indexInside++;
                    }
                    counter++;
                });
                var newObject = obj1;
                var expected = _.invertBy(newObject);
                expect(_.invertBy.apply(_, datasets.invertBy1(obj1))).to.eql(expected);

            });
        });
    });

    
    describe('invoke', function () {
        var params;
        beforeEach(function(){
            params = datasets.invoke();
        });

        it('should return invoked object', function(){
            var obj1 = {};

            _.times(100, function(index){
                obj1['key' + index] = [{number: {age: _.random(20)}} ];
            });
            var newObject = obj1;
            var expected = _.invoke(newObject);
            expect(_.invoke.apply(_, datasets.invoke(obj1))).to.eql(expected);
        });

    });

    describe('keys', function () {
        var params;
        beforeEach(function(){
            params = datasets.keys();
        });
        
        it('should ckech type', function(){
            var elem1 = params[0];
            expect(elem1 instanceof Object).to.eql(true);
        });
        
        it('should object have own properties', function(){
            var element1 = params[0];
            expect(element1).to.have.ownProperty('teacher');
            expect(element1.teacher).to.eql('Mr. Tom');
            expect(element1).to.have.ownProperty('students');
            expect(element1.students).to.equal(27);
            expect(element1).to.have.ownProperty('girs');
            expect(element1.girs).to.equal(15);
            expect(element1).to.have.ownProperty('boys');
            expect(element1.boys).to.equal(12);
        });
        
        it('should object have prototype properties', function(){
            var element1 = params[0];
            expect(_.assign(element1)).not.to.have.ownProperty('animals');
            expect(_.assign(element1)).to.have.property('animals');
            expect(element1.animals).to.equal(1);

        });

        it('should return array of property names', function(){
            var elem1 = params[0];
            expect(_.keys.apply(_, datasets.keys(elem1))).to.eql(['teacher', 'students', 'girs', 'boys']);
        });
    });

    describe('keysIn', function () {

        var params;
        beforeEach(function(){
            params = datasets.keysIn();

        });

        it('should check type', function(){
            var elem1 = params[0];
            expect(elem1 instanceof Object).to.eql(true);
        });

        it('should object have own properties', function(){
            var element1 = params[0];
            expect(element1).to.have.ownProperty('arms');
            expect(element1.arms).to.equal(4);
            expect(element1).to.have.ownProperty('legs');
            expect(element1.legs).to.equal(8);
            expect(element1).to.have.ownProperty('heads');
            expect(element1.heads).to.equal(2);
            expect(element1).to.have.property('limbs');
            expect(element1).not.to.have.ownProperty('limbs');
            expect(element1.limbs()).to.eql(12);
            expect(element1).to.have.property('tails');
            expect(element1).not.to.have.ownProperty('tails');
            expect(element1.tails).to.equal(1);
        });

        it('should return array of object\'s property names', function(){

            expect(_.keysIn.apply(_, datasets.keysIn(params))).to.eql(['arms', 'legs', 'heads', 'limbs', 'tails']);
        });
        
    });

    
    describe('mapKeys', function () {
        describe('mapKeys1', function () {
            var params;
            beforeEach(function(){
                params = datasets.mapKeys1();
            });

            it('should check types', function(){
                var elem1 = params[0];
                var elem2 = params[1];

                expect(elem2 instanceof Function).to.eql(true);
            });

            it('should', function(){

                var obj1 = {};
                _.times(100, function(index) {
                    obj1['person: ' + index] =  _.random(20);
                });

                var newObject = {};
                newObject =  _.assign(newObject, _.mapKeys(obj1, params[1]));
                expect(_.mapKeys.apply(_, datasets.mapKeys1(obj1))).to.eql(newObject);
            });
        });
    });

    describe('merge', function () {
        var params;
        beforeEach(function(){
            params = datasets.merge();
        });
        
        it('should check types of arguments', function(){
            var elem1 = params[0];
            var elem2 = params[1];

            expect(elem1 instanceof Object).to.eql(true);
            expect(elem2 instanceof Object).to.eql(true);
            expect(params).to.have.length(2);
        });
        
        it('should first object has right properties', function(){
            expect(params[0]).to.have.property('data');
            expect(params[0].data[0].owner).to.eql('Adam');
            expect(params[0].data[1].owner).to.eql('Tom');
            expect(params[0].data[2].owner).to.eql('John');
        });
        
        it('should second object has right properties', function(){
            expect(params[1]).to.have.property('data');
            expect(params[1].data[0].cats).to.eql(3);
            expect(params[1].data[1].dogs).to.eql(5);
            expect(params[1].data[2].ostrich).to.eql(1);
        });
        
        it('should return new object fold from 2 objects', function(){
            expect(_.merge.apply(_, datasets.merge(params))).to.have.property('data');
            expect(_.merge.apply(_, datasets.merge(params)).data[0].owner).to.eql('Adam');
            expect(_.merge.apply(_, datasets.merge(params)).data[0].cats).to.eql(3);
            expect(_.merge.apply(_, datasets.merge(params)).data[1].owner).to.eql('Tom');
            expect(_.merge.apply(_, datasets.merge(params)).data[1].dogs).to.eql(5);
            expect(_.merge.apply(_, datasets.merge(params)).data[2].owner).to.eql('John');
            expect(_.merge.apply(_, datasets.merge(params)).data[2].ostrich).to.eql(1);
        });
    });


    describe('omit', function () {
        describe('omit1', function () {
            var params;
            beforeEach(function(){
                params = datasets.omit1();
            });

            it('should check types', function(){
                var elem2 = params[1];
                expect(typeof elem2).to.eql('string');
                expect(params).to.have.length(2);
            });
            it('should return ommited object', function(){
                var obj = {};

                _.times(50, function(index){
                    obj['number' + index] = _.random(20);
                });
                expect(_.omit.apply(_, datasets.omit1(obj))).to.eql(_.omit(obj, params[1]));
            });
        });

        describe('omit2', function () {
            var params;
            beforeEach(function(){
                params = datasets.omit2();
            });

            it('should check types', function(){
                var elem = params[1];
                expect(elem instanceof Array).to.eql(true);
                expect(params).to.have.length(2);
            });
            it('should return ommited object', function(){
                var obj = {};

                _.times(50, function(index){
                    obj['number' + index] = _.random(20);
                });
                expect(_.omit.apply(_, datasets.omit2(obj))).to.eql(_.omit(obj, params[1]));
            });
        });
    });

});
