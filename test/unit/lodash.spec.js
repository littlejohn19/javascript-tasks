'use strict';

var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var datasets = require('../../app/datasets');
var Guy = require('./Guy');
var chance = require('chance').Chance();

describe('Lodash training', function ()
{
    describe('Math functions', function () {
        describe('add', function () {

            var params, capacity, area;

            beforeEach(function () {
                params = datasets.add();
                capacity = params[0];
                area = params[1];
            });

            it('should verify params', function () {
                expect(capacity instanceof Function && area instanceof Function).to.eql(true);
                expect(params).to.have.length(2);
            });

            it('should return capacity of cube', function () {
                expect(capacity(2)).to.eql(8);
                expect(capacity(3.3)).to.eql(35.937);
            });

            it('should return area of cube', function () {
                expect(area(2)).to.eql(24);
                expect(area(3.4)).to.eql(69.36);
            });

            it('should return add two function', function () {
                expect(_.add.apply(_, ([capacity(5), area(3)]))).to.eql(179);
                expect(_.add.apply(_, ([capacity(0.23), area(2)]))).to.eql(24.012167);
            });

        });

        describe('ceil', function () {

            var params, area;

            beforeEach(function () {
                params = datasets.ceil();
                area = params[0];
            });

            it('should verify params', function () {
                expect(area instanceof Function).to.eql(true);
                expect(params).to.have.length(2);
            });

            it('should return area of rectangle when area side is smaller than 0 return 0', function () {
                expect(area(3.2,4.6)).to.eql(15.6);
                expect(area(-2, 4)).to.eql(0);
                expect(area(0, 0)).to.eql(0);
                expect(area(-2, 4)).to.eql(0);
            });

            it('should return round up area of rectangle', function () {
                expect(_.ceil.apply(_,([area(3.2, 4.4)]))).to.eql(16);
                expect(_.ceil.apply(_,([area(2.33, 0.55)]))).to.eql(6);
                expect(_.ceil.apply(_,([area(1.74, 0.54), 4]))).to.eql(4.5601);
                expect(_.ceil.apply(_,([area(-2, 0.54), 4]))).to.eql(0);
            });
        });

        describe('divide', function () {

            var params;

            beforeEach(function () {
                params = datasets.divide();
            });

            it('should verify params', function () {
                _(params[0]).forEach(function (value) {
                    expect(typeof value).to.eql('number');
                });

                expect(params).to.have.length(2);
            });

            it('should divide two numbers a and b', function () {
                expect(_.divide.apply(_, params)).to.eql(Infinity);
            });

        });

        describe('floor', function () {

            var params;
            var capacity;

            beforeEach(function () {
                params = datasets.floor();
                capacity = params[0];
            });

            it('should verify params', function () {
                expect(capacity instanceof Function).to.eql(true);
            });

            it('should return capacity of cuboid', function () {
                expect(capacity(2, 2, 2)).to.eql(8);
                expect(capacity(2.3, 2.25, 5.43)).to.eql(28.10025);
                expect(capacity(-1, 2.25, 5.43)).to.eql(0);
                expect(capacity(3, -2, 5.43)).to.eql(0);
                expect(capacity(3, 2, -3)).to.eql(0);
            });

            it('should return number round down', function () {
                expect(_.floor.apply(_, [capacity(2,2,2)])).to.eql(8);
                expect(_.floor.apply(_, [capacity(2.2,3.3,4.4), 2])).to.eql(31.94);
            });
        });

        describe('max', function () {

            var params;

            beforeEach(function () {
                params = datasets.max();
            });

            it('should find max value (5) in user array', function () {
                expect(params).to.have.length(1);

                for(var i=0; i<params[0].length; i++){
                    expect(typeof params[0][i]).to.eql('number');
                }

                expect(_.max.apply(_, datasets.max(params))).to.eql(5);
            });
        });


        describe('maxBy', function () {

            describe('maxBy - array', function () {

                var params, arr1, arr2;

                beforeEach(function () {
                    params = datasets.maxBy1();
                    arr1 = [6, 5, 4, 8, 3];
                    arr2 = [-4, -2, -6, 0];
                });
                
                it('should verify params', function () {
                    expect(params).to.have.length(1);
                    expect(arr1 instanceof Array && arr2 instanceof Array).to.eql(true);
                });

                it('should return maxBy for array', function () {
                    expect(_.maxBy.apply(_, datasets.maxBy1(arr1))).to.eql(8);
                    expect(_.maxBy.apply(_, datasets.maxBy1(arr2))).to.eql(0);
                });
            });

            /*
            describe('maxBy - function', function () {
                it('should use maxBy for function', function () {

                });
            });
            //I have no idea how to do it. Probably maxBy doesn't support function. Help!
            */

            describe('maxBy - object', function () {

                var params;

                beforeEach(function () {
                    params = datasets.maxBy3();
                });

                it('should verify params', function () {
                    expect(params).to.have.length(2);
                    expect(params[0] instanceof Object).to.eql(true);
                    expect(typeof params[1]).to.eql('string');
                });

                it('should use maxBy object', function () {
                    expect(_.maxBy.apply(_, params)).to.eql({ Name: 'Edwin', Gold: 2500 });
                });
            });

            describe('maxBy - string', function () {

                var params;

                beforeEach(function () {
                    params = datasets.maxBy4();
                });

                it('should verify params', function () {
                    expect(params).to.have.length(1);
                });
                
                it('should find max value in string', function () {
                    expect(_.maxBy.apply(_, params)).to.eql('word');
                });
            });
        });


        describe('mean', function () {

            var params;

            beforeEach(function () {
                params = datasets.mean();
            });

            it('should find mean value (3.25) in user array', function () {
                expect(params).to.have.length(1);
                _(params[0]).forEach(function (value) {
                    expect(typeof value).to.eql('number');
                });
                expect(_.mean.apply(_, params)).to.eql(3.25);
            });
        });

        describe('meanBy', function () {
            describe('meanBy - Array', function () {

                var params;

                beforeEach(function () {
                    params = datasets.meanBy1();
                });

                it('should verify params', function () {
                    expect(params).to.have.length(1);
                    expect(params[0] instanceof Array).to.eql(true);
                });

                it('should find mean value in array', function () {
                    expect(_.meanBy.apply(_, params)).to.eql(3.25);
                });
            });

            /*
            describe('meanBy - Function', function () {
                it('should find mean value in function', function () {

                });
            });
            //I have no idea how to do it. Probably meanBy doesn't support function. Help!
            */

            describe('meanBy - Object', function () {

                var params;

                beforeEach(function () {
                    params = datasets.meanBy3();
                });

                it('should verify params', function () {
                    expect(params).to.have.length(2);
                    expect(params[0] instanceof Object).to.eql(true);
                    expect(typeof params[1]).to.eql('string');
                });

                it('should find mean value in object', function () {
                    expect(_.meanBy.apply(_, params)).to.eql(5);
                });
            });

            /*
            describe('meanBy - String', function () {
                it('should find mean value in string', function () {

                });
            });

            //I have no idea how to do it. Probably meanBy doesn't support string. Help!
            */
        });

        describe('min', function () {

            var params;

            beforeEach(function () {
                params = datasets.min();
            });

            it('should find min value (-3) in user array', function () {
                expect(params).to.have.length(1);
                _(params[0]).forEach(function (value) {
                    expect(typeof value).to.eql('number');
                });
                expect(_.min.apply(_, params)).to.eql(-3);
            });
        });


        describe('minBy', function () {
            
            describe('minBy - Array', function () {

                var params;

                beforeEach(function () {
                    params = datasets.minBy1();
                });

                it('should verify params', function () {
                    expect(params).to.have.length(1);
                    expect(params[0] instanceof Array).to.eql(true);
                });

                it('should return min value in Array', function () {
                    expect(_.min.apply(_, params)).to.eql(-1);
                });
            });

            /*
            describe('minBy - Function', function () {
                it('Function', function () {
                });
            });
            //I have no idea how to do it. Probably minBy doesn't support function. Help!
            */

            describe('minBy - Object', function () {

                var params;

                beforeEach(function () {
                    params = datasets.minBy3();
                });
                
                it('should verify params', function () {
                    expect(params).to.have.length(2);
                    expect(params[0] instanceof Object).to.eql(true);
                    expect(typeof params[1]).to.eql('string');
                });

                it('should return min value from Object', function () {
                    expect(_.min.apply(_, params)).to.eql({ Name: 'Jack', Gold: 1500 });
                });
            });

            describe('minBy - String', function () {

                var params;

                beforeEach(function () {
                    params = datasets.minBy4();
                });
                
                it('should verify params', function () {
                    expect(params).to.have.length(1);
                    expect(typeof params[0]).to.eql('string');
                });
                
                it('should return min value from string', function () {
                    expect(_.min.apply(_, params)).to.eql('e');
                });
            });
        });

        describe('multiply', function () {

            var val1;
            var val2;
            var result1;
            var params = datasets.multiply();

            beforeEach(function () {
                val1 = Math.round(Math.random() * 10);
                val2 = Math.round(Math.random() * 10);
                result1  = val1 * val2;
            });

            it('should multiply two random number', function () {
                expect(params).to.have.length(2);
                expect(_.multiply.apply(_, datasets.multiply(val1, val2))).to.eql(result1);
            });
        });

        describe('round', function () {

            var params;
            var sqrt;

            beforeEach(function () {
                params = datasets.round();
                sqrt = params[0];
            });

            it('should verify', function () {
                expect(sqrt instanceof Function).to.eql(true);
                expect(params).to.have.length(2);
            });

            it('should return sqrt number', function () {
                expect(sqrt(4)).to.eql(2);
                expect(sqrt(-1)).to.eql(NaN);
                expect(sqrt(4.2)).to.eql(2.04939015319192);
                expect(sqrt('asdf')).to.eql(NaN);
            });

            it('should return sqrt round number to precision', function () {
                expect(_.round.apply(_, [sqrt(4.2), 3])).to.eql(2.049);
                expect(_.round.apply(_, [sqrt(10), 4])).to.eql(3.1623);
                expect(_.round.apply(_, [sqrt(-10), 3])).to.eql(NaN);
            });
        });

        describe('subtract', function () {

            var params;

            beforeEach(function () {
                params = datasets.subtract();
            });

            it('should return subtract two numbers', function () {
                expect(params).to.have.length(2);
                expect(_.subtract.apply(_, params)).to.eql(15);
                expect(_.divide.apply(_, params)).to.eql(Infinity);
                expect(_.multiply.apply(_, params)).to.eql(0);
                expect(_.add.apply(_, params)).to.eql(15);
            });
        });

        describe('sum', function () {

            var params;

            beforeEach(function () {
                params = datasets.sum();
            });

            it('should return sum of array element', function () {
                expect(params).to.have.length(1);
                _(params[0]).forEach(function (value) {
                    expect(typeof value).to.eql('number');
                });
                expect(_.sum.apply(_, params)).to.eql(10);
            });
        });

        describe('sumBy', function () {

            describe('sumBy - Array', function () {

                var params;

                beforeEach(function () {
                    params = datasets.sumBy1();
                });
                
                it('should verify params', function () {
                    expect(params).to.have.length(1);
                    expect(params[0] instanceof Array).to.eql(true);
                });

                it('should return sumBy of array element', function () {
                    expect(_.sumBy.apply(_, params)).to.eql(10);
                });
            });

            /*
            describe('sumBy - Function', function () {
                it('should return sumBy of function element', function () {

                });
            });
            //I have no idea how to do it. Probably sumBy doesn't support function. Help!
            */

            describe('sumBy - Object', function () {
                
                var params;
                
                beforeEach(function () {
                    params = datasets.sumBy3();
                });
                
                it('should verify params', function () {
                    expect(params).to.have.length(2);
                    expect(params[0] instanceof Object).to.eql(true);
                    expect(typeof params[1]).to.eql('string');
                });
                
                it('should return sumBy of object element', function () {
                    expect(_.sumBy.apply(_, params)).to.eql(193);
                });
            });

            describe('sumBy - String', function () {

                var params;

                beforeEach(function () {
                    params = datasets.sumBy4();
                });

                it('should verify params', function () {
                    expect(params).to.have.length(1);
                });

                it('should return sumBy of string element', function () {
                    expect(_.sumBy.apply(_, params)).to.eql('Thisisasimplestringtext');
                });
            });
        });
    });
});

